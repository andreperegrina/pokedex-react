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
import {startListPokemon, startGetPokemonsInfo, startSetPokemonSelected} from '../actions/pokedex'
import PokemonDetail from './PokemonDetail'

import Pokemonintro from '@haiku/andreperegrina-pokemonintro/react';


export class DashboardPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            limit: 20,
            isShowMoreAvailable: false,
            loading: false,
            dimmer: 'inverted',
            open: true
        };
        this.onLoadMore = this.onLoadMore.bind(this);
        this.setPokemonSelected = this.setPokemonSelected.bind(this);
    }

    show = dimmer => () => this.setState({dimmer, open: true});
    close = () => this.setState({open: false});

    componentDidMount() {
        this.props.listPokemon().then(() => {
            this.setState({
                isShowMoreAvailable: true
            });
        });
    }


    onLoadMore = () => {
        const {limit} = this.state;
        const newLimit = limit + 20;
        this.setState({
            loading: true
        });
        this.props.getPokemonsInfo(limit, newLimit).then(() => {
            this.setState({
                limit: newLimit,
                loading: false
            });
        });
    };


    setPokemonSelected = (pokemon) => {
        this.props.setPokemonSelected(pokemon);
    };

    render() {
        const {pokemonsList, pokemonSelected, pokemonSearchList} = this.props.pokemons;
        const {limit, isShowMoreAvailable, loading, open, dimmer} = this.state;
        var pokemonShow = [];
        var pokemonPreview = [];
        if (pokemonSearchList) {
            pokemonShow = pokemonSearchList
        } else if (pokemonsList) {
            pokemonShow = pokemonsList.slice(0, limit);
        }

        const loadingButton = () => {

            const buttonToShow = loading ?
                <div className='bottom-load absolute'><Button size='big' loading attached='bottom'
                                                              onClick={this.onLoadMore}>Show me more</Button></div> :
                <div className='bottom-load absolute'><Button size='big' attached='bottom' onClick={this.onLoadMore}>Show
                    me more</Button></div>;
            if (pokemonSearchList) {
                if (pokemonShow.length < pokemonSearchList.length)
                    return buttonToShow;
            } else if (pokemonsList)
                if (pokemonShow.length < pokemonsList.length)
                    return buttonToShow;

            return '';
        };

        return (
            <div className='dashboard'>

                <Modal basic dimmer={dimmer} open={open} onClose={this.close} centered={false}>
                    <Modal.Content>
                        <div className='pokmemon-animation'>
                            <Pokemonintro loop={false}/>
                        </div>
                        <Modal.Description>
                            <div className='pokemon-intro-description'>
                                <h1>Welcome to the pokedex!</h1>
                                <p className='no-bottom'>Here you will able to find everything you want to now about the
                                    pokemons.</p>
                                <p>So don't be shy and enter the site!</p>
                            </div>
                            <div className='pokemon-intro-actions'>
                                <Button color='red' size='huge'
                                        content="I'm ready!"
                                        onClick={this.close}
                                />
                            </div>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>

                <Card.Group centered>
                    {pokemonShow && pokemonShow.map(({id, name, weight, height, base_experience, sprites}, index) => (
                        <Card key={id} link onClick={() => {
                            this.setPokemonSelected(pokemonShow[index])
                        }}>
                            <Card.Content>
                                <div className="pokemon-sprite">
                                    <Image floated='right' size='tiny'
                                           src={sprites['front_default']}/>
                                </div>
                                <Card.Header>{name}</Card.Header>
                                <Card.Meta>No. {id}</Card.Meta>
                                <Card.Description>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Popup inverted trigger={<div data-tip="Height"><Icon
                                                    name='arrows alternate vertical'/> {height}</div>}
                                                       content='Height'/>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <Popup inverted
                                                       trigger={<div data-tip="Weight"><Icon
                                                           name='weight'/> {weight}
                                                       </div>} content='Weight'/>

                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <Popup inverted trigger={<div data-tip="Experience"><Icon
                                                    name='sliders horizontal'/> {base_experience}</div>}
                                                       content='Experience'/>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    ))}
                </Card.Group>

                {loadingButton()}

            </div>

        );
    }
}


const mapStateToProps = (state, props) => ({
    pokemons: state.pokemons
});


const mapDispatchToProps = (dispatch) => ({
    listPokemon: () => dispatch(startListPokemon()),
    getPokemonsInfo: (from, to) => dispatch(startGetPokemonsInfo(from, to)),
    setPokemonSelected: (pokemon) => dispatch(startSetPokemonSelected(pokemon))
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
