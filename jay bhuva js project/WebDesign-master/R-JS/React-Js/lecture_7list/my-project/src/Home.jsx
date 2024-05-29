import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Item({ name, isPacked }) {
    if (isPacked) {
      return <li className="item">{name} ✔</li>;
    }
    return <li className="item">{name}<FontAwesomeIcon className="text-green-700 " icon={faXmark} /></li>;
  }
  
  export default function PackingList() {
    return (
      <div className="flex justify-center mx-auto border">

      <section className="">
        <div>

        <h1>Sally Ride's Packing List</h1>
        </div>
        
        
        <ul>
          <Item 
            isPacked={true} 
            name="Space suit" 
          />
          <Item 
            isPacked={true} 
            name="Helmet with a golden leaf" 
          />
          <Item 
            isPacked={false} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
      </div>
    );
  }
  