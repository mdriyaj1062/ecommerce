import React, { useState ,useEffect} from "react";
import './Navbar.css';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { Menu, Table } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { DLT } from "../redux/actions/action";
import Footer from './Footer'; 

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function Navbar() {

  const [anchorEl, setAnchorEl] = useState(null);
  
  const [price, setPrice] = useState(0);
  const getData = useSelector((state)=>state.CartReducer.carts);
  console.log(getData);
  const dispatch=useDispatch();



  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // Open the menu
  };

  // Function to close the menu
  const handleClose = () => {
    setAnchorEl(null); // Close the menu
  };
const dlt=(id)=>{
dispatch(DLT(id))

}

const total = ()=>{
  let price=0;
  getData.map((ele,k)=>{
    price=ele.price*ele.qnty + price
  })
  setPrice(price);
};

useEffect(()=>{
  total();
},[total])
 

  return (
    <div>
      <ul className="primary">
        <li>
          <Link to="/">All Products</Link>
        </li>
        <li>
          <Link to="/about">Beauty</Link>
        </li>
        <li>
          <Link to="/fragrances">Fragrances</Link>
        </li>
        <li>
          <Link to="/furniture">Furniture</Link>
        </li>
        <li>
          <Link to="/groceries">Groceries</Link>
        </li>
        <li>
          {/* Cart Badge */}
          <IconButton aria-label="cart" onClick={handleClick} 
           sx={{
            backgroundColor: 'white',  
            color: '#2c3e50',          
            '&:hover': {
              backgroundColor: '#ecf0f1', 
            },
          }}>
            <StyledBadge badgeContent={getData.length} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>

          <Menu
  id="basic-menu"
  anchorEl={anchorEl}
  open={Boolean(anchorEl)}  // Show the menu if anchorEl is not null
  onClose={handleClose}
  MenuListProps={{
    'aria-labelledby': 'basic-button',
  }}
>
  {
    getData.length ? 
    <div className="card_details">
      <Table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Product Name</th>
          </tr>
        </thead>
        <tbody>
          {getData.map((e) => (
            <tr key={e.id}>
              <td>
                <NavLink to={`/cart`} onClick={handleClose} state={{productData:e}} >
                  <img src={e.thumbnail} alt="" />
                </NavLink>
              </td>
              <td>
                <p>{e.title}</p>
                <p>Price: ₹{e.price}</p>
                <p>Quantity: {e.qnty}</p>
                <p style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                  <i className="fas fa-trash smalltrash"></i>
                </p>
              </td>
            </tr>
          ))}
          <p className="text-center">Total: ₹{price}</p>
        </tbody>
      </Table>
    </div> 
    : 
    <div className="card_details " style={{ width: "24rem", padding: 10, position: "relative" ,alignItems:"center"}}>
      <i className="fas fa-close smallclose" onClick={handleClose} style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
      <p style={{ fontSize: 22 }}>Your cart is empty</p>
      <img src="./cart.gif" alt="" className="emptycart_img" style={{ width: "5rem", padding: 10 }} />
    </div>
  }
</Menu>
        </li>
      </ul>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Navbar;
