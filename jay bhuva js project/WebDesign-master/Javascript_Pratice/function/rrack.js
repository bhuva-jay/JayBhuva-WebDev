// es6 callback function
{
    // function sayhello () {
    //     console.log("hi,hello");
    // }
    // function saybuy (){
    //     console.log("buy mango.....");
    // }
    
    // function multicall(){
    //   sayhello()
    //   saybuy()
    //   return 10
    // }
    // console.log(multicall);
}


// callback with function
{
    // function sayhello () {
    //     console.log("hi,hello");
    // }
    // function saybuy (){
    //     console.log("buy mango.....");
    // }
    
    // function multicall(a,b){
    //   sayhello()
    //   return a*b
    // }
    // console.log(multicall(10,50));
    // console.log(multicall(20,20));
    
    // function malticall2 (a,b, callback){
    //      callback()
    //      return a*b
    //     }
    //     console.log(multicall2(10,50 ,saybuy));
    //     console.log(muticall2 (20,20,sayhello));

}

{
//     const max= Math.max.apply(null,[10,20,30,40])
// const min= Math.min.apply(null,[10,20,30,40])
// console.log(max);
// console.log(min);
// console.log(sum(5,5));

// function sum (a,b,c){
    
//     let sum =0
//    for(let i=0; i>arguments.length; i++){
//     sum += arguments[i]
//    }
//    return a+b;
// }
// console.log(sum.length)
}

// function sum() {
//    return a+b 
//    let sum =0
//    for(let i=0; i>arguments.length; i++){
//     sum += arguments[i]
//    }
//    return sum }
//   let reult = sum.apply(null,[10,20])
//   let resultfinal= sum.apply{(null,[10,10])};
// console.log(reult);
  

{
//     let num1 =[10,20,30,40,]
// let num2=[50,60,70,80,90]
// console.log(num1.concat(num2));
}

{
    // let num1 =[10,20,30,40,]
    // let num2=[50,60,70,80,90] 
    // let result = num1.push(50)
    // console.log(result);
    // console.log(num2);
}





/*  js function apply() method*/
//   {
//      function intro(messge1,messge2) {
//        return messge1 + this.firstname + this.lastname + messge1 + messge2
//      }

//      const person1={
//         firstname:"raamdeo",
//         lastname:"agrwal",
//      }
//      const person2={
//         firstname:"dronal",
//         lastname:"drump"
//      }
//      console.log(intro.apply(person1,['hi,am','i,am tredars']));
//        console.log(intro.apply(person2,['hi , i am ','i , am polician']));     
// }

/*  js function call() method*/
{
//   function sum (a,b){
//     return a+b
//   }  
//   let result = sum.call(this,10,20)
//   let result2 = sum(10,20)
//   console.log(result);
//   console.log(result2);

  
// example 2
  {
    // function Product(name, price) {
    //     this.name = name;
    //     this.price = price;
    //   }
      
    //   function Food(name, price) {
    //     Product.call(this, name, price);
    //     this.category = 'food';
    //   }
      
    //   console.log(new Food('choclates', 5).name);
  }

}

/*  js function bind() method*/
{
//     function sum(a,b) {
//         return a+b
//     }
//     let result = sum.bind (this ,20,50)
//      console.log(result);



}




// { 
    //  exam qustion

//     function countVowels(str) {
//     // Convert the string to lowercase to make it case-insensitive
//     str = str.toLowerCase();
//     // Define a variable to store the count of vowels
//     let count = 0;
//     // Define an array of vowels
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     // Loop through each character in the string
//     for (let char of str) {
//         // If the character is a vowel, increment the count
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
//     // Return the count of vowels
//     return count;
// }

// // Example usage:
// const inputString = "Hello World";
// console.log("Number of vowels:", countVowels(inputString));
// }








/*  js asyncronous function */

// settimeout
// setintervel
// clear time out
// clearInterval


// set timeout
{
    // function printDate() {
    //     let datetime = new Date();
    //     let time = datetime.toLocaleTimeString();
    //     console.log(time);
    // }
    // setTimeout(printDate,5000   )
        
   
}

// set Interval
//  function printdate() {
//      let datetime=new Date();
//      let time = datetime.toLocaleTimeString();
//       console.log(time);
//  }
// setInterval(printDate,1000);



// *js function cleartimeout */
{
    // function printdate() {
    //    let datetime = new Date();
    //    let time = datetime.tolocalTimestring();
    //    console.log(time);
    // }
    // let tntervelid = setTimeout(printdate,5000);
    // console.log('id:,intervelid');
    // console.log("stoped settimeout");

}

// exampal -2
{
    // const myTimeout = setTimeout(myGreeting, 3000);

    // function myGreeting() {
    //   console.log("Happy Birthday to You !!");
    // }
    
    // function myStopFunction() {
    //   clearTimeout(myTimeout);
    // }
}

/*js function cleartimeout */
{
//  function printedate (){
//     let datetime = new Date(1);
//     let time = datetime.toLocaleTimeString();
//     console.log(time);
//  }
// let  intervalid =setInterval(printedate,5000)
// console.log("id:",intervalid);
// clearInterval(intervalid)
// console.log("stopped setinterval");

}

// exmaple 2

// {
//     const myInterval = setInterval(myTimer, 1000);

// function myTimer() {
//   const date = new Date();
//   console.log(date.toLocaleTimeString());

// function myStopFunction() {
//   clearInterval(myInterval);
// }
// }

// }

// js lec 25

{
    // this inner object
    
       let profile ={
        fristname:"jully",
        lastname:"gajera",
        gender:"female",
        age:25,
        greet(){
            console.log(this.lastname);
            console.log(this.fristname);
            console.log(this.age);
            console.log(this.gender);
            
        }
    
       }
       profile.greet()
    
    
    }
    
    {
        // this inner object and inner function
    
        let user ={
            fristname:"ramdeo",
        lastname:"agrwal",
        gender:"male",
        age:40,
        greet(){
            console.log(this);
            console.log(this.fristname);
            
            function innerfunc (){
                console.log(this);
            console.log(this.lastname);
            
            } 
            innerfunc()
        }
        }
        user.greet()
    }
    
    
    {
        // this inner object and inner arrow function:
    
        let profile ={
            name:"grece",
            age:22,
            adrdess:"u.s.a",
            person:function(){
                console.log(this);
                console.log(this.name);
                 
                let user = () =>{
                    console.log(this);
                    console.log(this.adrdess);
                }
                user()
            }
        }
        profile.person()
    }