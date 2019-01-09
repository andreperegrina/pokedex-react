import React from 'react';
import {connect} from "react-redux";
import {
    Menu,
    Input
} from 'semantic-ui-react'
import {startSearchPokemon, startSetSearchPokemon} from "../actions/pokedex";

let delayTimer;

export class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false, value: ''
        };
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    componentWillMount() {
        this.resetComponent()
    }

    resetComponent = () => this.setState({isLoading: false, results: [], value: ''});


    handleSearchChange(event) {
        const props = this.props;
        const value = event.target.value;
        this.setState({value: value});
        clearTimeout(delayTimer);
        if (value !== undefined && value != null && value !== "")
            delayTimer = setTimeout(function () {
                props.searchPokemon(value);
            }, 1000); // Will do the ajax stuff after 1000 ms, or 1 s
        else
            props.setSearchPokemon(undefined);
    }

    render() {

        const {isLoading, value, results} = this.state;
        return (
            <Menu secondary className={'custom-secundary-menu'}>
                <Menu.Item name='editorials'>
                    <h3 className='white'>Pokedex</h3>
                </Menu.Item>

                <div className="absolute" style={{left: '45%'}}>
                    <img src="images/pokemon_logo.png" alt="" style={{maxHeight: '45px', marginTop: '5px'}}/>
                </div>

                <Menu.Menu position='right'>
                    <Menu.Item name='editorials'>
                        <Input value={value} placeholder='Search pokemons...' onChange={this.handleSearchChange}/>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>

        );
    }
}


const mapStateToProps = (state, props) => ({
    pokemons: state.pokemons
});


const mapDispatchToProps = (dispatch) => ({
    searchPokemon: (searchText) => dispatch(startSearchPokemon(searchText)),
    setSearchPokemon: (value) => dispatch(startSetSearchPokemon(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
