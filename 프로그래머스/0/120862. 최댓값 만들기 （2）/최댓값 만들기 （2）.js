function solution(numbers) {
    const [a, b] = numbers.sort((a, b) => b - a);
    const [c, d] = numbers.sort((a, b) => a - b);
    return Math.max(a * b, c * d);
}