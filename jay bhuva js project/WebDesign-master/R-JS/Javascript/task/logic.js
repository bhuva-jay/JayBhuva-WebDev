    // 1. Create a program that performs arithmetic operations on two numbers.
    {
        let a = 10;
        let b = 20;

        let c=a+b;
        console.log(c);
        
        let d=a-b;
        console.log(d);

        let e=a*b;
        console.log(e);

        let f=a/b;
        console.log(f);

        let g=a%b;
        console.log(g);

        let h=a**b;
        console.log(h);

    }
    // 2.Use compound assignment operators to update variables.
   {
       let x=40;
        let y=20;
       
        let z=x+=y;
        console.log(z);
       
        let z1=x-=y;
        console.log(z1);y
       
        let z2=x*=y;
        console.log(z2);
} 
 
// 3.Compare two numbers and display the result.
{
    let x=1;
    let y=0;
    let z=0;
    
    
    console.log(!(x&y));
    console.log(!(y|x));
    console.log(!x);
    console.log(!y);
    console.log(!z);
    
    let a=5;
    let b=5;

    console.log(a==b);
    console.log(a<b);
    console.log(a>b);

}
//4.Use the ternary operator to check a condition.
{

    let a=20;
    let b=10;

    console.log(a>b) ? false : true;
}

//5.Compare two strings and display the result.
{
    let string1= "Gajera";
    let string2= "Gajera";
    let newstring= string1 === string2;
    let newstring1= string1 == string2;
    
    console.log(string1);
    console.log(string2);
    console.log(newstring);
    console.log(newstring1);

}
//Check if a number is positive, negative, or zero
{
    let a=-1;

     if(a>0) {
        console.log("positive");
     } 
     else if(a<0){
        console.log("negetive");
     }
     else{
        console.log("zero");
     }

}

//Determine the largest of three numbers
{
    let a=100;
    let b=500;
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
//Check if a year is a leap year
{
    let a=1970;

    if(a%4==0){
        console.log("This is leap year.");
    }
    else{
        console.log("This is not leap year");
    }
    
}
{
    let  a=2048;
    if ((0 == a % 4) && (0 != a % 100) || (0 == a % 400)) {
        console.log(a + ' is a leap year');
    } else {
        console.log(a + ' is not a leap year');
    }
}
 
// Check if a person is eligible to vote
{
    let a=20;

    if(a<18){
        console.log("Not Eligible for vote");
    }
    else{
        console.log(" Eligible for vote");
    }
}  
 
   // if else
let marks=40;

if(marks<40){
    console.log("you are fail...");
}
else{
    console.log("you are pass...");
}

//.Determine the grade based on a score
{

    let a=20;
    
        if(a>=90){
            console.log("grad A+");
        }
        else if(a>=80){
            console.log("grad A");
        }
        else if(a>=70){
            console.log("grad B");
        }
        else if(a>=40){
            console.log("grad C");
        }
        else{
            console.log("you are Fail");
        }
}  
