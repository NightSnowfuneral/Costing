import React,{Component} from 'react';
import { BrowserRouter as Router, Link, Route, Switch,BrowserRouter} from 'react-router-dom';
import Home from './containers/Home';
import './index.css';
import Login from './containers/Login/index'
import Home2 from './containers/jsdemo' 
import 'antd/dist/antd.css';
import Management from './containers/Management'
import Dashbor from './containers/Dashbor.js'
import Culture from './containers/Culture'
import Aaa from './XMD/app'
import Bbb from './XMD/admin'

class App extends Component{
	render(){
		return(
		    	
			<Router>
				
					<Route path="/home" render={()=>
						<Home>
							<Route path="/defects/management" component={Management} />
							
						</Home>
					} />
					
								
			</Router>
		     
   		)
	}
}

//router.js
class IRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <BrowserRouter>
                <Dashbor>
                    {/* 嵌套路由不用写component 写render 继续渲染下一级路由 */}
                    {/* 嵌套路由 不能加exact  否则不能匹配到`/admin` 只能精准匹配到`/` */}
                    <Route path='/admin' render={()=>
                        <Home>
			    <Route path='/admin/management' component={Management} />     
			    <Route path='/admin/culture' component={Management} />
                        </Home>
                    } />
                    <Route path='/about' component={Home}  />
                    <Route path='/login' component={Login} />
                </Dashbor>
            </BrowserRouter>
        )
    }
}
//export default IRouter;


class IRouter2 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <BrowserRouter>
                <Dashbor>
                    {/* 嵌套路由不用写component 写render 继续渲染下一级路由 */}
                    {/* 嵌套路由 不能加exact  否则不能匹配到`/admin` 只能精准匹配到`/` */}
                    <Route path='/' render={()=>
                        <Home>
			    <Route path='/management' component={Management} />     
			    <Route path='/culture' component={Culture} />
                        </Home>
                    } />
                    <Route path='/about' component={Home} />
                    <Route path='/login' component={Login} />
                </Dashbor>
            </BrowserRouter>
        );
    }
}

export default IRouter2




