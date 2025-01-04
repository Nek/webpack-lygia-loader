#version 300 es

in vec3 position;
in vec2 uv;

void main() {
    gl_Position = vec4(position, 1.0);
}
