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

/*
contributors: Patricio Gonzalez Vivo
description: some useful math constants
license:
    - Copyright (c) 2021 Patricio Gonzalez Vivo under Prosperity License - https://prosperitylicense.com/versions/3.0.0
    - Copyright (c) 2021 Patricio Gonzalez Vivo under Patron License - https://lygia.xyz/license
*/
uniform float uTime;

