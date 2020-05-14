const { dataActions } = require("../scripts/dataTools/DataActions");

const {
  checkIfTrue,
  getItem,
  getHeadOfList,
  getTailOfList,
  getFilteredByProperty,
  getSortedData,
  getArrayFromObject,
  getCountedAuthorsStructure,
  getLiteraturesTypes,
  getNumberOfAuthors,
} = dataActions;

test("check given condition", () => {
  const bigValue = 20;
  const smallValue = 10;
  const testedTruthyCondition = bigValue > smallValue;
  const testedFalsyCondition = smallValue > bigValue;
  const testedTruthyValue = "passed";
  const testedFalsyValue = "failed";

  expect(
    checkIfTrue(testedTruthyCondition, testedTruthyValue, testedFalsyValue)
  ).toBe(testedTruthyValue);

  expect(
    checkIfTrue(testedFalsyCondition, testedTruthyValue, testedFalsyValue)
  ).toBe(testedFalsyValue);
});

test("filter given array by property", () => {
  const testedArray = [
    { type: "french literature", authors: 350 },
    { type: "belgian literature", authors: 150 },
  ];
  const filterValue = 300;
  const rangeValue = 1000;
  const propertyName = "authors";
  const expectedArray = [{ type: "french literature", authors: 350 }];

  expect(
    getFilteredByProperty(testedArray, filterValue, rangeValue, propertyName)
  ).toStrictEqual(expectedArray);
});

test("filter with invalid inputs", () => {
  const testedEmptyArray = [];
  const testedEmptyValue = null;
  const testedArray = [
    { type: "french literature", authors: 350 },
    { type: "belgian literature", authors: 150 },
  ];
  const filterValue = 300;
  const rangeValue = 1000;
  const propertyName = "authors";
  const expectedArray = [];

  expect(
    getFilteredByProperty(
      testedEmptyArray,
      filterValue,
      rangeValue,
      propertyName
    )
  ).toStrictEqual(expectedArray);

  expect(
    getFilteredByProperty(
      testedArray,
      filterValue,
      testedEmptyValue,
      propertyName
    )
  ).toStrictEqual(expectedArray);
});

test("sort given array by property", () => {
  const testedArray = [
    { type: "swedish literature", authors: 50 },
    { type: "french literature", authors: 350 },
    { type: "portugal literature", authors: 15 },
    { type: "belgian literature", authors: 150 },
  ];
  const propertyName = "authors";
  const expectedArray = [
    { type: "french literature", authors: 350 },
    { type: "belgian literature", authors: 150 },
    { type: "swedish literature", authors: 50 },
    { type: "portugal literature", authors: 15 },
  ];

  expect(getSortedData(testedArray, propertyName)).toStrictEqual(expectedArray);
});

test("sort with invaild input", () => {
  const testedEmptyArray = [];
  const emptyProperty = "";
  const testedArray = [
    { type: "swedish literature", authors: 50 },
    { type: "french literature", authors: 350 },
    { type: "portugal literature", authors: 15 },
    { type: "belgian literature", authors: 150 },
  ];
  const propertyName = "authors";
  const expectedArray = [];

  expect(getSortedData(testedEmptyArray, propertyName)).toStrictEqual(
    expectedArray
  );
  expect(getSortedData(testedArray, emptyProperty)).toStrictEqual(
    expectedArray
  );
});

test("return unaffected item", () => {
  const testedString = "#fff";
  const testedNumber = 23;
  const testedArray = [1, 2, 3];

  expect(getItem(testedString)).toBe(testedString);
  expect(getItem(testedNumber)).toBe(testedNumber);
  expect(getItem(testedArray)).toBe(testedArray);
});

test("handle empty input in getItem case", () => {
  const testedUndefined = undefined;
  const testedFalsyValue = "";
  const testedNull = null;

  expect(getItem(testedUndefined)).toBeNull();
  expect(getItem(testedFalsyValue)).toBeNull();
  expect(getItem(testedNull)).toBeNull();
});

test("get always first item from array", () => {
  const testedArray = [1, 2, 3];
  const testedArrayWithOnlyOneElement = [1];

  expect(getHeadOfList(testedArray)).toBe(testedArray[0]);
  expect(getHeadOfList(testedArray)).toBeDefined();

  expect(getHeadOfList(testedArrayWithOnlyOneElement)).toBe(testedArray[0]);
  expect(getHeadOfList(testedArrayWithOnlyOneElement)).toBeDefined();
});

