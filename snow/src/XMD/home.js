import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Home extends Component {
    render() {
        return (
            <div>
		This is About
                <ul>
                    <li><Link to='/admin'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                </ul>
                <hr />
                {this.props.children}
            </div>
        )
    }
}
export default Home;


