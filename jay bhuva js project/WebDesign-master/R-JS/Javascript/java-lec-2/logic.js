     //bitwise with logical not
{


    let x=0;
    let y=1;
    let z=0;
    
    
    console.log(!(x&y));
    console.log(!(y|x));
    console.log(!x);
    console.log(!y);
    console.log(!z);
}

//javascript string opra.
{


    let string1= "Gajera";
    let string2= "Trupti";
    let newstring=string1 +"  "+string2;
    
    console.log(string1);
    console.log(string2);
    console.log(newstring);
}
// if else
let marks=40;

if(marks<40){
    console.log("you are fail...");
}
else{
    console.log("you are pass...");
}

//Nested
{

    let a=100;
    let b=50;
    let c=30;
    
    if(a>b){
        if(a>c){
            console.log("A is largest.");
        }
        else{
            console.log("C is largest.");
        }
    }
    else{
        if(b>c){
            console.log("B is largest.");
        }
        else{
            console.log("C is largest");
        }
    }
}
