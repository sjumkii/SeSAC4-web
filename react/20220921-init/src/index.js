import React from 'react';
import ReactDOM from 'react-dom/client';
import ClassComponent from './ClassComponent';
import App from './App';
import Test from './Test';
import Test2 from './Test2';
import Food from './Food';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <>
    {/* <ClassComponent name = {1} location="문래">문자</ClassComponent>*/}
    {/* <App />  */}
    {/* <Test />
    <Test2 /> */}
    <Food food = '냉면' title = '나의 하루는 4시 40분에 시작한다' writer = '김유진' price = "13500" clas = '자기계발서' />
  </>
);
