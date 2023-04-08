const { Triangle, Circle, Square, LogoRenderer } = require('./shapes');

test('Triangle render function', () => {
  const triangle = new Triangle('ABC', 'black', 'red');
  expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="red" />`);
});

test('Circle render function', () => {
  const circle = new Circle('ABC', 'black', 'red');
  expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="red" />`);
});

test('Square render function', () => {
  const square = new Square('ABC', 'black', 'red');
  expect(square.render()).toEqual(`<rect width="120" height="120" x="90" y="40" fill="red" />`);
});

test('LogoRenderer applyText, applyShape, and renderLogo functions', () => {
  const circle = new Circle('ABC', 'black', 'red');
  const logoRenderer = new LogoRenderer();
  logoRenderer.applyText('ABC', 'black');
  logoRenderer.applyShape(circle);

  const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="red" /><text x="150" y="110" font-size="40" text-anchor="middle" fill="black">ABC</text></svg>`;
  expect(logoRenderer.renderLogo()).toEqual(expectedSVG);
});
