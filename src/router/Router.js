import React from 'react';
import { Route, Switch } from "react-router-dom"




const Router = (props) => {


    return (
        <Switch>
            {/* <Route path="/" exact component={Home} />
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
    )
}

export default Router;
