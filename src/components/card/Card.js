import React from "react";
import {useNavigate } from "react-router-dom";



const Card = ({ item }) => {
  const navigate = useNavigate()

  const { title, body, id, image } = item;

  console.log(item);
  
  const handlePage = (e) => {
    console.log(e.target.parentElement.id)
    if (e.target.parentElement.id === String(1)) {
      navigate("/html")
   
    } else if (e.target.parentElement.id === String(2)) {
      navigate("/css")
      
    }else if(e.target.parentElement.id === String(3)) {
      navigate("/logo")
    
    }

  }




  return (
    <div id={id} className="box">
      <img onClick={handlePage} src={image} alt="" />
      {/* <img onClick={() => navigate("")} src={image} alt="" /> */}
      <h3>{title}</h3>
      <p>
        {body}
      </p>
    </div>
  );
};

export default Card;
