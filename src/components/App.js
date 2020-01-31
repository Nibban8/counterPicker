import React from 'react';
import Roster from './Roster';
import AddChar from './AddChar';
import ChampInfo from './ChampInfo';
import history from '../history';

import {Router, Route} from 'react-router-dom';


import TopNav from './TopNav';





const App  = () => {
    return (
        <div>
            <Router history = {history}>
                <TopNav/>
                <Route path = "/" exact component = {Roster}></Route>
                <Route path = "/new" exact component = {AddChar}></Route>
                <Route path = "/champ/:name" component = {ChampInfo}></Route>
            </Router> 
        </div>
        
        
    );
}


export default App;