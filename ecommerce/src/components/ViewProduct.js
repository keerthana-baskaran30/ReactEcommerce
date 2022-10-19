import React, { useEffect,useState } from "react";
import { useSelector,useDispatch  } from "react-redux";
import { ProductImages } from 'data';
import { useNavigate ,useParams } from 'react-router-dom';
import {getSingleProduct} from 'store/action/actions';
import 'assets/css/viewProduct.css';

function ViewProduct() {

    let { id } = useParams()
    console.log(id)
    const {singleProduct } = useSelector((state) => state.productData);
    const [user,setUser] = useState("customer")
    console.log("SINGLE",singleProduct)
    

    const navigate = useNavigate()
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log("inside useffect")
        dispatch(getSingleProduct(id))
    },[])

    useEffect(() => {
        if(localStorage.getItem('role') === 'seller'){
            setUser("seller")
        } else {
            setUser("customer")
        }
    })

    return (
        <>
            <div className="container view-product">
                <div id="demo" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="card">
                                <div className="row">
                                    <div className="col-md-6 text-center align-self-center">
                                        <img
                                            className="img-fluid"
                                            src={ProductImages[singleProduct?.pcategory]}
                                            alt={singleProduct.pname}
                                        />
                                    </div>
                                    <div className="col-md-6 info">
                                        <div className="row title">
                                            <div className="col">
                                                <h2>{singleProduct.pname}</h2>
                                            </div>
                                        </div>
                                        <div className="row price">
                                            <div className="row">
                                                <h3>
                                                    <b>Price: ₹{singleProduct.pprice}</b>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="row price">
                                            <div className="row">
                                                <h3>
                                                    <b>Description: {singleProduct.pdescription}</b>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row lower">
                                    <div className="col text-left align-self-center">
                                        <button className="btn btn-primary" onClick={() => navigate(-1)} >Go Back</button>
                                    </div>

                                    {/* <div className="col text-right align-self-center">
                                        <button className="btn btn-success" >Add to cart</button>
                                    </div> */}

                                    {user === "customer"? (<div className="col text-right align-self-center">
                                        <button className="btn btn-success" >Add to cart</button>
                                    </div>) : (<div className="col text-right align-self-center">
                                        <button className="btn btn-success" >Edit</button>
                                    </div>)}


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ViewProduct;