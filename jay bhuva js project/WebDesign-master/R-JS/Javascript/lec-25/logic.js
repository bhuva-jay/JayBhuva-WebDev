//This keyword in jaascript
//this in globle scope

let user = this
console.log(user);

//this inner function
function greet(){
    console.log(this);
}
greet()

//this inner object
{
    let profile={
        firstName:"Parikshit",
        lastName:"Gajera",
        gender:"Male",
        age:"10",

        greet(){
            
            console.log(this.lastName);
        }
       
    }
    profile.greet()
}

//this inner object and inner function
{
    let user={
        firstName:"Rakshit",
        lastName:"Gajera",
        gender:"Male",
        age:"2.5",

        greet(){
            console.log(this);
            console.log(this.firstName);

            function Innerfunc(){
                console.log(this);
                console.log(this.lastName);//undefined
            }
            Innerfunc()
        }

    }
    user.greet()
}