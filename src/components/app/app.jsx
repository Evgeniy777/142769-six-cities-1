import React from 'react';
import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import Favorites from '../favorites/favorites.jsx';
import OfferDetails from '../offer-details/offer-details.jsx';
import {Route, Switch} from 'react-router-dom';
import withAuthorizationRequired from '../../hocs/withAuthorizationRequired.jsx';
import withUserRequired from '../../hocs/withUserRequired.jsx';

const WrappedFavorites = withUserRequired(Favorites);
const WrappedMain = withAuthorizationRequired(Main);

const App = () => {
  return <Switch>
    <Route path="/" exact render={() => <WrappedMain />} />
    <Route path="/login" component={SignIn} />
    <Route path="/favorites" render={() => <WrappedFavorites />} />
    <Route path="/offer/:id" render={({match}) => {
      const id = match.params.id;
      return <OfferDetails id={id} />;
    }}/>
  </Switch>;
};

export {App};

export default App;
