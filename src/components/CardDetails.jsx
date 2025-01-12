import { Table } from "@mui/material";
import React from "react";
import './cardDetails.css'
import { useLocation } from "react-router-dom";


const CartDetails = () => {
  const location = useLocation();
  const productData = location.state?.productData;

  return (
    <>
      <div className="main-container">
  <h2 className="heading">{productData.title}</h2>
  <section className="card-section">
    <div className="card-details">
      <div className="image-container">
        {productData.images.map((el, index) => (
          <img key={index} src={el} alt={`Product Image ${index + 1}`} />
        ))}
      </div>
      <div className="details">
        <Table>
          <tbody>
            <tr>
              <td>
                <p><strong>Name:</strong>{productData.tags[1]}</p>
                <p><strong>Price:</strong>₹{productData.price}</p>
                <p><strong>Qnty:</strong>{productData.qnty}</p>
                <p><strong>Total:</strong>₹{productData.price * productData.qnty}</p>
              </td>
              <td>
                <p><strong>Rating:</strong><span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>{productData.rating} ★</span></p>
                <p><strong>Rating & Reviews:</strong></p>
                    <div className="review-list">
                      {productData.reviews.map((e, index) => (
                           <div key={index} className="review-item">
                                <span className="review-rating"  >{e.rating} ★</span>
                        <span className="review-comment">{e.comment}</span>
                             </div>
                                    ))}
                             </div>
                <p><strong>Warranty:</strong> {productData.warrantyInformation}</p>
                <p><strong>Delivery:</strong> {productData.shippingInformation}</p>
                <p><strong>Highlights:</strong>
                  <ul>
                    <li>Material: {productData.tags[0]}</li>
                    <li>Weight(kg): {productData.weight}</li>
                  </ul>
                </p>
                <p><strong>Seller:</strong> {productData.returnPolicy}</p>
                <p><strong>Description:</strong> {productData.description}</p>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  </section>
</div>
    </>
  );
};

export default CartDetails;
