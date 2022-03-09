# Smooth.ts

A new age typescript binding for [smooth.js](https://github.com/osuushi/Smooth.js/) used under MIT license.


## Motivation

Smooth.js is a super lightweight library that allows doing interpolations very performant way. It's slightly different than the other libraries because result curve goes through input points. The only problem is that this library has more than 10 years and has really poor bindings for technologies used in 2022.

## Solution

I've taken result JS library (version: 0.1.6) and created bindings for it what makes usage of it much easier.

## Installation

```bash
yarn add smooth.ts
```

or with npm

```bash
npm install --save smooth.ts
```


## Usage

```ts
import Smooth from 'smooth.ts';

const smoother = Smooth([2, 1, 3, 7]);

// take interpolation between <0; 1> in half segment
smoother(0.5); // 1.375
```

## License

[MIT](https://choosealicense.com/licenses/mit/)