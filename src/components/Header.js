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
            <h3 className='white'>Pokedex</h3>
        </Menu.Item>

        <div className="absolute" style={{left: '45%'}}>
            <img src="images/pokemon_logo.png" alt="" style={{maxHeight: '45px', marginTop: '5px'}}/>
        </div>

        <Menu.Menu position='right'>
            <Menu.Item name='editorials'>
                <Search value={''}/>
            </Menu.Item>
        </Menu.Menu>
    </Menu>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
