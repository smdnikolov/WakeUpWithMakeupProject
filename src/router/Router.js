import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/home';
import Services from '../components/services';
import Service from '../components/service';
import Prices from '../components/prices';
import Gallery from '../components/gallery';
import FAQ from '../components/faq';
import Contacts from '../components/contacts';
import NotFound from '../components/not-found';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/услуги" exact component={Services} />
      <Route path="/услуги/:title" exact component={Service} />
      <Route path="/цени" exact component={Prices} />
      <Route path="/Галерия" exact component={Gallery} />
      <Route path="/чзв" exact component={FAQ} />
      <Route path="/контакти" exact component={Contacts} />
      <Route path="*" exact component={NotFound} />
      {/*
            <ProtectedRoute user={user} path="/login" component={Login} />
            <ProtectedRoute user={user} path="/register" component={Register} />
            <Route path="/category/:name" component={Category} />
            <Route path="/details/:id" component={Details} />
            <AuthGuard user={user} path='/profile' component={Profile} />
            <AuthGuard user={user} path='/post-ad' component={PostAd} />
            <AuthGuard user={user} path='/edit/:id' component={EditAd} />
            <SearchProtect query={query} path="/search" component={Search} />
            <Route path="/network-error" component={NetworkError} />
            <Route path='*' exact component={NotFound} /> */}
    </Switch>
  );
};

export default Router;
