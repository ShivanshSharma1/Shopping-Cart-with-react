import React from 'react';
import Items from '../Items/items';
import styled from 'styled-components';

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

const Cart = ({itemsInCart, setItemsInCart, setAlreadyItems}) => {
    return(
        <div>
            {itemsInCart.map(products => <Item name={products.name} price={products.price} id={products.id} src={products.src} setItemsInCart={setItemsInCart} setAlreadyItems={setAlreadyItems}/>)}
        </div>
    )
}

const Item = ({name, price, id, src, setItemsInCart, setAlreadyItems}) => {
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
                    setAlreadyItems(products => [...products, {name, price, id, src}])
                    setItemsInCart(products => products.filter(product => product.id!==id))
                }} type="button" class="btn btn-outline-primary">REMOVE FROM CART</button>
            </ItemIn>
        </div>
        </ForItem>
    )
}

export default Cart 