test("get always last item from array", () => {
  const testedArray = [1, 2, 3];
  const testedArrayWithOnlyOneElement = [1];

  expect(getTailOfList(testedArray)).toBe(testedArray[testedArray.length - 1]);
  expect(getTailOfList(testedArray)).toBeDefined();

  expect(getTailOfList(testedArrayWithOnlyOneElement)).toBe(
    testedArray[testedArrayWithOnlyOneElement.length - 1]
  );
  expect(getTailOfList(testedArrayWithOnlyOneElement)).toBeDefined();
});

test("empty array in head / tail functions", () => {
  const testedEmptyArray = [];

  expect(getHeadOfList(testedEmptyArray)).toBeNull();
  expect(getTailOfList(testedEmptyArray)).toBeNull();
});

test("pass object to receive array", () => {
  const testedObject = { a: 1, b: 2 };
  const testedObjectWithUndefined = { a: 1, b: undefined };
  const expectedArray = [
    ["a", 1],
    ["b", 2],
  ];
  const expectedArrayWithUndefined = [
    ["a", 1],
    ["b", undefined],
  ];

  expect(getArrayFromObject(testedObject)).toStrictEqual(
    expect.arrayContaining(expectedArray)
  );
  expect(getArrayFromObject(testedObjectWithUndefined)).toStrictEqual(
    expect.arrayContaining(expectedArrayWithUndefined)
  );
});

test("pass empty object or falsy value, receive empty array", () => {
  const testedEmptyObject = {};
  const testedUndefined = undefined;
  const expectedEmptyArray = [];
  const expectedArray = [
    ["a", 1],
    ["b", 2],
  ];

  expect(getArrayFromObject(testedEmptyObject)).toEqual(expectedEmptyArray);
  expect(getArrayFromObject(testedUndefined)).toEqual(expectedEmptyArray);

  expect(getArrayFromObject(testedEmptyObject)).toEqual(
    expect.not.arrayContaining(expectedArray)
  );
  expect(getArrayFromObject(testedUndefined)).toEqual(
    expect.not.arrayContaining(expectedArray)
  );
});

test("get proper structure with first and last elements", () => {
  const testedArray = [
    ["a", 1],
    ["b", 2],
  ];
  const headFn = getHeadOfList;
  const tailFn = getTailOfList;
  const expectedArray = [
    { name: "a", authors: 1 },
    { name: "b", authors: 2 },
  ];

  expect(getCountedAuthorsStructure(testedArray, headFn, tailFn)).toStrictEqual(
    expectedArray
  );
});

test("get empty array from counted authors structure function", () => {
  const testedEmptyArray = [];
  const headFn = getHeadOfList;
  const tailFn = getTailOfList;
  const expectedEmptyArray = [];

  expect(
    getCountedAuthorsStructure(testedEmptyArray, headFn, tailFn)
  ).toStrictEqual(expectedEmptyArray);
});

test("concat arrays in selected property", () => {
  const testedProperty = "type";
  const testedArray = [
    { id: 0, type: ["french literature"], author: "unknown" },
    { id: 1, type: ["french literature"], author: "also unknown" },
    { id: 2, type: ["belgian literature"], author: "unknown" },
  ];
  const expectedArray = [
    "french literature",
    "french literature",
    "belgian literature",
  ];

  expect(getLiteraturesTypes(testedArray, testedProperty)).toStrictEqual(
    expectedArray
  );
});

test("concat with empty array input", () => {
  const testedProperty = "type";
  const testedArray = [
    { id: 0, type: ["french literature"], author: "unknown" },
    { id: 1, type: ["french literature"], author: "also unknown" },
    { id: 2, type: ["belgian literature"], author: "unknown" },
  ];
  const testedEmptyProperty = "";
  const testedEmptyArray = [];
  const expectedEmptyArray = [];

  expect(getLiteraturesTypes(testedArray, testedEmptyProperty)).toStrictEqual(
    expectedEmptyArray
  );

  expect(getLiteraturesTypes(testedEmptyArray, testedProperty)).toStrictEqual(
    expectedEmptyArray
  );
});

test("count number of authors", () => {
  const testedArray = [
    "french literature",
    "french literature",
    "belgian literature",
  ];
  const expectedObject = { "french literature": 2, "belgian literature": 1 };

  expect(getNumberOfAuthors(testedArray)).toStrictEqual(expectedObject);
});

test("no counted authors, received empty object from empty array input", () => {
  const testedEmptyArray = [];
  const expectedEmptyObject = {};

  expect(getNumberOfAuthors(testedEmptyArray)).toStrictEqual(
    expectedEmptyObject
  );
});
