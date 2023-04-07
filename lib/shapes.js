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
