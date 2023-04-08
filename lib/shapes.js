class Shape {
  constructor(text, textColor, shapeColor) {
    this.shapeColor = shapeColor;
    this.textColor = textColor;
    this.text = text;
  }

  changeShapeColor(newShapeColor) {
    this.shapeColor = newShapeColor;
  }
}

class Triangle extends Shape {
  render() {
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

class LogoRenderer {
  constructor() {
    this.textElement = '';
    this.shapeElement = '';
  }

  renderLogo() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
  }

  applyText(text, textColor) {
    this.textElement = `<text x="150" y="110" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>`;
  }

  applyShape(shape) {
    this.shapeElement = shape.render();
  }
}

module.exports = { Triangle, Circle, Square, LogoRenderer };
