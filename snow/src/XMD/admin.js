import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Admin extends Component {
    render() {
        return (
            <div>
                This is Admin Page.
                <ul>
                    <li><Link to='/admin/company'>公司介绍</Link></li>
                    <li><Link to='/admin/culture'>企业文化</Link></li>
                    <li><Link to='/admin/people'>广纳贤才</Link></li>
                </ul>
                <hr />
                {this.props.children}
            </div>
        );
    }
}

export default Admin;
