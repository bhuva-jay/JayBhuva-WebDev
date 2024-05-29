
 
import { useState } from 'react'

const Recipes = () => {
    const [Recipe, SetRecipe] = useState("Select Option")

 function Recipe_tea() {
    return(
        <ol>
            <li>Boil 1 cup of water.</li>
            <li>Add 1 spoon of tea.</li>
            <li>Add 2 cups of milk to boil</li>
            <li>And add sugar to taste.</li>
            </ol>
    );
 }
 const Recipe_1 =()=> {
    SetRecipe(Recipe_tea)
 }

 function Recipe_coffee() {
    return(
        <ol>
            <li>Boil 2 cups of milk.</li>
            <li>Add sugar to test.</li>
            <li>Add 1 spoon coffee.</li>
           
            </ol>
    );
 }
 const Recipe_2 =()=> {
    SetRecipe(Recipe_coffee)
 }


 const Reset =()=> {
    SetRecipe("Tea or Coffee?")
 }
 
 
    return (
    <>
    <div className='mx-auto h-screen border flex justify-center items-center'>
        <div className='border border-blue-200 bborder-spacing-2 p-10 shadow-lg'>
            <h1 className='font-bold text-2xl text-center  text-gray-600'>{Recipe}</h1>
            <div className='mt-6 border border-gray-300 shadow-xl p-4'>
                <button className='ms-4  text-xl font-bold text-gray-600 h-10 w-24  border border-gray-300 rounded-full shadow-xl' onClick={Recipe_1}>Tea</button>
                <button className='ms-4 text-xl font-bold text-gray-600 h-10 w-24 border border-gray-300 rounded-full shadow-xl'onClick={Recipe_2}>Coffee</button>
                <button className='ms-4 text-xl font-bold text-gray-600 h-10 w-24 border border-gray-300 rounded-full shadow-xl'onClick={Reset}>Reset</button>
            </div>
        </div>

    </div>
    </>
  )
}

export default Recipes