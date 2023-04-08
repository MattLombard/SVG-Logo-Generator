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
