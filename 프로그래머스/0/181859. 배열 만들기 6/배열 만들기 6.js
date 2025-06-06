function solution(arr) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (result.length === 0) {
            result.push(arr[i]);
        } else if (result.length !== 0 && result[result.length - 1] === arr[i]) {
            result.pop();
        } else if (result.length !== 0 && result[result.length - 1] !== arr[i]) {
            result.push(arr[i]);
        }
    }
    
    return result.length ? result : [-1];
}