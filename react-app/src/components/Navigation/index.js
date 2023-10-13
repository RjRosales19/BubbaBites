import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<nav className='navigation-bar-container'>
			<span>
				<NavLink exact to="/">
					<img className="title-logo" src="/images/bubbabites_title_logo.png"/>
				</NavLink>
			</span>
			<span>
				<NavLink exact to="/restaurants"><img className="nav-icon" src="/images/BubbaBites.png" alt={'BubbaBites'}/></NavLink>
			</span>
			<span>
			{isLoaded && (
					<ProfileButton user={sessionUser} />
					)}
			</span>
		</nav>
	);
}

export default Navigation;
