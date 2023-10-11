import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { NavLink, useHistory } from "react-router-dom";


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const history = useHistory()

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push('/')
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <button className='nav-button' onClick={openMenu}>
        <i className="fas fa-bars"/>
        {/* <i className="fas fa-user-circle" /> */}
      </button>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <div className="drop-down-menu">
              <div>Welcome, {user.username}!</div>
              <div>{user.email}</div>
              <NavLink className='manage-restaurants-button' exact to='/restaurants/owned'>Manage Restaurants</NavLink>
              <div>
                <button className='sign-up-modal-button' onClick={handleLogout}>Log Out</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <OpenModalButton
              buttonText="Sign In"
              onItemClick={closeMenu}
              buttonStyling='sign-in-modal-button'
              modalComponent={<LoginFormModal />}
            />

            <OpenModalButton
              buttonText="Sign Up"
              onItemClick={closeMenu}
              buttonStyling='sign-up-modal-button'
              modalComponent={<SignupFormModal />}
            />
          </>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;
