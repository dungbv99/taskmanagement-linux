import React, {useEffect} from 'react';
import { authPost, authGet } from '../api';


function Process(props){
    useEffect (() => (
        authGet("/test").then(
            (res) => {
                console.log("res",res);
            }
        )
    ))




    return (<div> this is my process</div>)
}

export default Process;