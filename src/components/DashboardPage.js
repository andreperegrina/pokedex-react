import React from 'react';
import {connect} from "react-redux";
import {
    Card,
    Image,
    Button,
    Icon,
    Grid,
    Modal,
    Header
} from 'semantic-ui-react'
import {startListPokemon, startGetPokemonsInfo} from '../actions/pokedex'
import ReactTooltip from 'react-tooltip'

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

    render() {
        const {pokemonsList} = this.props.pokemons;
        const {limit, isShowMoreAvailable, loading, open, dimmer} = this.state;
        var pokemonShow = [];
        var pokemonPreview = [];
        if (pokemonsList) {
            pokemonShow = pokemonsList.slice(0, limit);
        }
        const showMoreClasses = isShowMoreAvailable ? 'bottom-load absolute' : 'hide';


        const loadingButton = () => {
            return loading ? <Button size='big' loading attached='bottom' onClick={this.onLoadMore}>Show more</Button> :
                <Button size='big' attached='bottom' onClick={this.onLoadMore}>Show more</Button>
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
                                <p  className='no-bottom'>Here you will able to find everything you want to now about the pokemons.</p>
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
                        <Card key={id}>
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
                                                <div data-tip="Height"><Icon name='arrows alternate vertical'/> {height}
                                                </div>
                                                <ReactTooltip/>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <div data-tip="Weight"><Icon name='weight'/> {weight}</div>
                                                <ReactTooltip/>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <div data-tip="Experience"><Icon
                                                    name='sliders horizontal'/> {base_experience}</div>
                                                <ReactTooltip/>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    ))}
                </Card.Group>

                <div className={showMoreClasses}>
                    {loadingButton()}
                </div>

            </div>

        );
    }
}


const mapStateToProps = (state, props) => ({
    pokemons: state.pokemons
});


const mapDispatchToProps = (dispatch) => ({
    listPokemon: () => dispatch(startListPokemon()),
    getPokemonsInfo: (from, to) => dispatch(startGetPokemonsInfo(from, to))
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
