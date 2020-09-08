import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
const ForImage = styled.div`
    padding-top: 25px;
    text-align: center
`
const ForItem = styled.div`
    position: relative;
    margin: 10px;
    margin-left: 60px;
    margin-top: 45px;width: 20%;
    width: 20%;
    height: 390px;
    float: left;
`

const ItemIn = styled.div`
    position: ;
    padding-top: 30px;
    text-align: center;
`

const Items = ({setAlreadyItems, alreadyItems, setItemsInCart, itemsInCart}) => {
    return(
        <div>
            {alreadyItems.map((product => <Item name={product.name} price={product.price} id={product.id} src={product.src}setItemsInCart={setItemsInCart} itemsInCart={itemsInCart} setAlreadyItems={setAlreadyItems}/>))}
        </div>
    )
}

const Item = ({name, price, id, src ,setItemsInCart, itemsInCart, setAlreadyItems}) => {
    return(
        <ForItem>
        <div>
            <ForImage>
                <img src={src}></img>
            </ForImage>
                <ItemIn>
                <div>{name}</div>
                <div>{price}</div>
                <button onClick={() => {
                    setItemsInCart(products => [...products, {name, price, id, src}])
                    setAlreadyItems(products => products.filter(product => product.id!==id))
                }}type="button" class="btn btn-outline-primary">ADD TO CART</button>
                </ItemIn>
        </div>
        </ForItem>
    )
}

export default Items
