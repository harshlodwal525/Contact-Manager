import React from "react";
import ReactDOM from "react-dom";
const Title =(props)=> {
        return (
            <div>
                <center>
                    <h1><b>{props.title}</b></h1>
                    <h2>Total Number of Contacts : {props.totalCount.length}</h2>
                </center>
            </div>
        );
}

export default Title;