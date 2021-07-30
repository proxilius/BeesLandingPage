import React from 'react';
import { Navigation } from '../components/navigation'

import { useParams } from "react-router-dom";


 const Profile = () => {
    let { id, name } = useParams();

    return(
        <div>
            <p>{id}</p>
            <h1>Hello én {name} vagyok</h1>
         
        </div>
    )
};

export default Profile;