import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import search from './components/SeachComponent/reducer';


const store = createStore(search, applyMiddleware(thunk));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));
