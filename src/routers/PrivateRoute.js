import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import SidebarMenu from '../components/Sidebar';
import HeaderCustom from '../components/Header';
import SubHeader from '../components/SubHeader';
import {
    Divider,
    Segment,
    Sidebar,
} from 'semantic-ui-react'

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      isAuthenticated ? (
        <div>
            <Sidebar.Pushable as={Segment}>
                <SidebarMenu />
                <Sidebar.Pusher>
                    <HeaderCustom/>
                    {/*<SubHeader/>*/}
                    <Segment basic>
                        <Component {...props} />
                    </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </div>
      ) : (
          <Redirect to="/" />
        )
    )} />
  );

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
