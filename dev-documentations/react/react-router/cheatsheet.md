
## Import

## Using

```javascript Login.json
    import { Redirect } from 'react-router-dom';

    if (this.state.shouldRedirect) {
      return (
        <Redirect to='/albums' />
      );
    } else {
        return (... Login Code ...)
    }

```

```javascript PrivateRoute.js

    import { Route, Redirect } from 'react-router-dom';

    <Route {...rest} render={(props) => (
        client.isLoggedIn() ?
        (React.createElement(component, props)) :
        (<Redirect to={{pathname: '/login', state: { from: props.location },}} />)
  )} />

```

```javascript TopBar.js

    import { Link } from 'react-router-dom';

    <Link className='ui item' to='/logout'>
            Logout
    </Link>

```

```javascript App.js

    import { Route, Redirect, Switch } from 'react-router-dom';

    const NoMatch = ({ location }) => (
        <div className='ui inverted red raised very padded text container segment'>
            <strong>Error!</strong> No route found matching:
            <div className='ui inverted black segment'>
            <code>{location.pathname}</code>
            </div>
        </div>
    );

    <Switch>
        <PrivateRoute path='/albums' component={AlbumsContainer} />
        <Route path='/login' component={Login} />
        <Route path='/logout' component={Logout} />

        <Route exact path='/' render={() => (
          <Redirect
            to='/albums'
          />
        )} />

        <Route component={NoMatch} />
    </Switch>

```
