import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () =>(
		<div >
			<div>
				<NavLink exact to ='/'> jsdemoa </NavLink> | &nbsp ;
				<NavLink exact to ='/Jsdemob'> jsdemob </NavLink> | &nbsp ;
				<NavLink exact to ='/Jsdemoc'> jsdemob </NavLink> | &nbsp ;
			</div>
		</div>
			
)

export default NavBar;
