// function merge(objA, objB) {
//   return Object.assign(objA, objB);
// }

function merge<T, U>(objA: T, objB: U): T & U {
  // T & U означає об'єднання типів T та U
  return Object.assign({}, objA, objB); //створення нового об'єкта, який містить властивості обох об'єктів
}
