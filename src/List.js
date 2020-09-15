import React from 'react';
import Item from './Item';

const List = (props) => (
    <div>
        <h2>{props.name}</h2>
        <ul>
            { props.items.map( item => <Item key={item.id}  id={item.id} name={item.name} complete={item.complete} itemClick={props.itemClick} /> 
            )}
        </ul>
    </div>
)

export default List;            