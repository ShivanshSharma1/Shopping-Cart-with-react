import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router,
Switch,
Route,
Link
} from 'react-router-dom'
import Items from  '../Items/items';
import Cart from '../Cart/cart'



const Name = styled.span`
    margin-left: 10px
`

const NavBar = ({setItemsInCart, itemsInCart, setAlreadyItems, alreadyItems}) => {
    return (
        <div>
            <Router>
            <nav class="navbar navbar-expand-lg navbar-light" style={{background: "#e3f2fd", height: 70}}>
                <a class="navbar-brand" href="#"><Name>Shopping Cart</Name></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
            
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link to="/Home"class="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Cart"class="nav-link" href="#">Cart</Link>
                    </li>
                </ul>
            </div> 
            </nav>
                <Switch>
                    <Route exact path="/Home">
                        <Items alreadyItems={alreadyItems} setAlreadyItems={setAlreadyItems} itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} />
                    </Route>
                    <Route path="/Cart">
                        <Cart itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} setAlreadyItems={setAlreadyItems}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}


export default NavBar