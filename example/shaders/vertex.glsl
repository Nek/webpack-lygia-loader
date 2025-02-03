out vec2 vUv;

struct PointLight {
    vec3 position;
    vec3 color;
    float intensity;
};

uniform PointLight pointLights[10];

void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}
