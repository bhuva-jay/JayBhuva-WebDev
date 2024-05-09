// {
//     const obj ={
//         key1:"fortuner",
//         key2:"rangerover",
//         key3:function () {
//             console.log(`this is ${this.key1} and this is ${this.key4}`);
//         }
//     }
//     obj.key4 = "verna";

// const NewObj = Object.create(obj);

// NewObj.key4="verna";

// console.log(obj);
// console.log(NewObj);
// console.log(obj.key3());
// console.log(NewObj.key3());
// // console.log(NewObj.key1());
// }


// freez method
// {
//   const obj= {key1:"fortuner", key2:"rangerover", key3:"verna" ,key4:"alto"} ; 
//   console.log(obj.key1);
//   console.log(obj.key2);
//   console.log(obj.key3);
//   console.log(obj.key4);

//   obj.key4="duster";
//   console.log(obj.key4);
//     Object.freeze(obj.key4);
//     obj.key4="watswegon";
  
// }


// object  enteries method
// {
//     const obj={key1:"fortuner", key2:"rangerover", key3:"verna" ,key4:"alto"}
//     for(const [key,value]of Object.entries (obj)) {
//         console.log(`this object key is ${key} and its value is ${value}`);
//     }
// }

// object has own method

// {
// const obj={key1:"fortuner", key2:"rangerover", key3:"verna", key4:"alto"}
// let data=obj.hasOwnProperty ("key1");
// console.log(data);
// }


// object .is( ) method

{
    //  let obj={key1:45, key2:65, key:78}
    //  let obj1={key1:45, key2:65, key:78}
    //  console.log(Object.is(obj,obj1));
    //  let data = Object.is(obj,obj)  /*false*/
    //  console.log(data);            /*true*/
    
}

// object .seal() method
 
// {
//     let obj={key1:45, key2:65, key3:78 }
//     console.log(obj);   
//     Object.seal(obj); 
//     delete obj.key2
//     console.log(obj);
// //   Object.seal (obj)

// // object.seald method

//     let data = Object.isSealed(obj)
//     console.log(data);
// }

// object .key() method

{
    let obj={key1:45, key2:65, key3:78 }
    let data = Object.keys(obj)
    console.log(data);

}

// object.values() method
{
let obj={key1:45, key2:65, key3:78 }
let data = Object.values(obj)
console.log(data);
}


/* Object.groupBy() method */

{
    const inventory = [
        { name: "asparagus", type: "vegetables", quantity: 5 },
        { name: "bananas", type: "fruit", quantity: 0 },
        { name: "goat", type: "meat", quantity: 23 },
        { name: "cherries", type: "fruit", quantity: 5 },
        { name: "fish", type: "meat", quantity: 22 },
      ];

      const result = Object.groupBy(inventory, ({type}) => type)

      console.log(result);

      function callBack({quantity}){
        return quantity > 5 ? "This SAtock is Available" : "ReStock"
      }

      let Data2 = Object.groupBy(inventory , callBack)

      console.log(Data2);
}

/* valueOf And toString */

{
    // let obj = {key1:90 , key2:95 , key3:100}

    // let value = Object.valueOf(obj)
    // // let string = Object.toString(obj)

    // console.log(value);
    // console.log(string);

}


