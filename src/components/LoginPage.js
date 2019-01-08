import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

export const LoginPage = ({ startLogin }) => (

    <div className='login-form'>

        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    <Image src='/logo.png' /> Log-in to your account
                </Header>
                <Message>
                    <Button primary  onClick={startLogin}>Login with Google</Button>
                </Message>
            </Grid.Column>
        </Grid>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
