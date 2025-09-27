let myAge: number = 20; 
let hasCar: boolean = false;
let myName: string = "ten";

let myCourse: "Typescript" = "Typescript";

let myCourses: string[] = ["Nodejs", "JSNC", "Typescript"];

let myPoints: number[] = [1, 2, 3, 4];

// Interface Student
interface Student {
  id: number;
  name: string;
  age: number;
  address: string;
  vneid: string;
}

let student: Student = {
  id: 2025,
  name: "binh",
  age: 20,
  address: "hanoi",
  vneid: "0123",
};

// any type (ít dùng trong thực tế)
let anyStudent: any = {
  id: "2",
};

// Hàm trả về string
function addNumber(): string {
  return "1";
}

// Hàm đếm ký tự
function demkytu(str: string, char: string): string {
  let count: number = 0;
  for (const c of str) {
    if (c.toLocaleUpperCase() === char.toLocaleUpperCase()) {
      count++;
    }
  }
  return `Số lần xuất hiện ký tự "${char}" trong chuỗi "${str}" là ${count} lần`;
}

console.log(demkytu("Hello World", "o"));

// Union type
let result: number | string | boolean;
result = 42;
result = "success";
result = true;

// Literal union type
let statusCode: "success" | "error";
let orderStatus: "Pending" | "processing" | "confirmed";

statusCode = "success";
statusCode = "error";

let value: string | null = null;
let count: number | undefined = undefined;
let hasScore: false | undefined = false;

// unknown type
let input: unknown;
if (typeof input === "string") {
  input.toLocaleUpperCase();
}

// any + type assertion
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
let strLength2: number = (<string>someValue).length;

console.log(myName);

// Hàm tính chu vi hình chữ nhật
function getPerimeter(width: number, height: number): number {
  return 2 * (width + height);
}

const w: number = 5;
const h: number = 10;

console.log(`Chu vi hình chữ nhật = ${getPerimeter(w, h)}`);
