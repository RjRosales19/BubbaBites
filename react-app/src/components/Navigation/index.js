import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<nav>
			{isLoaded && (
				<span>
					<ProfileButton user={sessionUser} />
				</span>
			)}
			<span>
				<NavLink exact to="/restaurants"><img style={{width: "3%"}}src={"./images/BubbaBites.png"}/></NavLink>
			</span>
		</nav>
	);
}

export default Navigation;
