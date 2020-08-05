import React,{Component} from 'react';
import { HashRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from './containers/Home'
import Login from './containers/Login'

const About =() => (
	<div>
		<h2>About</h2>	
	</div>

)

class App extends Component{
	render(){
		return(
			<Router>
				<Switch>
					<div className="App">
						<Route path="/" exact component={Home}></Route>
						<Route path="/login" component={Login}></Route>
					</div>
				</Switch>
			</Router>
   		)
	}
}

export default App;
