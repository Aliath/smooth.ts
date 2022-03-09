declare module 'smooth.ts' {
  // @ts-ignore
  const Methods = {
    METHOD_CUBIC: 'cubic',
    METHOD_LANCZOS: 'lanczos',
    METHOD_LINEAR: 'linear',
    METHOD_NEAREST: 'nearest',
    METHOD_SINC: 'sinc',
  } as const;
  type Method = typeof Methods[keyof typeof Methods];

  // @ts-ignore
  const Clips = {
    CLIP_CLAMP: 'clamp',
    CLIP_MIRROR: 'mirror',
    CLIP_PERIODIC: 'periodic',
    CLIP_ZERO: 'zero',
  } as const;
  type Clip = typeof Clips[keyof typeof Clips];

  type ValueType = number | number[];
  interface Config {
    method?: Method;
    clip?: Clip;
    cubicTension?: 0; // available tensions has the same value, shrugs
  }

  export function Smooth<T = ValueType>(points: T[], config?: Config): (segment: number) => T;

  // @ts-ignore
  Smooth.METHOD_CUBIC = Methods.METHOD_CUBIC;
  Smooth.METHOD_LANCZOS = Methods.METHOD_LANCZOS;
  Smooth.METHOD_LINEAR = Methods.METHOD_LINEAR;
  Smooth.METHOD_NEAREST = Methods.METHOD_NEAREST;
  Smooth.METHOD_SINC = Methods.METHOD_SINC;

  Smooth.CLIP_CLAMP = Clips.CLIP_CLAMP;
  Smooth.CLIP_MIRROR = Clips.CLIP_MIRROR;
  Smooth.CLIP_PERIODIC = Clips.CLIP_PERIODIC;
  Smooth.CLIP_ZERO = Clips.CLIP_ZERO;

  Smooth.CUBIC_TENSION_DEFAULT = 0 as const;
  Smooth.CUBIC_TENSION_CATMULL_ROM = 0 as const;
}