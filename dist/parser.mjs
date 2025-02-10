import { match, P } from "ts-pattern";

import Parser from "tree-sitter";

import GLSL from "tree-sitter-glsl";

import { writeFileSync } from "fs";

const parser = new Parser;

parser.setLanguage(GLSL);

const defaultValue = {
    float: 1,
    vec2: [ 0, 0 ],
    vec3: [ 0, 0, 0 ],
    vec4: [ 0, 0, 0, 0 ],
    int: 1,
    bool: true
};

const structs = {};

const structTypes = {};

const uniforms = {};

const uniformTypes = {};

const primitives = {
    float: "number",
    vec2: "[number, number]",
    vec3: "[number, number, number]",
    vec4: "[number, number, number, number]",
    int: "number",
    bool: "boolean"
};

function structTypeIsComplete(identifier) {
    return structTypes?.[identifier]?.endsWith("};\n") ?? false;
}

function parser$1(source) {
    const callback = this.async();
    try {
        const tree = parser.parse(source);
        const stack = [ tree.rootNode ];
        while (stack.length > 0) {
            const node = stack.pop();
            match(node).with({
                type: "declaration",
                children: [ {
                    type: "uniform"
                }, ...P.array({
                    text: P.string
                }) ]
            }, (input => {
                const identifierType = input.children[2].type;
                const qualifier = input.children[1].text;
                if (identifierType === "array_declarator") {
                    const identifier = input.children[2].children[0].text;
                    const quantifier = Number(input.children[2].children[2].text);
                    const value = defaultValue[qualifier] || structs[qualifier];
                    uniforms[identifier] = {
                        value: Array(quantifier).fill(value)
                    };
                    const type = primitives[qualifier] || qualifier;
                    uniformTypes[identifier] = {
                        value: `[${Array(quantifier).fill(type).join(", ")}]`
                    };
                } else {
                    const identifier = input.children[2].text;
                    const value = defaultValue[qualifier] || structs[qualifier];
                    uniforms[identifier] = {
                        value
                    };
                    uniformTypes[identifier] = {
                        value: primitives[qualifier] || qualifier
                    };
                }
            })).with({
                type: "struct_specifier"
            }, (() => {
                const identifier = node.children[1].text;
                structs[identifier] = {};
                if (!structTypeIsComplete(identifier)) {
                    structTypes[identifier] = `{\n`;
                }
                for (const child of node.children[2].children) {
                    if (child.type === "field_declaration") {
                        if (child.children[1].childCount) {
                            let quantifier = 1;
                            for (const subChild of child.children[1].children) {
                                if (subChild.type === "array_declarator") {
                                    quantifier = Number(subChild.children[2].text);
                                    break;
                                }
                            }
                            const qualifier = child.children[0].text;
                            const nestedIdentifier = child.children[2].text;
                            const value = defaultValue[qualifier] || structs[qualifier];
                            structs[identifier][nestedIdentifier] = Array(quantifier).fill(value);
                            if (!structTypeIsComplete(identifier)) {
                                const type = primitives[qualifier] || qualifier;
                                structTypes[identifier] += `${nestedIdentifier}: [${Array(quantifier).fill(type).join(", ")}];\n`;
                            }
                        } else {
                            const qualifier = child.children[0].text;
                            const nestedIdentifier = child.children[1].text;
                            const value = defaultValue[qualifier] || structs[qualifier];
                            structs[identifier][nestedIdentifier] = value;
                            if (!structTypeIsComplete(identifier)) {
                                structTypes[identifier] += `${nestedIdentifier}: ${primitives[qualifier] || qualifier};\n`;
                            }
                        }
                    }
                }
                if (!structTypeIsComplete(identifier)) {
                    structTypes[identifier] += "};\n";
                }
            })).otherwise((() => {}));
            for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push(node.children[i]);
            }
        }
        const structTypesString = Object.entries(structTypes).map((([key, value]) => `export interface ${key} ${value}\n`)).join("\n");
        const uniformTypesString = `export interface Uniforms ${JSON.stringify(uniformTypes, null, 2)}`;
        const uniformsString = `export const defaultUniforms: Uniforms = ${JSON.stringify(uniforms, null, 2)};`;
        let output = `${structTypesString}${uniformTypesString}\n${uniformsString}`.replaceAll('"', "");
        writeFileSync(this.resourcePath + ".ts", output);
        callback(null, source);
    } catch (err) {
        callback(err);
    }
}

export { parser$1 as default };
