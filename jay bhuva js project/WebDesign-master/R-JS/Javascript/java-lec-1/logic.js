    let a = 10;
    let b = 20;
    let c = 5;
    let d = a;

    let e = a + c + d - d -a;

    console.log(e);

    let f = e + c + a - a - e;
    console.log(f);

    let g = c+c+b+b- e;
    // console.log(g);

    setTimeout(
        function greet(){
            console.log(g);
        },5000
       
    )

    let h = f-f-b+e-e;
    console.log(h);

    let i = f+(-f)+b+e+a+(-d);
    console.log(i);

    let j = f/f+e-e-h-g+e;
    console.log(j);

let p=10;
let q=62;
let z= q%p;
console.log(z);

let t=10;
let s=30;
console.log(t%s);
