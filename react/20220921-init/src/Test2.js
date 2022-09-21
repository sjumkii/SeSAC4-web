import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Test2.css';
import coding from "./1.PNG";

function ClassComponent (props){
    return (
        <div>
            <div className='style'>
                <h5>{props.style}</h5>
            </div>
            
            <img src={coding}></img>
        </div>
    )
}

ClassComponent.defaultProps = {
    style: '안녕하세요'
}

export default ClassComponent;