import React from "react";
import 'assets/css/viewProfile.css';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { logoutUser } from "store/action/actions";
import { useDispatch } from "react-redux";


function ViewProfile(){
    const navigate = useNavigate()
    return (    
        <>
            <div className='view-profile'>
                <div className="container rounded bg-white mt-5">
                    <div className="row profile-card">
                        <div className="col-md-4 border-right">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                                <img
                                    className="rounded-circle mt-5"
                                    src="https://openclipart.org/image/2400px/svg_to_png/247319/abstract-user-flat-3.png"
                                    width={90}
                                />
                                {/* <h2 className="font-weight-bold">{firstName}</h2>
                                <h4>{lastName}</h4> */}
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="d-flex flex-row align-items-center back">
                                        <i className="fa fa-long-arrow-left mr-1 mb-1" />
                                        <NavLink to={-1}><button className='backTOHome btn' >Go Back</button></NavLink> 
                                    </div>
                                    {/* <button className="text-right btn btn-primary" onClick={() => navigate(`/editProfile/${id}`)}>Edit Profile</button> */}
                                </div>
                                {/* <div className="row mt-2">
                                    <div className="col-md-12">
                                        <h4>Email :</h4>
                                    </div><br />
                                    <div className="col-md-6">
                                        <h4>{email}</h4>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <h4>Phone Number :</h4>
                                    </div><br />
                                    <div className="col-md-6">
                                        <h4>{phone}</h4>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                <div className="col-md-12">
                                        <h4>Role :</h4>
                                    </div><br />
                                    <div className="col-md-6">
                                        <h4>{roleId.roleType}</h4>
                                    </div>
                                </div> */}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewProfile;