import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { ProductImages } from 'data';
import { useNavigate } from 'react-router-dom';
import { Container } from 'assets/css/container';
import { useEffect, useState } from 'react';



function Product(props) {
    const navigate = useNavigate()

    const [user,setUser] = useState("customer")

    useEffect(() => {
        if(localStorage.getItem('role') === 'seller'){
            setUser("seller")
        } else {
            setUser("customer")
        }
    })
    return (
        <Container>
            <div className='wrapper'>
                <ul className="card-grid">
                    <article className="card" >
                        <div className="card-image">
                            <img
                                src={ProductImages[props.product.pcategory]}
                                alt={props.product.pname}
                            />
                        </div>
                        <div className="card-content">
                            <h2 className="card-name">{props.product.pname}</h2>
                            <ul className="card-list">
                                <li>
                                    Price:<span>{props.product.pprice}</span>
                                </li>
                                <Button onClick={() => navigate(`/viewproduct/${props.product.pid}`)} >View </Button>
                                {user === "customer"? <Button variant="primary" > Add to Cart</Button>:<Button variant="primary" >Edit</Button>}
                            </ul>
                        </div>
                    </article>
                </ul>
            </div>

        </Container>
    )
}

export default Product