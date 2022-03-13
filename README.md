# Smooth.ts

A new age typescript bindings for [smooth.js](https://github.com/osuushi/Smooth.js/) used under MIT license.


## Motivation

Smooth.js is a super lightweight library that allows doing interpolations very performant way. It's slightly different than the other libraries because result curve goes through input points. The only problem is that this library has more than 10 years and has really poor bindings for technologies used in 2022.

## Demo

Link to demo available [here](https://codepen.io/aliath/pen/WNXBzPw)

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
import { Smooth } from 'smooth.ts';

const smoother = Smooth([2, 1, 3, 7]);

// take interpolation between 0th and 1st element at half of segment
smoother(0.5); // 1.375
```

Works also for 2d data:
```ts
import { Smooth } from 'smooth.ts';

const points = [[10, 15], [32, 40], [1, 0]];
const pointsSmoother = Smooth(points);

// take interpolation between 0th and 1st point at half of segment
pointsSmoother(0.5); // [22.9375, 30]
```

## License

[MIT](https://choosealicense.com/licenses/mit/)