 // null, undefined and NaN


 {
	console.log(null == undefined);
	console.log(null == NaN);
	console.log(undefined == NaN);
	console.log(undefined == undefined);
	console.log(undefined == false);
	console.log(null == false);
	console.log(NaN == false);
	console.log(undefined == true);
	console.log(null == true);
	console.log(NaN==NaN);
	console.log(NaN==true);
	console.log(undefined);
	console.log(null);
	console.log(NaN);
}
{
	let x=10;
	let y=10;
	let z=x*y;

	let a=10;
	let b=10;
	let c=a*b;

	console.log(z);
	console.log(c);
	console.log(z==c);
}
//map object
{
	let object={id:1, FirstName:"joe", LastName:"Biden"};

	console.log(object);
	object.gender="Male";
	console.log(object);
	object.gender="female";
	console.log(object);
	let Data1=object.gender;
	console.log(Data1);
}


	let Mapobject = new Map([['option1',1],['option2',2],['option3',3],['option4',{}]]);
	let Mapobject2 = new Map();
	console.log(Mapobject);
	console.log(Mapobject2);

//set method	
	 
	Mapobject.set("lastname" , "joe");
	Mapobject.set("Age", 79);
	console.log(Mapobject); 
//size method
console.log(Mapobject.size);

//delet method
let MapData1=Mapobject.delete("Age");
console.log(Mapobject);
console.log(MapData1);

{
	var temp =81;
	var willRain = true;
	var humid = (temp > 80 && willRain == true);

	console.log(humid);
}

{
	var kB=1287;
	var tooBig=(kB>1000);
	var urgent=true;
	var sendfile=(urgent == true && tooBig == false);
	console.log(sendfile);
}


{
	console.log(0.1+0.2);
	console.log(0.1+0.2==0.3);
}

{
	var arr1="john".split('');
	var arr2=arr1.reverse();
	var arr3="jones".split('');
	arr2.push(arr3);
	console.log("array 1:length="+ arr1.length + "last="+ arr1.slice(-1));
	console.log("array 2:length="+ arr2.length + "last="+ arr2.slice(-1));
}
{
	console.log(1+"2"+"2");
	console.log(1+ +"2"+"2");
	console.log(1+ -"1"+"2");
	console.log(+"1"+"1"+"2");
	console.log("A"-"B"+"2");
	console.log("A"-"B"+2);
}


