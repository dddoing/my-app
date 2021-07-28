import React from 'react';
import {BrowserRouter as Router, Route,Redirect,Switch} from "react-router-dom";
import Home from 'Routes/Home'
import Search from '../Routes/Search'
import TV from 'Routes/TV'
import Detail from '../Routes/Detail'
import Example from  '../Routes/Example'
import Header from "./Header";

export default ()=>
(    <Router>
            <>
       <Header/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/tv" component={TV}/>
        <Route path="/search" component={Search}/>
        <Route path="/show/:id" component={Detail}/>
        <Route path="/movie/:id" component={Detail}/>
        <Route path="/example" component={Example}/>
        <Redirect from="*" to="/"/>
        </Switch>
            </>
    </Router>
)