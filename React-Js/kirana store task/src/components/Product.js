import React,{useState} from 'react'

export default function Product() {
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(5);
    const products = [
      {
        id: 1,
        name: 'Patanjali Cow Ghhi ',
        description: 'Product 1 description',
        price: '$610',
        image: 'https://www.patanjaliayurved.net/assets/product_images/400x500/1692619002Ghee1LTR1.png',
      },
      {
        id: 2,
        name: 'TATA samarpan poha',
        description: 'Product 2 description',
        price: '$9.99',
        image: 'https://www.tatanutrikorner.com/cdn/shop/files/1_8cbb776c-dd9b-47c8-916a-8aaa3f83d05e.jpg?height=350&v=1683114683',
      },
      {
        id: 3,
        name: ' pure fig',
        description: 'Product 20 description',
        price: '$14.99',
        image: 'https://m.media-amazon.com/images/I/61TRJ9NKJGL._AC_UL320_.jpg',
      },
      {
        id: 4,
        name: 'Dabur Honey',
        description: 'Product 20 description',
        price: '$14.99',
        image: 'https://images-eu.ssl-images-amazon.com/images/I/619EDTQj7DL._AC_UL165_SR165,165_.jpg',
      },
      {
        id: 5,
        name: 'Fortune  besan',
        description: 'Product 20 description',
        price: '$14.99',
        image: 'https://images-eu.ssl-images-amazon.com/images/I/61A1MNF8b2L._AC_UL165_SR165,165_.jpg',
      },
      {
        id: 6 ,
        name: 'Product 20',
        description: 'Product 20 description',
        price: '$14.99',
        image: 'https://m.media-amazon.com/images/I/91CI0QEuy8L._AC_UL320_.jpg',
      },
      {
        id: 7,
        name: 'Product 20',
        description: 'Product 20 description',
        price: '$14.99',
        image: 'https://m.media-amazon.com/images/I/91+bw+K6z+L._AC_UL320_.jpg',
      },

      {
        id: 8,
        name: 'Product 20',
        description: 'Product 20 description',
        price: '$14.99',
        image: 'https://images-eu.ssl-images-amazon.com/images/I/61+Zq4NHMNL._AC_UL165_SR165,165_.jpg',
      },
      
    ];
  
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
    <h1 className="text-xl font-bold mb-4">Grocery Products</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  gap-1">
      {currentProducts.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md p-4 ">
          <figure className="flex justify-center mb-4">
            <img
              className="h-[120px] w-[120px] rounded-lg object-cover object-center"
              src={product.image}
              alt={product.name}
            />
          </figure>
          <div className="flex flex-col justify-center mb-4">
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-lg text-gray-600">{product.description}</p>
            <p className="text-lg text-gray-600">Price: {product.price}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center mb-4">
      {[...Array(Math.ceil(products.length / productsPerPage)).keys()].map((number) => (
        <button
          key={number + 1}
          className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded mt-10 ${
            currentPage === number + 1 ? 'bg-gray-200' : ''
          }`}
          onClick={() => paginate(number + 1)}
        >
          {number + 1}
        </button>
      ))}
    </div>
  </div>
  )
}

