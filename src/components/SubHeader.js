import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import {
    Segment,
    Tab,
    Header,
} from 'semantic-ui-react'

const panes = [
    { menuItem: 'Reuniones'},
    { menuItem: 'Actividades'}
];

export const SubHeader = ({ startLogout }) => (
    <div>
        <Segment  className={'text-center subheader-segment'}>
            <Header as={'h2'}>Listado de pendientes</Header>
        </Segment>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(SubHeader);
