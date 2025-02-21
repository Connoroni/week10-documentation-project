# week10-documentation-project

## The Team

- Connor and Jackie
- Collaborated on GitHub and trello
- Used Discord for communication outside of class hours
- Worked together well, no real problems other than the difficulty of Jackie's internet being down

## About

- [npm page](https://www.npmjs.com/package/p5)
- [Website](https://p5js.org/)
- p5.js is a JavaScript library that enables users to create art through code
- It is a JavaScript port of the original Processing, which does the same but is a programming language based on Java
- The art is made in .js files called sketches which can contain audio and can be any combination of: 3D, animated, interactive, and generative/randomised
- Some examples from the website:
- [Generative succulents](https://p5js.org/sketches/1957050/)
- [Microscope Simulator](https://p5js.org/sketches/2111906/)
- [Still Life](https://p5js.org/sketches/2233559/)
- [Ghost in the Machine](https://p5js.org/sketches/2225358/)
- [Touch Grass](https://p5js.org/sketches/2225939/)
- [Slime Molds](https://p5js.org/sketches/2213463/)
- [Theremin Simulator (sound)](https://p5js.org/sketches/2221968/)
- The [reference library](https://p5js.org/reference/) is similar to what we've seen in things like Radix, and explains the different objects and motions we can create with p5

## Installation

### Vanilla js:

- Download p5.min.js from [here](https://p5js.org/download/)
- Or install p5 with npm with 'npm install p5'
- Create an index.html file and add a script tag with <script>

### React

- There used to be a package called react-p5-wrapper that simplified the process of getting p5 to work with react, but that is now deprecated and the only tutorial that didn't use that instead used react-script-tag which hasn't been updated in 7 years
- Loads of boilerplate that doesn't work anymore and is too incomprehensible to try to alter it and make it work

### Next

- Don't even try it
- Same issues as react but worse

## Create a Sketch

- The online editor allows us to create sketches and preview them instantly, without having to switch between VScode and a browser window
- setup() and draw() functions to set up the canvas and add elements to it respectively
- createCanvas(x, y) used to define height and width of the canvas in pixels
- Primitives created on canvas using functions inside draw() with arguments to determine size and position
  - An example is circle(5, 0, 1) will create a circle with diameter 1 at position 5, 0
- Many more functions used to add motion - [reference library](https://p5js.org/reference/)
