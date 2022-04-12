const { addToListFilter, filterAllJobs, isTheJobMatchFilter } = require("./filter-bar")

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
describe("Function for know if the Job pass match with the list of filters", () => {
  const job = {
    "id": 1,
    "company": "Photosnap",
    "logo": "./images/photosnap.svg",
    "new": true,
    "featured": true,
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["HTML", "CSS", "JavaScript"],
    "tools": []
  }
  // TODO Falta hacer todos los test para todos los datos que son requeridos, role,language y tools
  // * Hay que comprobar todos los casos.
  test("If the job match with the filter but the list Filter only has one value", () => {
    // ? arrange
    const ListFilter = ["Frontend"];
    //   act
    const actualValue = isTheJobMatchFilter(job, ListFilter);
    // * assert
    expect(actualValue).toBeTruthy();
  })
  test("If the job not match with the filter ", () => {
    // ? arrange
    const ListFilter = ["Python"];
    //   act
    const actualValue = isTheJobMatchFilter(job, ListFilter);
    // * assert
    expect(actualValue).toBeFalsy();
  })
  test("If the job match with one filter only but not with the others", () => {
    // ? arrange
    const ListFilter = ["Frontend", "Sass"];
    //   act
    const actualValue = isTheJobMatchFilter(job, ListFilter);
    // * assert
    expect(actualValue).toBeFalsy();
  })
})

describe("Function for filter the listData of Jobs", () => {
  // Dependencie of ListData
  const InitialListData = [
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }];
  test("When the array of filter is empty", () => {
    // ? arrange
    const ListFilter = [];
    const expectedValue = [...InitialListData];
    //   act
    const actualValue = filterAllJobs(InitialListData, ListFilter);
    // * assert
    expect(actualValue).toEqual(expectedValue);
  })
  test('When the filter is a role', () => {
    // ? arrange
    const ListFilter = ["Frontend"];
    const expectedValue = [
      {
        "id": 1,
        "company": "Photosnap",
        "logo": "./images/photosnap.svg",
        "new": true,
        "featured": true,
        "position": "Senior Frontend Developer",
        "role": "Frontend",
        "level": "Senior",
        "postedAt": "1d ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["HTML", "CSS", "JavaScript"],
        "tools": []
      },
      {
        "id": 3,
        "company": "Account",
        "logo": "./images/account.svg",
        "new": true,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2d ago",
        "contract": "Part Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"]
      }
    ]
    //  act
    const actualValue = filterAllJobs(InitialListData, ListFilter);
    // * assert
    expect(actualValue).toEqual(expectedValue);
  })
  test('When the filter is a language', () => {
    // ? arrange
    const ListFilter = ["Python"];
    const expectedValue = [
      {
        "id": 2,
        "company": "Manage",
        "logo": "./images/manage.svg",
        "new": true,
        "featured": true,
        "position": "Fullstack Developer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1d ago",
        "contract": "Part Time",
        "location": "Remote",
        "languages": ["Python"],
        "tools": ["React"]
      }
    ]
    //  act
    const actualValue = filterAllJobs(InitialListData, ListFilter);
    // * assert
    expect(actualValue).toEqual(expectedValue);
  })
  test('When nothing match with the filter', () => {
    // ? arrange
    const ListFilter = ["Python", "Sass"];
    const expectedValue = [];
    //  act
    const actualValue = filterAllJobs(InitialListData, ListFilter);
    // * assert
    expect(actualValue).toEqual(expectedValue);
  })

})
// TODO como planteo qué hacer después de que nada coincida con el filter
