const username: string = 'Juan';

const sum = (a: number, b: number) => {
  return a + b;
};

sum(5, 4);

class Person {
  constructor(public age: number, public lastName: string) {}
}

const nico = new Person(25, 'Ramirez');
