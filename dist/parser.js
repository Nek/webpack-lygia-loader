import { match, P } from 'ts-pattern';
import Parser from 'tree-sitter';
import GLSL from 'tree-sitter-glsl';
const parser = new Parser();
parser.setLanguage(GLSL);
const defaultValue = {
    'float': 1,
    'vec2': [0, 0],
    'vec3': [0, 0, 0],
    'vec4': [0, 0, 0, 0],
    'int': 1,
    'bool': true,
};
const structs = {};
const uniforms = {};
export default function (source) {
    const callback = this.async();
    try {
        const tree = parser.parse(source);
        const stack = [tree.rootNode];
        while (stack.length > 0) {
            const node = stack.pop();
            match(node)
                .with({ type: 'declaration', children: [{ type: 'uniform' }, ...P.array({ text: P.string })] }, (input) => {
                const identifierType = input.children[2].type;
                const qualifier = input.children[1].text;
                if (identifierType === 'array_declarator') {
                    const identifier = input.children[2].children[0].text;
                    const quantifier = Number(input.children[2].children[2].text);
                    const value = defaultValue[qualifier] || structs[qualifier];
                    // console.log("identifier", identifier, "qualifier", qualifier, "quantifier", quantifier, "value", value);
                    uniforms[identifier] = {
                        value: Array(quantifier).fill(value)
                    };
                }
                else {
                    const identifier = input.children[2].text;
                    const value = defaultValue[qualifier] || structs[qualifier];
                    // console.log("identifier", identifier, "qualifier", qualifier, "value", value);
                    uniforms[identifier] = {
                        value
                    };
                }
            })
                .with({ type: 'struct_specifier' }, () => {
                const identifier = node.children[1].text;
                structs[identifier] = {};
                for (const child of node.children[2].children) {
                    if (child.type === 'field_declaration') {
                        if (child.children[1].childCount) {
                            let quantifier = 1;
                            for (const subChild of child.children[1].children) {
                                if (subChild.type === 'array_declarator') {
                                    quantifier = Number(subChild.children[2].text);
                                    break;
                                }
                            }
                            const qualifier = child.children[0].text;
                            const nestedIdentifier = child.children[2].text;
                            const value = defaultValue[qualifier] || structs[qualifier];
                            structs[identifier][nestedIdentifier] = Array(quantifier).fill(value);
                        }
                        else {
                            const qualifier = child.children[0].text;
                            const nestedIdentifier = child.children[1].text;
                            const value = defaultValue[qualifier] || structs[qualifier];
                            structs[identifier][nestedIdentifier] = value;
                        }
                    }
                }
            })
                .otherwise(() => {
            });
            // Push children in reverse order so they're popped in original order
            for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push(node.children[i]);
            }
        }
        // console.log(structs);
        // console.log(JSON.stringify(structs, null, 2));
        const uniformsString = JSON.stringify(uniforms, null, 2);
        // console.log(uniformsString);
        let output = `export default \`${source}\`;\n\n`;
        output += `export const uniforms = ${uniformsString};\n\n`;
        callback(null, output);
    }
    catch (err) {
        callback(err);
    }
}
;
