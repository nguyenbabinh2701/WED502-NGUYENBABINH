// Quản lý sản phẩm
export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

export const products: Product[] = [
  { id: 1, name: 'Laptop', price: 1500, category: 'Điện tử' },
  { id: 2, name: 'Bánh mì', price: 20, category: 'Thực phẩm' },
  { id: 3, name: 'Điện thoại', price: 800, category: 'Điện tử' },
  { id: 4, name: 'Sữa', price: 30, category: 'Thực phẩm' },
  { id: 5, name: 'Tai nghe', price: 200, category: 'Điện tử' },
];

export function filterByCategory(list: Product[], category: string): Product[] {
  return list.filter(product => product.category === category);
}

export function calculateTotalPrice(list: Product[]): number {
  return list.reduce((total, product) => total + product.price, 0);
}

export function findMinMax(list: Product[]): { min: Product; max: Product } {
  if (list.length === 0) throw new Error('Danh sách rỗng');
  let min = list[0];
  let max = list[0];
  for (const product of list) {
    if (product.price < min.price) min = product;
    if (product.price > max.price) max = product;
  }
  return { min, max };
}

// Quản lý phương tiện giao thông
export interface Vehicle {
  name: string;
  type: string;
  speed: number;
}

export enum FuelType {
  Xang = 'Xăng',
  Dien = 'Điện',
}

export interface MotorizedVehicle extends Vehicle {
  fuelType: FuelType;
}

export function calculateTravelTime(vehicle: Vehicle, distance: number): number {
  if (vehicle.speed <= 0) throw new Error('Vận tốc phải lớn hơn 0');
  return distance / vehicle.speed;
}

export const motorizedVehicles: MotorizedVehicle[] = [
  { name: 'Honda Wave', type: 'Xe máy', speed: 40, fuelType: FuelType.Xang },
  { name: 'VinFast VF e34', type: 'Ô tô', speed: 60, fuelType: FuelType.Dien },
  { name: 'Yamaha Sirius', type: 'Xe máy', speed: 45, fuelType: FuelType.Xang },
];

export const travelTimes = motorizedVehicles.map(vehicle => ({
  name: vehicle.name,
  time: calculateTravelTime(vehicle, 100),
}));
