import { LoaderContext } from 'webpack';
// import { parser, generate } from '@shaderfrog/glsl-parser';
// import { type DeclarationNode, visit, type NodeVisitors, type Path, type DeclarationStatementNode, DeclaratorListNode, FullySpecifiedTypeNode, KeywordNode, IdentifierNode, QualifierDeclaratorNode, TypeSpecifierNode, DefaultCaseNode, FunctionNode, PreprocessorNode, StructDeclarationNode, StructNode, LiteralNode } from '@shaderfrog/glsl-parser/ast/index.js';
import { writeFileSync } from 'fs';
import path from 'path';
// import { match, P } from 'ts-pattern';

import Parser from 'tree-sitter';
import GLSL from 'tree-sitter-glsl';

const parser = new Parser();
parser.setLanguage(GLSL as Parser.Language);


const defaultValue: Record<string, Primitive> = {
    'float': 0,
    'vec2': [0, 0],
    'vec3': [0, 0, 0],
    'vec4': [0, 0, 0, 0],
    'int': 0,
    'bool': false,   
}
type Primitive = number | [number] | [number, number] | [number, number, number] | [number, number, number, number] | boolean | Float32Array;
interface Struct {
    [key: string]: Primitive | Struct;
}
interface Uniform {
    value: Primitive | Struct;
}
type Uniforms = Record<string, Uniform>;

const structs: Record<string, Struct> = {};
const uniforms: Uniforms = {};

// const visitors: NodeVisitors = {
//     struct: {
//         enter: (node: Path<StructNode>) => {
//             console.log(node);
//             node.skip();
//         }
//     },
//     declaration_statement: {
//         enter: (node: Path<DeclarationStatementNode>) => {
//             const declaration = node.node.declaration as DeclaratorListNode;
//             const specified_type = declaration.specified_type as FullySpecifiedTypeNode;
//             const qualifier = (specified_type?.qualifiers?.[0] as KeywordNode)?.token;
//             if (qualifier !== 'uniform') {
//                 const type = specified_type?.specifier?.specifier.type;
//                 node.skip();
//                 if (type === 'struct') {
//                     console.log(node.node);
//                     const specifier = (specified_type?.specifier?.specifier as StructNode).declarations[0].declaration.specified_type.specifier.token;
//                     const identifier = declaration.declarations?.[0].identifier.identifier;
//                     console.log(qualifier, specifier, identifier);
//                     // TODO: Handle structs
//                 } else {
//                     node.remove();
//                 }
//             } else {
//                 const specifier = (specified_type.specifier.specifier as KeywordNode).token;
//                 const identifier = declaration.declarations?.[0].identifier.identifier;
//                 console.log(qualifier, specifier, identifier);
//                 uniforms[identifier] = { value: defaultValue[specifier] };
//                 node.skip();
//             }
//         }
//     },
//     preprocessor: {
//         enter: (node: Path<PreprocessorNode>) => {
//             node.remove();
//             node.skip();
//         }
//     },
//     function: {
//         enter: (node: Path<FunctionNode>) => {
//             node.remove();
//             node.skip();
//         }
//     },
//     default_case: {
//         enter: (node: Path<DefaultCaseNode>) => {
//             node.remove();
//             node.skip();
//         }
//     }
// }

export default function (this: LoaderContext<{}>, source: string) {
  const callback = this.async();
  try {
    const tree = parser.parse(source);
    const walker = tree.walk();
    console.log(walker.currentNode);
    // Implement depth first tree traversal with logging of a node's name AI!
    

    // console.log(tree.rootNode.toString());
    callback(null, `export default \`${source}\`;`);
  } catch (err: any) {
    callback(err);
  }
};