function solution(n) {
  return String(n).split('').map(el => Number(el)).reduce((a, b) => a + b);
}