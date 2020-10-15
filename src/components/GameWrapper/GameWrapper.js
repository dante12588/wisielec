import React from 'react';
import Baner from './Baner/Baner';
import Board from './Board/Board';
import {board} from '../../data/imageData';

const GameWrapper = () => (
    <div>
        <Baner />
        <Board
            desc = {board[0].description}
            img = {board[0].image}
        />
    </div>
);



export default GameWrapper;
