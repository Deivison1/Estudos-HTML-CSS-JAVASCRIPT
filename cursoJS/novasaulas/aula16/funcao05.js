//Fatorial recusirvo
function fatorial(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial(n-1) 
    }
}
console.log(fatorial(10))

/*
  5! = 5 X 4 X 3 X 2 X 1
  5! = 5! X 4!

  n! = n x (n-1)!
  1! = 1

 */