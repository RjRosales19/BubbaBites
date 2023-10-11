import "./HomePage.css"
import { useSelector } from "react-redux"
import OpenModalButton from "../OpenModalButton"
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { useHistory } from "react-router-dom";

const HomePage = () => {
    const sessionUser = useSelector(state=> state.session.user)
    const history = useHistory()
    const handleFindRestaurants = (e) => {
        e.preventDefault()
        history.push('/restaurants')
    }
    return (
        <div className="home-page-main-container">
            <div className="home-first-section-container">
                {sessionUser ? (
                        <button className='find-restaurants-button' onClick={handleFindRestaurants}>Find Restaurants</button>
                ) : (
                    <>
                        <div>
                            <div>
                                <button className='find-restaurants-button' onClick={handleFindRestaurants}>Find Restaurants</button>
                            </div>
                            <div>
                                <OpenModalButton
                                    buttonText="Sign In"
                                    modalComponent={<LoginFormModal />}
                                    buttonStyling='sign-in-modal-button'
                                />
                                <OpenModalButton
                                    buttonText="Sign Up"
                                    modalComponent={<SignupFormModal />}
                                    buttonStyling='sign-up-modal-button'
                                />
                            </div>
                        </div>
                    </>
                    )}
                <img src="../images/big_last_icon.png"/>
            </div>
            <div className="home-middle-section-container">

                    <img src="../images/small_middle_icon.png"/>
                    <div>
                        <h2>Become a Biter</h2>
                        <div>As a member, you'll obtain exclusive offers and discounts</div>
                    </div>


                    <img src="../images/small_middle_icon_2.png"/>
                    <div>
                        <h2>Become a Partner</h2>
                        <div>Grow your business and reach new customers by partnering with us</div>
                    </div>


                    <div>
                        <img src="../images/small_middle_last_icon.png"/>
                    </div>
                    <div>
                        <h2>Get the best BubbaBites experience</h2>
                        <div>Experience the best your neighborhood has to offer, all in one app</div>
                    </div>

            </div>
            <div className="home-third-section-container">
                        <img  src="../images/big_first_icon.png"/>
                    <div className="third-section-info-container">
                        <h2>Everything you crave</h2>
                        <h4>Your favorite local restaurants</h4>
                        <div>Get a slice of pizza or a whole meal, all in one touch of a button</div>
                        <div>
                        <a className="get-bubba-button" href="https://github.com/RjRosales19/BubbaBites">GetBubbaBites</a>
                        </div>
                    </div>
            </div>
            <div className="footer-section-container">
                <div>
                    <a href="https://github.com/RjRosales19">
                        <img className="linked-in-logo" src="../images/github_logo.png"/>
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/ryan-rosales-646437276">
                        <img className="linked-in-logo" src="../images/linked_in_logo.png"/>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default HomePage
