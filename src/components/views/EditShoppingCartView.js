import React from "react";
//import { Link } from "react-router-dom";

const EditShoppingCartView = (props) => {
    
    return (
      <table>   
        <td><input type="number" onChange={props.handleChange}/></td>
        <td><button type="button" className={props.view?"btn btn-dark btn-lg":""} onClick={()=>props.handleEditQuantity(props.itemId)}>
            Update Quantity
        </button></td>
      </table>
    );
  };
export default EditShoppingCartView;