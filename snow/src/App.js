import React,{Component} from 'react'
import { Route,Router,hashHistory,Switch } from 'react-router-dom'

import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'

class App extends Component {
		render(){
  	return (
    			<Switch>
    		  		<Route path="/" component={HomePage}>	
		   		</Route>
		    		<Route path="/login" component={HomePage}>	
		   		</Route>
    			</Switch>
		
  		)	
	}
}

export default App
