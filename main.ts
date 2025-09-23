let myName: string = "ten"
console.log(myName);

// Hàm tính chu vi hình chữ nhật
function getPerimeter(width: number, height: number): number {
  return 2 * (width + height);
}

const w: number = 5;
const h: number = 10;

console.log(`Chu vi hình chữ nhật = ${getPerimeter(w, h)}`);