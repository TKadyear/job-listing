const { addToListFilter } = require("./filter-bar")

describe("Function addToListFilter/setListFilter", () => {
  test('When the array is empty', () => {
    // ? arrange
    const InitialState = []
    const newData = "FrontEnd";
    const expectedValue = ["FrontEnd"]
    //  act
    const actualValue = addToListFilter(newData, InitialState);
    // * assert
    expect(actualValue).toEqual(expectedValue);
  })

  test('When the array has alredy the value', () => {
    // ? arrange
    const InitialState = ["React", "FrontEnd"]
    const newData = "FrontEnd";
    const expectedValue = ["React", "FrontEnd"]
    //  act
    const actualValue = addToListFilter(newData, InitialState);
    // * assert
    expect(actualValue).toEqual(expectedValue);
  })

  test('When the value is not a string', () => {
    // ? arrange
    const InitialState = ["FrontEnd"]
    const newData = { "role": "FrontEnd" };
    const expectedValue = ["FrontEnd"]
    //  act
    const actualValue = addToListFilter(newData, InitialState);
    // * assert
    expect(actualValue).toEqual(expectedValue);
  })


})
