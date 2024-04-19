const another: string =   
  'Hello';

const anotherFunction = (another: string): string => {
    console.log(another
    
    );
    console.log(" hey")
  return another;
}

const obj = {
  another: 'hey',
  anotherFunction: (another: string): string => {
    console.log(another);
    return another;
  },
}