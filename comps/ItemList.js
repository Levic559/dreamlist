import React from 'react';
import NewItem from './NewItem';
import Button from 'react-bootstrap/Button'


const ItemList = ({wishlist, handleToggle, handleFilter}) => {
    return (
        <div>
            <div style={{paddingRight: "1rem",paddingLeft: "1rem", border:"1px"  }}>
            {wishlist.map( (o,i) => {
                return (
                    <NewItem key={i} NewItem={o} handleToggle={handleToggle} handleFilter={handleFilter} />
                    )
                })}
                </div>
           
        </div>
    );
};

export default ItemList;




