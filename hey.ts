const test: string = "hey";

const testFunction = (test: string): string => {
  console.log(test);

  let a = 1;
  return test;
};

const obj2 = {
  test: "hey",
  testFunction: (test: string): string => {
    console.log(test);
    return test;
  }
};
