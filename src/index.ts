export {};

// No index signature with a parameter of type 'string' was found on type

// EXAMPLE 1 - Using a type assertion to solve the error

const key = 'country' as string;

const obj = {
  name: 'Bobby Hadz',
  country: 'Germany',
};

// 👇️ "Germany"
console.log(obj[key as keyof typeof obj]);

// 👇️ type OnlyKeys = 'name' | 'country'
type OnlyKeys = keyof typeof obj;

// ---------------------------------------------------

// // EXAMPLE 2 - Using keyof MyType

// interface Employee {
//   name: string;
//   country: string;
// }

// const obj: Employee = {
//   name: 'Bobby Hadz',
//   country: 'Germany',
// };

// const key = 'country' as string;

// // 👇️ "Germany"
// console.log(obj[key as keyof Employee]);

// // 👇️ type OnlyKeys = 'name' | 'country'
// type OnlyKeys = keyof Employee;

// ---------------------------------------------------

// // EXAMPLE 3 - Typing the `key` variable correctly

// interface Employee {
//   name: string;
//   country: string;
// }

// const obj: Employee = {
//   name: 'Bobby Hadz',
//   country: 'Germany',
// };

// // 👇️ key can only be one of the object's keys
// const key: keyof Employee = 'country';

// // 👇️ "Germany"
// console.log(obj[key as keyof Employee]);

// ---------------------------------------------------

// // EXAMPLE 4 - Using a type predicate to solve the error

// type Employee = {
//   id: number;
//   name: string;
//   salary: number;
// };

// const employee: Employee = {
//   id: 1,
//   name: 'Bobby Hadz',
//   salary: 100,
// };

// function isAnEmployeeProperty(str: string): str is keyof Employee {
//   return ['id', 'name', 'salary'].includes(str);
// }

// const myIdentifier = 'name' as string;

// if (isAnEmployeeProperty(myIdentifier)) {
//   console.log(employee[myIdentifier]); // 👉️ "Bobby Hadz"
// }
