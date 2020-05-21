const { graphActions } = require("../scripts/graphTools/GraphActions");

const {
  getElementById,
  getXAxisTextDimension,
  mapArray,
  getMaxiumElement,
  getYAxisDimension,
  translate,
  rotate,
  getLabelsYPosition,
  getAnimatedBtn,
} = graphActions;

test("get element from DOM by id", () => {
  const exampleId = "example";
  const exampleButton = `<button id="${exampleId}">Show</button>`;
  document.body.innerHTML = exampleButton;
  const expectedButton = document.getElementById(exampleId);

  expect(getElementById(exampleId)).toEqual(expectedButton);
});

test("get element from DOM with invalid id", () => {
  const exampleId = "example";
  const exampleIdEmptyString = "";
  const exampleIdNumber = 58;
  const exampleButton = `<button id="${exampleId}">Show</button>`;
  document.body.innerHTML = exampleButton;

  expect(getElementById(exampleIdEmptyString)).toBeNull();
  expect(getElementById(exampleIdNumber)).toBeNull();
});

test("measure string length", () => {
  const exampleShortString = "example";
  const exampleLongString = "exampleExampleExampleExample";
  const exampleMarginBottomValue = 100;
  const expectedShortString = "example";
  const expectedLongString = `${exampleLongString.substr(
    0,
    exampleMarginBottomValue / 6
  )}...`;

  expect(
    getXAxisTextDimension(exampleShortString, exampleMarginBottomValue)
  ).toBe(expectedShortString);

  expect(
    getXAxisTextDimension(exampleLongString, exampleMarginBottomValue)
  ).toBe(expectedLongString);
});

test("measure string with invalid inputs", () => {
  const exampleShortString = "example";
  const exampleInvaildMarginBottomValue = "100";
  const expectedString = "";

  expect(
    getXAxisTextDimension(exampleShortString, exampleInvaildMarginBottomValue)
  ).toBe(expectedString);
});

test("map array to get property - valid / invalid case", () => {
  const exampleArray = [
    { a: "first name", b: "last name" },
    { a: "first name", b: "last name" },
    { a: "first name", b: "last name" },
  ];
  const exampleProp = "a";
  const exampleInvalidProp = 23;
  const expectedArray = ["first name", "first name", "first name"];
  const expectedValue = 0;

  expect(mapArray(exampleArray, exampleProp)).toStrictEqual(expectedArray);
  expect(mapArray(exampleArray, exampleInvalidProp)).toBe(expectedValue);
});

test("get maximum value from array - valid / invalid case", () => {
  const exampleArray = [1, 10, 100, 54, 67, 345, 12];
  const exampleEmptyArray = [];
  const exampleObject = { a: 12, b: 45, c: 34 };
  const expectedValue = 345;
  const expectedNoValue = 0;

  expect(getMaxiumElement(exampleArray)).toEqual(expectedValue);
  expect(getMaxiumElement(exampleEmptyArray)).toEqual(expectedNoValue);
  expect(getMaxiumElement(exampleObject)).toEqual(expectedNoValue);
});

test("get proper values on y axis", () => {
  const exampleBiggerValue = 2100;
  const exampleSmallerValue = 150;
  const exampleSmallValue = 12;
  const valueOfZero = 0;
  const invalidInput = "23";
  const expectedBiggerValue = 3000;
  const expectedSmallerValue = 200;
  const expectedSmallValue = 100;
  const expectedNoValue = 0;

  expect(getYAxisDimension(exampleBiggerValue)).toBe(expectedBiggerValue);
  expect(getYAxisDimension(exampleSmallerValue)).toBe(expectedSmallerValue);
  expect(getYAxisDimension(exampleSmallValue)).toBe(expectedSmallValue);
  expect(getYAxisDimension(valueOfZero)).toBe(expectedNoValue);
  expect(getYAxisDimension(invalidInput)).toBe(expectedNoValue);
});

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

  expect(rotate(exampleNumber)).toBe(`rotate(${exampleNumber})`);
});

test("rotate with invaild input", () => {
  const exampleValue = "10";

  expect(rotate(exampleValue)).toBe(`rotate(0)`);
});

test("set labels y position", () => {
  const d3 = require("d3");
  const exampleItem = 250;
  const exampleScaleFn = d3.scaleLinear().range([550, 0]).domain([0, 400]);
  const exampleRadiusValue = 10;
  const expectedValue = exampleScaleFn(exampleItem) - exampleRadiusValue * 1.5;

  expect(
    getLabelsYPosition(exampleItem, exampleScaleFn, exampleRadiusValue)
  ).toBe(expectedValue);
});

test("set labels y position with invalid input", () => {
  const d3 = require("d3");
  const exampleItem = 250;
  const exampleInvalidItem = "250";
  const exampleScaleFn = d3.scaleLinear().range([550, 0]).domain([0, 400]);
  const exampleInvalidScaleFn = "function";
  const exampleRadiusValue = 10;

  expect(
    getLabelsYPosition(exampleInvalidItem, exampleScaleFn, exampleRadiusValue)
  ).toBeNull();
  expect(
    getLabelsYPosition(exampleItem, exampleInvalidScaleFn, exampleRadiusValue)
  ).toBeNull();
});

test("pass DOM element and class", () => {
  const exampleId = "example";
  const exampleClass = "active";
  const exampleButton = `<button id="${exampleId}">Show</button>`;
  document.body.innerHTML = exampleButton;
  const getExampleButton = document.getElementById(exampleId);
  const expectedButton = document
    .getElementById(exampleId)
    .classList.add(exampleClass);

  expect(getAnimatedBtn(getExampleButton, exampleClass)).toEqual(
    expectedButton
  );
});

test("pass DOM element with invalid class", () => {
  const exampleId = "example";
  const exampleClass = "";
  const exampleButton = `<button id="${exampleId}">Show</button>`;
  document.body.innerHTML = exampleButton;
  const getExampleButton = document.getElementById(exampleId);

  expect(getAnimatedBtn(getExampleButton, exampleClass)).toBeNull();
});
