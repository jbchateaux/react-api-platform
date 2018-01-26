import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import Folder from '../folder/Folder';
import Article from "../article/Article";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/dossiers' component={Folder}/>
            <Route path='/articles/:id' component={Article} />
        </Switch>
    </main>
);

export default Main;