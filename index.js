// Importing necessary modules and classes

const inquirer = require('inquirer');
const { Circle, Square, Triangle, LogoRenderer } = require('./lib/shapes');
const fs = require('fs');
// Prompting the user with the questions array, and then executing the following function when the user has answered all of them

const questions = [
  {
    type: 'input',
    message: 'Enter 1-3 characters for your logo text.',
    name: 'text',
    validate: (input) => input.length <= 3 || 'Input must be three characters or fewer.',
  },
  {
    type: 'input',
    message: 'Enter a color for your text',
    name: 'textColor',
  },
  {
    type: 'list',
    message: 'Please choose a shape for your logo.',
    name: 'shape',
    choices: ['Circle', 'Square', 'Triangle'],
  },
  {
    type: 'input',
    message: 'Enter a color for your shape',
    name: 'shapeColor',
  },
];
// Prompting the user with the questions array, and then executing the following function when the user has answered all of them

inquirer.prompt(questions).then(({ text, textColor, shape, shapeColor }) => {
  const shapeInstance = {
    Circle: new Circle(text, textColor, shapeColor),
    Triangle: new Triangle(text, textColor, shapeColor),
    Square: new Square(text, textColor, shapeColor),
  }[shape];
  // Creating a new LogoRenderer object and applying the user-provided text and shape to it

  const logoRenderer = new LogoRenderer();
  logoRenderer.applyText(text, textColor);
  logoRenderer.applyShape(shapeInstance);
  // Rendering the logo as an SVG string and writing it to a file

  const svg = logoRenderer.renderLogo();
  fs.writeFileSync('./examples/logo.svg', svg);
  console.log('Generated logo.svg');
});
