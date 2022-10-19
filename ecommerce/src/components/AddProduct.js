import { Container } from 'assets/css/container';
import { Button, Row, Col } from 'react-bootstrap';
import FormControl from 'react-bootstrap/Form'



function AddProduct(){
    return(
        <>
            <Container>
                <h2>Add Product </h2>
                {/* {error && <h3 style={{ color: "red", textAlign: "center" }}>{error}</h3>}
                <FormControl>
                    <InputLabel htmlFor="my-input" style={{color: "#0b2c6e", fontSize: "28px", fontWeight: "bold"}}>Product Name</InputLabel>
                    <Input onChange={(e) => handleChange(e)} name='productName' value={productName} style={{color: "black", fontSize: "18px"}} id='my-input' />
                    <p style={{ color: 'red', fontSize: "18px" }}>{productNameError}</p>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input" style={{color: "#0b2c6e", fontSize: "28px", fontWeight: "bold"}}>Product Price</InputLabel>
                    <Input onChange={(e) => handleChange(e)} name='price' value={price} style={{color: "black", fontSize: "18px"}} id='my-input' />
                    <p style={{ color: 'red', fontSize: "18px" }}>{priceError}</p>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input" style={{color: "#0b2c6e", fontSize: "28px", fontWeight: "bold"}}>Category</InputLabel>
                    <Input onChange={(e) => handleChange(e)} name='category' value={category} style={{color: "black", fontSize: "18px"}} id='my-input' />
                    <p style={{ color: 'red', fontSize: "18px" }}>{categoryError}</p>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input" style={{color: "#0b2c6e", fontSize: "28px", fontWeight: "bold"}}>Description</InputLabel>
                    <Input onChange={(e) => handleChange(e)} name='description' value={description} style={{color: "black", fontSize: "18px"}} id='my-input' />
                    <p style={{ color: 'red', fontSize: "18px" }}>{descriptionError}</p>
                </FormControl>
                <FormControl>
                    <Button variant="contained" color="primary" >Add Product</Button>
                </FormControl> */}
            </Container>
        </>
    )
}

export default AddProduct