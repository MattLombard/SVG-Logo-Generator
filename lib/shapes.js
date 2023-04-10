// Shape class that represents a generic shape with text, text color, and shape color properties

class Shape {
  constructor(text, textColor, shapeColor) {
    this.shapeColor = shapeColor;
    this.textColor = textColor;
    this.text = text;
  }
  // Method to change the color of the shape

  changeShapeColor(newShapeColor) {
    this.shapeColor = newShapeColor;
  }
}
// Specific shape class that extends Shape class and represents a triangle shape

class Triangle extends Shape {
  render() {
    // render the shape as an svg element
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect width="120" height="120" x="90" y="40" fill="${this.shapeColor}" />`;
  }
}
// LogoRenderer class that renders a logo with a shape and text

class LogoRenderer {
  constructor() {
    this.textElement = '';
    this.shapeElement = '';
  }
  // render logo with the shape and text element
  renderLogo() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
  }
  // set text element of logo
  applyText(text, textColor) {
    this.textElement = `<text x="150" y="110" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>`;
  }
  // set shape element of logo
  applyShape(shape) {
    this.shapeElement = shape.render();
  }
}

module.exports = { Triangle, Circle, Square, LogoRenderer };
