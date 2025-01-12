import React,{useState,useEffect} from "react";
import './Home.css';
import { useDispatch } from "react-redux";
import { ADD } from '../redux/actions/action';
function Home(){
     const[data,setData]=useState([]);
      // console.log(data);
      const dispatch=useDispatch();

         useEffect(()=>{
          fetch('https://dummyjson.com/products')
          .then((response)=>response.json())
          .then((data)=>setData(data.products));
      },[]);

      const send=(e)=>{
       dispatch(ADD(e));
      }
    return(
        <div className="product-cards-container" >
      {data.map((element, index) => (
        <div key={index} className="card">
          <img src={element.thumbnail} alt={element.title} className="card-img"  />
          <div className="card-body">
            <h5 className="card-title">{element.title}</h5>
            <p className="card-price">Price: ₹ {element.price}</p>
            <div className="button-div">
              <button 
                className="add-to-cart-btn" onClick={()=>send(element)}
                >
                Add to Cart
              </button>
            </div>
          </div>
      
        </div>
      ))}
    </div>
    )
}
export default Home