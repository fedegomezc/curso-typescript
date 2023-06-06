//fibonacci - First 100 terms of Fibonacci series
let prev1:number = 1;
let prev2:number = 0;
let fibo:number = 0;

for (let n = 0; n < 15; n++) {
    if (n <= 1) {
        fibo = n
        console.log(fibo);
    } else {
        fibo = prev1 + prev2;
        prev2 = prev1;
        prev1 = fibo;

        console.log(fibo);
    }
    
}