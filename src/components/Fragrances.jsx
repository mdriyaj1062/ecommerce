import React,{useState,useEffect} from "react";
import { useDispatch } from "react-redux";
import { ADD } from '../redux/actions/action';
function Fragrances(){
  const[data,setData]=useState([]);
   const dispatch=useDispatch();
  console.log(data);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        // Filter products by category or title containing the word "beauty"
        const beautyProducts = data.products.filter((product) => 
          product.category.toLowerCase().includes("fragrances") ||
          product.title.toLowerCase().includes("fragrances")
        );
        setData(beautyProducts); // Set filtered beauty products
      });
  }, []);

   const send=(e)=>{
           dispatch(ADD(e));
          }
 
  return(
    <div className="product-cards-container">
    {data.map((element, index) => (
      <div key={index} className="card">
        <img src={element.thumbnail} alt={element.title} className="card-img" />
        <div className="card-body">
          <h5 className="card-title">{element.title}</h5>
          <p className="card-price">Price: ₹ {element.price}</p>
          <div className="button-div">
            <button className="add-to-cart-btn" onClick={()=>send(element)}>Add to Cart</button>
          </div>
        </div>
      </div>
    ))}
  </div>


  )
}
export default Fragrances
