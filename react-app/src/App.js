import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import AllRestaurants from "./components/AllRestaurants/AllRestaurants";
import SingleRestaurant from "./components/SingleRestaurant/SingleRestaurant";
import CreateRestaurantForm from "./components/CreateRestaurantForm/CreateRestaurantForm";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import ManageRestaurants from "./components/ManageRestaurants/ManageRestaurants";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/restaurants/new">
            <CreateRestaurantForm />
          </Route>
          <Route exact path='/restaurants/owned'>
            <ManageRestaurants />
          </Route>
          <Route exact path="/restaurants/:restaurantId">
            <SingleRestaurant />
          </Route>
          <Route exact path="/restaurants">
            <AllRestaurants />
          </Route>
          <Route>
          </Route>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
