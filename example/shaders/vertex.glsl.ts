export interface PointLight {
position: [number, number, number];
color: [number, number, number];
intensity: number;
};


export interface ValueWithCurve {
value: [number, number];
bezier: [number, number, number, number];
};


export interface ColorWithCurve {
value: [[number, number, number], [number, number, number]];
bezier: [number, number, number, number];
};


export interface ObjectSettings {
alpha: ValueWithCurve;
pointSize: ValueWithCurve;
color: ColorWithCurve;
};


export interface Objects {
gel: ObjectSettings;
py: ObjectSettings;
pillow: ObjectSettings;
};

export interface Uniforms {
  pointLights: {
    value: [PointLight, PointLight, PointLight, PointLight, PointLight, PointLight, PointLight, PointLight, PointLight, PointLight]
  },
  objects: {
    value: Objects
  },
  uTime: {
    value: number
  }
}
export const defaultUniforms: Uniforms & { [uniform: string]: { value: any }; } = {
  pointLights: {
    value: [
      {
        position: [
          0,
          0,
          0
        ],
        color: [
          0,
          0,
          0
        ],
        intensity: 1
      },
      {
        position: [
          0,
          0,
          0
        ],
        color: [
          0,
          0,
          0
        ],
        intensity: 1
      },
      {
        position: [
          0,
          0,
          0
        ],
        color: [
          0,
          0,
          0
        ],
        intensity: 1
      },
      {
        position: [
          0,
          0,
          0
        ],
        color: [
          0,
          0,
          0
        ],
        intensity: 1
      },
      {
        position: [
          0,
          0,
          0
        ],
        color: [
          0,
          0,
          0
        ],
        intensity: 1
      },
      {
        position: [
          0,
          0,
          0
        ],
        color: [
          0,
          0,
          0
        ],
        intensity: 1
      },
      {
        position: [
          0,
          0,
          0
        ],
        color: [
          0,
          0,
          0
        ],
        intensity: 1
      },
      {
        position: [
          0,
          0,
          0
        ],
        color: [
          0,
          0,
          0
        ],
        intensity: 1
      },
      {
        position: [
          0,
          0,
          0
        ],
        color: [
          0,
          0,
          0
        ],
        intensity: 1
      },
      {
        position: [
          0,
          0,
          0
        ],
        color: [
          0,
          0,
          0
        ],
        intensity: 1
      }
    ]
  },
  objects: {
    value: {
      gel: {
        alpha: {
          value: [
            0,
            0
          ],
          bezier: [
            0,
            0,
            0,
            0
          ]
        },
        pointSize: {
          value: [
            0,
            0
          ],
          bezier: [
            0,
            0,
            0,
            0
          ]
        },
        color: {
          value: [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              0
            ]
          ],
          bezier: [
            0,
            0,
            0,
            0
          ]
        }
      },
      py: {
        alpha: {
          value: [
            0,
            0
          ],
          bezier: [
            0,
            0,
            0,
            0
          ]
        },
        pointSize: {
          value: [
            0,
            0
          ],
          bezier: [
            0,
            0,
            0,
            0
          ]
        },
        color: {
          value: [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              0
            ]
          ],
          bezier: [
            0,
            0,
            0,
            0
          ]
        }
      },
      pillow: {
        alpha: {
          value: [
            0,
            0
          ],
          bezier: [
            0,
            0,
            0,
            0
          ]
        },
        pointSize: {
          value: [
            0,
            0
          ],
          bezier: [
            0,
            0,
            0,
            0
          ]
        },
        color: {
          value: [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              0
            ]
          ],
          bezier: [
            0,
            0,
            0,
            0
          ]
        }
      }
    }
  },
  uTime: {
    value: 1
  }
};