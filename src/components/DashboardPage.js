import React from 'react';
import {
    Card,
    List,
    Image,
    Label,
    Icon,
    Checkbox,
} from 'semantic-ui-react'
import {SingleDatePicker} from 'react-dates';
import {connect} from "react-redux";
import moment from "moment/moment";


export class DashboardPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            createdAt: moment(),
            calendarFocused: false
        };
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
        return (

            <Card fluid className={'card-list-activities'}>
                <Card.Content className={'card-header-activities'}>
                    <Card.Header  className={'section-activities'}>
                        <Image size='mini' src='/images/integrations/asana-logo.png'/>
                        <div className={'title-activities'}><span>Asana</span></div>
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <List divided relaxed='very'>
                        <List.Item>
                            <div className={'checkbox-list'}>
                                <Checkbox/>
                            </div>
                            <List.Content>
                                <List.Header as='a'>Rachel</List.Header>
                                <List.Description>
                                    Last seen watching{' '}
                                    <a>
                                        <b>Arrested Development</b>
                                    </a>{' '}
                                    just now.
                                </List.Description>
                            </List.Content>
                            <List.Content floated='right'>
                                <Label as='a' basic>
                                    Startup-chile
                                </Label>
                                <div className={'single-date-picker-list-item'}>
                                    <SingleDatePicker small
                                                      date={this.state.createdAt}
                                                      onDateChange={this.onDateChange}
                                                      focused={this.state.calendarFocused}
                                                      onFocusChange={this.onFocusChange}
                                                      numberOfMonths={1}
                                                      isOutsideRange={() => false}
                                    />
                                </div>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <div className={'checkbox-list'}>
                                <Checkbox/>
                            </div>
                            <List.Content>
                                <List.Header as='a'>Lindsay</List.Header>
                                <List.Description>
                                    Last seen watching{' '}
                                    <a>
                                        <b>Bob's Burgers</b>
                                    </a>{' '}
                                    10 hours ago.
                                </List.Description>
                            </List.Content>
                            <List.Content floated='right'>
                                <Label as='a' basic>
                                    STARTUP CHILE BUDGETS
                                </Label>
                            </List.Content>
                        </List.Item>
                    </List>
                </Card.Content>
                <Card.Content className={'card-header-activities'}>
                    <Card.Header  className={'section-activities'}>
                        <Image size='mini' src='/images/integrations/jira-isotipo.png'/>
                        <div className={'title-activities'}><span>Jira</span></div>
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <List divided relaxed='very'>
                        <List.Item>
                            <div className={'checkbox-list'}>
                                <Checkbox/>
                            </div>
                            <List.Content>
                                <List.Header as='a'>Rachel</List.Header>
                                <List.Description>
                                    Last seen watching{' '}
                                    <a>
                                        <b>Arrested Development</b>
                                    </a>{' '}
                                    just now.
                                </List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <div className={'checkbox-list'}>
                                <Checkbox/>
                            </div>
                            <List.Content>
                                <List.Header as='a'>Lindsay</List.Header>
                                <List.Description>
                                    Last seen watching{' '}
                                    <a>
                                        <b>Bob's Burgers</b>
                                    </a>{' '}
                                    10 hours ago.
                                </List.Description>
                            </List.Content>
                            <List.Content floated='right'>
                                <Label as='a' basic className='label-icon-only'>
                                    <Icon name='phone'/>
                                </Label>
                            </List.Content>
                        </List.Item>
                    </List>
                </Card.Content>
                <Card.Content className={'card-header-activities'}>
                    <Card.Header  className={'section-activities'}>
                        <Image size='mini' src='/images/integrations/trello-isotipo.png'/>
                        <div className={'title-activities'}><span>Trello</span></div>
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <List divided relaxed='very'>
                        <List.Item>
                            <div className={'checkbox-list'}>
                                <Checkbox/>
                            </div>
                            <List.Content>
                                <List.Header as='a'>Rachel</List.Header>
                                <List.Description>
                                    Last seen watching{' '}
                                    <a>
                                        <b>Arrested Development</b>
                                    </a>{' '}
                                    just now.
                                </List.Description>
                            </List.Content>
                            <List.Content floated='right'>
                                <Label as='a' basic className='label-icon-only'>
                                    <Icon name='tasks'/>
                                </Label>
                            </List.Content>
                        </List.Item>
                    </List>
                </Card.Content>
                <Card.Content className={'card-header-activities'}>
                    <Card.Header  className={'section-activities'}>
                        <Image size='mini' src='/images/integrations/google-calendar-isotipo.png'/>
                        <div className={'title-activities'}><span>Google calendar</span></div>
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <List divided relaxed='very'>
                        <List.Item>
                            <div className={'checkbox-list'}>
                                <Checkbox/>
                            </div>
                            <List.Content>
                                <List.Header as='a'>Rachel</List.Header>
                                <List.Description>
                                    Last seen watching{' '}
                                    <a>
                                        <b>Arrested Development</b>
                                    </a>{' '}
                                    just now.
                                </List.Description>
                            </List.Content>
                            <List.Content floated='right'>
                                <Label as='a' basic className='label-icon-only'>
                                    <Icon name='calendar alternate outline'/>
                                </Label>
                            </List.Content>
                        </List.Item>
                    </List>
                </Card.Content>
            </Card>
        );
    }
};


export default connect()(DashboardPage);
