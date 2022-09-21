import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Test.css';

function ClassComponent (props){
    return (
        <div>
            {props.children}
            <div className='my_style'>
                <h5>{props.name}</h5>
            </div>
        </div>
    )
}

ClassComponent.defaultProps = {
    name: '김지수',
}

export default ClassComponent;