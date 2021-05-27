import React from 'react';
import classnames from 'classnames';

import slyles from './Item.module.css';

const Item = ({ value, isDone }) => (<span className= {
    classnames ({
        [slyles.item]: true,
        [slyles.done]: isDone,
    })
}>
    {value} 
    </span>);

export default Item;