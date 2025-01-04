const fetch = require('node-fetch');
const fs = require('fs/promises');
const path = require('path');

const CACHE_DIR = path.join(process.cwd(), '.lygia-cache');

async function ensureCacheDir() {
  try {
    await fs.mkdir(CACHE_DIR, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

async function getCachedFile(url) {
  const filename = path.join(CACHE_DIR, Buffer.from(url).toString('base64'));
  try {
    return await fs.readFile(filename, 'utf8');
  } catch (err) {
    if (err.code !== 'ENOENT') throw err;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }
    const content = await response.text();
    await fs.writeFile(filename, content);
    return content;
  }
}

async function resolveLygia(source) {
  await ensureCacheDir();
  
  const lines = source.split(/\r?\n/);
  const resolvedLines = await Promise.all(
    lines.map(async (line) => {
      const line_trim = line.trim();
      if (line_trim.startsWith('#include "lygia')) {
        const include_url = 'https://lygia.xyz' + 
          line_trim.substring(15).replace(/\"|\;|\s/g, '');
        return await getCachedFile(include_url);
      }
      return line;
    })
  );

  return resolvedLines.join('\n');
}

module.exports = async function(source) {
  const callback = this.async();
  try {
    const result = await resolveLygia(source);
    callback(null, result);
  } catch (err) {
    callback(err);
  }
};
