import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GrLinkNext } from "react-icons/gr";

export default function Home() {
    const navigate = useNavigate();

    const handleStartQuiz = () => {
        const loggedInUserEmail = localStorage.getItem('LoggedInUserEmail');
        if (loggedInUserEmail) {
            navigate('/exam');
        } else {
            alert('Please login first.');
            navigate('/login');
        }
    };

    return (
        <>
          <main className="flex flex-wrap justify-center p-4 bg-amber-300" >
      <section className="w-full md:w-1/2 xl:w-1/3  rounded shadow-md p-4 flex justify-center  items-center  object-cover bg-center bg-clip-content bg-amber-100" >
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome to Grocery Store!</h1>
        <p className="text-lg text-gray-600 ">Find the freshest produce and best deals on groceries.</p>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleStartQuiz}>
          Shop Now
        </button>
      </div>
      </section>
      <section className="w-full md:w-1/2 xl:w-1/3 bg-white rounded shadow-md p-4 bg-yellow-100">
        <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
        <ul>
          <li>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Grocery/CatPage/SBC/Grocery_SBC_Oats.jpg" alt="Product 1" className="w-full h-64 object-conatin" />
            {/* <p className="text-lg text-gray-600">Product 1</p> */}
          </li>
          <li>
            <img src="https://www.shutterstock.com/image-photo/vegan-protein-source-legumes-lentils-260nw-745775314.jpg" alt="Product 2" className="w-full h-64 object-cover" />
            {/* <p className="text-lg text-gray-600">Product 2</p> */}
          </li>
        </ul>
      </section>
      <section className="w-full md:w-1/2 xl:w-1/3 bg-amber-100  rounded shadow-md p-4">
        <h2 className="text-2xl font-bold text-gray-900">Best Sellers</h2>
        <ul>
          <li>
            <img src="https://cdn.modernbazaar.online/assets/uploads/category/compress/96ee3c3208ec99db8b78d433d6921358.jpg" alt="Product 3" className="w-full h-64 object-cover" />
            {/* <p className="text-lg text-gray-600">Product 3</p> */}
          </li>
          <li>
            <img src="https://i.pinimg.com/736x/ec/98/64/ec9864cc8508f801f9e2274534ea90a2.jpg" alt="Product 4" className="w-full h-64 object-cover bg-center " />
            <p className="text-lg text-gray-600">Product 4</p>
          </li>
        </ul>
      </section>
    </main>
            {/* <section className="h-screen bg-cover bg-center bg-hero-image">
                <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
                    <h1 className="text-3xl font-bold"> wellcome to kirana store</h1>
                    <p className="text-lg"> start your sopping</p>
                    <button
                        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleStartQuiz}
                    >

                        go <span><GrLinkNext /></span>
                    </button>
                </div>
            </section> */}




            {/* <section className="bg-gray-100 py-5">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 xl:w-1/2 p-6">
              <div className="testimonial bg-white p-4 rounded shadow-md">
                <p>"This website helped me learn so much! Highly recommended."</p>
                <p><em>- John Doe</em></p>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 p-6">
              <div className="testimonial bg-white p-4 rounded shadow-md">
                <p>"Great quizzes with interesting topics. Will definitely come back for more!"</p>
                <p><em>- Jane Smith</em></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-200 py-5">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
          <p>&copy; 2024 Quiz Website. All rights reserved.</p>
          <nav>
            <a href="#" className="text-white hover:text-gray-200 transition duration-300 ease-in-out">Privacy Policy</a> |
            <a href="#" className="text-white hover:text-gray-200 transition duration-300 ease-in-out">Terms of Service</a>
          </nav>
        </div>
      </footer> */}
        </>
    );
}