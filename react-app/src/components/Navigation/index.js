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

				<NavLink exact to="/restaurants">Home</NavLink>
			</span>
		</nav>
	);
}

export default Navigation;
