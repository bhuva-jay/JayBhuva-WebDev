
//javascript function
//Basic function in javascript
{

    function sum(){
        return (10+20)
    }
    console.log(sum());
}
//Es6 arrow function
{

    const sumnum=()=>10+10
    console.log(sumnum());

    const multi=a=>a*a
    console.log(multi(10));

    let multipara = (a,b)=>{
        console.log("helllo");
        return a=a*b
    }
    console.log(multipara());
}

//Es6 callback function
{

    function call1(){
        console.log("hi! hello!!");
    }
    function back(){
        console.log("hey bye!!");
    }
    function bothcall(){
        call1()
        back()
        return 10+1
    }
    console.log(bothcall());
}

//callback with prameter
{

    function sayhello(){
        console.log("hi! hello!!");
    }
    function saybye(){
        console.log("hey bye!!");
    }
    function multicall(a,b){
        sayhello()
        return a*b
    }
    
    function multicall2(a,b,callback){
        callback()
        return a*b
    }
}

console.log(multicall2(5,2,sayhello));
console.log(multicall2(3,4 , saybye));