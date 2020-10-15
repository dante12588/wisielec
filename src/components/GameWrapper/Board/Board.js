import React from 'react';

const Board = (props) => (
    <div>
        <h3>{ props.desc }</h3>
        <img src={props.img} alt="gra w wisielca"/>
    </div>

);

export default Board;