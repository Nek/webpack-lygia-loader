#version 300 es
precision highp float;

#include "lygia/math/const.glsl"
#include "common/noise.glsl"

out vec4 fragColor;
in vec2 vUv;

void main() {
    float n = noise(vUv * 10.0);
    vec3 color = vec3(n);
    
    // Use PI from lygia/math/const.glsl
    color *= abs(sin(PI * vUv.x));
    
    fragColor = vec4(color, 1.0);
}
