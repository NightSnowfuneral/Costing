import React, { Component } from 'react';
import { HashRouter as Router, Link, Route, Switch} from 'react-router-dom';
import ReactDom from 'react-dom'
import Appa from './dom'

import { Provider } from 'react-redux'
import configureStore from './store/index'
let store =  configureStore()
class App extends Component {
    
    render() {
        return <div className="cm">
           		dddddddddddddddddd
        </div>
    }
}

const rootElement = document.getElementById('app')


ReactDom.render(
		<Provider store = {store}>
			<Appa />
		</Provider>,
		rootElement
			
		);




