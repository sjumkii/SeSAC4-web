import React from 'react';
import ReactDOM from 'react-dom/client';
import StateClass from './StateClass';
import Counter from './Counter';
import Event from './Event';
import EventClass from './EventClass';
import Handler_ex from './ex/Handler_ex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StateClass className='SeSAC'/> */}
    {/* <Counter /> */}
    {/* <Event />
    <EventClass /> */}
    <Handler_ex />
  </React.StrictMode>
);


