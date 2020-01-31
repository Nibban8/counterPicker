import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore , applyMiddleware, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';


import App from './components/App';
import reducers from './reducers'
import thunk from 'redux-thunk';

const storeEnhancers = composeWithDevTools || compose;

const store  = createStore(reducers, storeEnhancers(applyMiddleware(thunk)),);



ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);

export default App;