import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


const Com_1 = () => {
  return (
    <div className='w-[350px] h-[550px] border border-gray-600 rounded-lg shadow-xl'>
      <div>
        <img className='w-[350px] h-[250px] object-cover rounded-lg' src="https://i0.wp.com/www.macfarlane-chard.co.uk/wp-content/uploads/2021/05/alice-1-e1688384889355.jpg?w=430&ssl=1" alt="" />
      </div>
      <div className='mt-6 text-center'>
        <h1 className='text-black font-bold text-2xl'>Alice Mayer</h1>
        <p>Photographer</p>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quae?</p>
      </div>
      <div>
        <span><a href=""><FontAwesomeIcon icon={faFacebookF} /></a></span>
        <span><a href=""><FontAwesomeIcon icon={faTwitter} /></a></span>
        <span><a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a></span>
      </div>
         
    </div>
  )
}

export default Com_1