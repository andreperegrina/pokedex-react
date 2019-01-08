import React from 'react';
import {
    Card,
    List,
    Image,
    Label,
    Icon,
    Grid,
    Popup,
} from 'semantic-ui-react'
import {connect} from "react-redux";
import moment from "moment/moment";

import {startListPokemon} from '../actions/pokedex'


export class DashboardPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            createdAt: moment(),
            calendarFocused: false
        };
    }

    componentDidMount() {
        this.props.listPokemon();
    }


    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({createdAt}));
        }
    };
    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}));
    };

    render() {
        const {pokemonsList} = this.props.pokemons;
        var pokemonShow=[];
        if(pokemonsList)
            pokemonShow=pokemonsList.slice(0,20);
        return (
            <Card.Group centered>
                {pokemonShow && pokemonShow.map(({id, name, weight, height, base_experience, sprites}, index) => (
                    <Card key={id} >
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
                                            <div><Icon name='arrows alternate vertical'/> {height}</div>
                                        </Grid.Column>
                                        <Grid.Column width={8}>
                                            <div><Icon name='weight'/> {weight}</div>
                                        </Grid.Column>
                                        <Grid.Column width={8}>
                                            <div><Icon name='sliders horizontal'/> {base_experience}</div>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Card.Description>
                        </Card.Content>
                    </Card>
                ))}
            </Card.Group>
        );
    }
}


const mapStateToProps = (state, props) => ({
    pokemons: state.pokemons
});


const mapDispatchToProps = (dispatch) => ({
    listPokemon: () => dispatch(startListPokemon())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
