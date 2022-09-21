import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Food.css';
import coding from "./book.PNG";


class ClassComponent extends Component {
    render() {

        const { food, title, writer, price, clas, txt, valid } = this.props;

        return (
            <div>
                <div>
                    <h5>좋아하는 음식 : <span>{this.props.food}</span></h5>
                </div>

                <div className='back'>
                    <h5 className='title'>이번주 베스트셀러</h5>
                    <img src={coding}></img>
                    
                    <div className='txt'>
                        <h2>{this.props.title}</h2>
                        <h3>저자: {this.props.writer}</h3>
                        <h3>판매가: {this.props.price}</h3>
                        <h3>구분: {this.props.clas}</h3>
                    </div>
                </div>

                <div>
                    <p>APP 컴푸넌트에서 넘겨준 text props 입니다.</p>
                </div>
            </div>
        );
    }
    
    static propTypes = {
        food: PropTypes.string,
        title: PropTypes.string,
        writer: PropTypes.string,
        price: PropTypes.number,
        clas: PropTypes.string
    }
}

ClassComponent.defaultProps = {
    food: '입력없음'
}

export default ClassComponent;