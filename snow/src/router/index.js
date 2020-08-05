import React,{Component} from 'react'
import {BrowserRouter as Router, Switch,Route,Link,Prompt} from 'react-router'
import Home from '../containers/Home'
import Login from '../containers/Login'
import App from '../App'			

class Pre extends Component{
	render(){		
		return(
			<Router>
				<Switch>
					<Route path="/"  exact component={Home} />
					
				</Switch>
			
			</Router>
		)
		
	}
}


export default Pre



