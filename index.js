const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');
const fs = require('fs');

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
    name: 'listShape',
    choices: ['Circle', 'Square', 'Triangle'],
  },
  {
    type: 'input',
    message: 'Enter a color for your shape',
    name: 'shapeColor',
  },
];

inquirer.prompt(questions).then(({ text, textColor, shape, shapeColor }) => {
  const shapeInstance = {
    Circle: new Circle(text, textColor, shapeColor),
    Triangle: new Triangle(text, textColor, shapeColor),
    Square: new Square(text, textColor, shapeColor),
  }[shape];

  const logoRenderer = new LogoRenderer();
  logoRenderer.applyText(text, textColor);
  logoRenderer.applyShape(shapeInstance);

  const svg = logoRenderer.renderLogo();
  fs.writeFileSync('logo.svg', svg);
  console.log('Generated logo.svg');
});
