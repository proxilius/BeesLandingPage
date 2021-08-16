import React from 'react';
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

 const Profile = (data) => {
    let { id } = useParams();
    let picture = data.data.Team[id].img.split('/').pop().split('.')[0] =="petra"

    useEffect(() => {

        console.log("mydataProfile")
        console.log(data.data.Team[id].img)
        picture = data.data.Team[id].img.split('/').pop()
     }, [])

    return(
        <div className="container" >
    <div className="col-md-5 mx-auto pt-5" >
        <div className="bg-white shadow rounded overflow-hidden">
            <div className="px-4 pt-5 pb-4 cover">
                <div className="media align-items-end profile-head">
                    <div className="profile mr-3">
                        <img src={require(`./pics/${data.data.Team[id].img.split('/').pop()}`).default} alt='logo' width="130" className="rounded mb-2 img-thumbnail"/>
                            <a href="#" className="btn btn-outline-dark btn-sm btn-block">Edit profile</a>
                     </div>
                    <div className="media-body mb-5 text-white">
                        <h4 className="mt-0 mb-0">{data.data.Team[id].name}</h4>
                        <p className="small mb-4"> <i className="fas fa-map-marker-alt mr-2"></i>New York</p>
                    </div>
                </div>
            </div>
            <div className="bg-light p-4 d-flex justify-content-end text-center">
                <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                        <h5 className="font-weight-bold mb-0 d-block">215</h5><small className="text-muted"> <i className="fas fa-image mr-1"></i>Photos</small>
                    </li>
                    <li className="list-inline-item">
                        <h5 className="font-weight-bold mb-0 d-block">745</h5><small className="text-muted"> <i className="fas fa-user mr-1"></i>Followers</small>
                    </li>
                    <li className="list-inline-item">
                        <h5 className="font-weight-bold mb-0 d-block">340</h5><small className="text-muted"> <i className="fas fa-user mr-1"></i>Following</small>
                    </li>
                </ul>
            </div>
            <div className="px-4 py-3">
                <h5 className="mb-3">Rólam</h5>
                <div className="p-4 rounded shadow-sm bg-light">
                    <p className="font-weight-bold mb-3">{data.data.Team[id].job}</p>
                    <p className="font-italic mb-0">{data.data.Team[id].desc}</p>
                </div>
            </div>
            
        </div>
    </div>
</div>

        
    )
};

export default Profile;