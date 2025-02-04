declare module '*.glsl' {
    const content: string;
    export default content;
    export const uniforms: Record<string, any>;
}

