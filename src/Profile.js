import React,{useContext} from "react";
import { LoginContext } from "./LoginContext";

import Card from 'react-bootstrap/Card';

function Profile() {
    const{username,price,quantity,descrip}=useContext(LoginContext)
  return (
    <Card className="card-style mx-auto bg-dark-subtle mt-4 border border-secondary" style={{ width: '600px' }}>
         <Card.Header>PRODUCT DETAILS</Card.Header>
         
            <Card.Body>

                <Card.Img className="p-3" src="image/img.jpg" alt=""  style={{ width: '250px' }}/>

                <Card.Text>Product Name : {username} </Card.Text>
                <Card.Text>Price : {price} </Card.Text>
                <Card.Text> Quantity : {quantity} </Card.Text>
                <Card.Text>Description : {descrip} </Card.Text>
                
            </Card.Body>
    </Card>
  );
}

export default Profile;
