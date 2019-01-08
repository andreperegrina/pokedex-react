import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';
import {
    Icon,
    Input,
    Menu,
    Sidebar,
} from 'semantic-ui-react'


export const SidebarMenu = ({startLogout}) => (
    <Sidebar
        as={Menu}
        animation={'push'}
        direction={'left'}
        className={'side-bar-style'}
        icon='labeled'
        inverted
        vertical
        visible={true}
    >
        <Menu.Item>
            <strong>
                Kairos
            </strong>
        </Menu.Item>
        <Menu.Item className={'menu-with-header'}>
            <Menu.Header>
                <Icon name='caret right'/> Reports
            </Menu.Header>
            <Menu.Menu>
                <Menu.Item as={NavLink} to='/introduction' activeClassName='active'>
                    Reuniones por proyecto
                </Menu.Item>
                <Menu.Item as={NavLink} to='/usage' activeClassName='active'>
                    Actividades por persona
                </Menu.Item>
                <Menu.Item as={NavLink} to='/theming' activeClassName='active'>
                    Infografía
                </Menu.Item>
            </Menu.Menu>
        </Menu.Item>
        <Menu.Item className={'menu-with-header'}>
            <Menu.Header>
                <Icon name='caret right'/> Projects
            </Menu.Header>
            <Menu.Menu>
                <Menu.Item as={NavLink} to='/introduction' activeClassName='active'>
                    STARTUP CHILE
                </Menu.Item>
                <Menu.Item as={NavLink} to='/usage' activeClassName='active'>
                    SW-CERTUIT-KAIROS-ISSUES
                </Menu.Item>
                <Menu.Item as={NavLink} to='/theming' activeClassName='active'>
                    STARTUP CHILE BUDGETS
                </Menu.Item>
            </Menu.Menu>
        </Menu.Item>
    </Sidebar>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(SidebarMenu);
