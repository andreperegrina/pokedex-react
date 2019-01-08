import React from 'react';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';
import {
    Menu,
    Icon,
    Search,
    Dropdown,
} from 'semantic-ui-react'


export const Header = ({startLogout}) => (
    <Menu secondary className={'custom-secundary-menu'}>
        <Menu.Item name='editorials'>
            Mis actividades
        </Menu.Item>


        <Dropdown item icon='plus' labeled button className={'circular-dropdown'}>
            <Dropdown.Menu>
                <Dropdown.Item icon='calendar alternate outline' text='Reunión'/>
                <Dropdown.Item icon='check circle outline' text='Actividad'/>
                <Dropdown.Item icon='clipboard outline' text='Proyecto'/>
            </Dropdown.Menu>
        </Dropdown>


        <Menu.Menu position='right' className={'center'}>
            <Menu.Item name='editorials'>
                <Search value={''} />
            </Menu.Item>
        </Menu.Menu>

        <Menu.Menu position='right'>

            <Dropdown item text={'andre.peregrina@gmail.com'}>
                <Dropdown.Menu>
                    <Dropdown.Item icon='edit' text='Edit Profile'/>
                    <Dropdown.Item icon='globe' text='Choose Language'/>
                    <Dropdown.Item icon='settings' text='Logout' onClick={startLogout}/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Menu>
    </Menu>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
