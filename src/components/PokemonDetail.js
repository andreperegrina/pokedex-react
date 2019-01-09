import React from 'react';
import {connect} from "react-redux";
import {
    Card,
    Image,
    Button,
    Icon,
    Grid,
    Modal,
    Header, Popup
} from 'semantic-ui-react'
import {startListPokemon, startGetPokemonsInfo} from '../actions/pokedex'

import Pokemonintro from '@haiku/andreperegrina-pokemonintro/react';


export class DashboardPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            limit: 20
        };
    }

    componentDidMount() {
    }

    render() {
        const {pokemonSelected} = this.props.pokemons;
        return (
            <Card>
                <Image src={pokemonSelected.sprites['front_default']}/>
                <Card.Content>
                    <Card.Header>{pokemonSelected.name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user'/>
                        22 Friends
                    </a>
                </Card.Content>
            </Card>
        );
    }
}


const mapStateToProps = (state, props) => ({
    pokemons: state.pokemons
});


const mapDispatchToProps = (dispatch) => ({
    getAllPokemonInformation: (pokemon) => dispatch(startGetAllPokemonInformation(pokemon))
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
