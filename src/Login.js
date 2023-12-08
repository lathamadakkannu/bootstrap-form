import React,{useContext} from "react"
import { LoginContext } from "./LoginContext";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'

function Login(){

    const{setUsername,setPrice,setQuantity,setDescrip,setShowprofile}=useContext(LoginContext)
    

    return(
        <div>

            <Form className="mx-auto bg-info  mt-4 p-4 border border-danger" style={{ width: '400px'}}>
                <h3 className="style p-4">Product Form</h3>
                    <Form.Group className="style p-4" as={Col} md="12" controlId="validationFormik01">
                    
                        <Form.Control
                            type="text"
                            placeholder="Enter Product Name"
                            className="border border-dark"
                            onChange={(e)=>{
                                setUsername(e.target.value)

                            }}
                        />
                        </Form.Group>
                    
                    <Form.Group className="style p-4" as={Col} md="12" controlId="validationFormik02">
                        
                        <Form.Control
                            type="text"
                            placeholder="Enter Product Price"
                            className="border border-dark"
                            onChange={(e)=>{
                                setPrice(e.target.value)

                            }}
                            
                        />
                    </Form.Group>
                

                    <Form.Group className="style p-4" as={Col} md="12" controlId="validationFormik02">
                        
                        <Form.Control
                            type="text"
                            placeholder="Enter Product Quantity"
                            className="border border-dark"
                            onChange={(e)=>{
                                setQuantity(e.target.value)

                            }}
                            
                        />
                    </Form.Group>

                    <Form.Group className="style p-4" as={Col} md="12" controlId="validationFormik02">
                        
                        <Form.Control
                            type="text"
                            placeholder="Enter Product Description"
                            className="border border-dark"
                            onChange={(e)=>{
                                setDescrip(e.target.value)

                            }}
                        />
                    </Form.Group>

                    <input class="btn btn-primary" 
                                onClick={()=>{
                            setShowprofile(true)
                            }} 
                            type="submit">
                    </input>
            
            </Form>
        </div>
    )
}

export default Login;