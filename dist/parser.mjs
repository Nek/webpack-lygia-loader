import { parser as parser$1, generate } from "@shaderfrog/glsl-parser";

import { visit } from "@shaderfrog/glsl-parser/ast/index.js";

import { writeFileSync } from "fs";

import path from "path";

const defaultValue = {
    float: 0,
    vec2: [ 0, 0 ],
    vec3: [ 0, 0, 0 ],
    vec4: [ 0, 0, 0, 0 ],
    int: 0,
    bool: false
};

const uniforms = {};

const visitors = {
    struct: {
        enter: node => {
            console.log(node);
            node.skip();
        }
    },
    declaration_statement: {
        enter: node => {
            const declaration = node.node.declaration;
            const specified_type = declaration.specified_type;
            const qualifier = specified_type?.qualifiers?.[0]?.token;
            if (qualifier !== "uniform") {
                const type = specified_type?.specifier?.specifier.type;
                node.skip();
                if (type === "struct") {
                    console.log(node.node);
                    const specifier = (specified_type?.specifier?.specifier).declarations[0].declaration.specified_type.specifier.token;
                    const identifier = declaration.declarations?.[0].identifier.identifier;
                    console.log(qualifier, specifier, identifier);
                } else {
                    node.remove();
                }
            } else {
                const specifier = specified_type.specifier.specifier.token;
                const identifier = declaration.declarations?.[0].identifier.identifier;
                console.log(qualifier, specifier, identifier);
                uniforms[identifier] = {
                    value: defaultValue[specifier]
                };
                node.skip();
            }
        }
    },
    preprocessor: {
        enter: node => {
            node.remove();
            node.skip();
        }
    },
    function: {
        enter: node => {
            node.remove();
            node.skip();
        }
    },
    default_case: {
        enter: node => {
            node.remove();
            node.skip();
        }
    }
};

function parser(source) {
    const callback = this.async();
    try {
        const ast = parser$1.parse(source);
        visit(ast, visitors);
        console.log(uniforms);
        writeFileSync(`${path.basename(this.resourcePath)}.json`, JSON.stringify(ast, null, 2));
        const generated = generate(ast);
        writeFileSync(`transformed.${path.basename(this.resourcePath)}`, generated);
        callback(null, `export default \`${source}\`;`);
    } catch (err) {
        callback(err);
    }
}

export { parser as default };
