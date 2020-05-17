const { graphActions } = require("../scripts/graphTools/GraphActions");

const { translate, rotate } = graphActions;

test("input some values to translate", () => {
  const exampleValues = { x: 15, y: 20 };

  expect(translate(exampleValues.x, exampleValues.y)).toBe(
    `translate(${exampleValues.x}, ${exampleValues.y})`
  );
});

test("translate with invaild input data", () => {
  const exampleValues = { x: "string", y: 20 };

  expect(translate(exampleValues.x, exampleValues.y)).toBe(`translate(0, 0)`);
});

test("rotate with input number", () => {
  const exampleNumber = 10;

  expect(rotate(exampleNumber)).toEqual(`rotate(${exampleNumber})`);
});

test("rotate with invaild input", () => {
  const exampleValue = "10";

  expect(rotate(exampleValue)).toEqual(`rotate(0)`);
});
