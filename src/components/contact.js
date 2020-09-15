import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2>Adam Horscraft</h2>
                        <img
                            src='https://pbs.twimg.com/profile_images/1275512987470770183/5K23CgaI_400x400.jpg'
                            alt='me'
                            className='my-dog'
                        />
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

                        <div className='contact-list'>
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Roboto' }}>
                                        <i className='fa fa-phone-square' aria-hidden='true' />
                                        07753 142 564
                                        </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Roboto' }}>
                                        <i className='fa fa-envelope-square' aria-hidden='true' />
                                        adam.horscraft@gmail.com
                                        </ListItemContent>
                                </ListItem>
                            </List>

                        </div>



                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;