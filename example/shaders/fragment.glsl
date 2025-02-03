precision highp float;

struct ValueWithCurve {
  vec2 value;
  vec4 bezier;
};

struct ColorWithCurve {
  vec3[2] value;
  vec4 bezier;
};

struct ObjectSettings {
  ValueWithCurve alpha;
  ValueWithCurve pointSize;
  ColorWithCurve color;
};

struct Objects {
  ObjectSettings gel;
  ObjectSettings py;
  ObjectSettings pillow;
};

uniform Objects objects;

#include "lygia/math/const.glsl"
#include "common/noise.glsl"

out vec4 fragColor;
in vec2 vUv;

uniform float uTime;

void main() {
    float n = noise(vUv * 10.0);
    vec3 color = vec3(n);
    
    // Use PI from lygia/math/const.glsl
    color *= abs(sin(PI * vUv.x));
    
    fragColor = vec4(color, 1.0);
}
