import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div className='projects-grid'>
                    {/* Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.idevie.com/wp-content/uploads/2015/12/React.js_logo.svg_.png) center / cover' }} >React Project #1</CardTitle>
                        <CardText>
                            My first react project
                    </CardText>
                        <CardActions border>
                            <Button colored href='https://github.com/AHors93/basicCalculator' rel='noopener noreferrer' target='_blank'>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                    {/* Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.idevie.com/wp-content/uploads/2015/12/React.js_logo.svg_.png) center / cover' }} >React Project #2</CardTitle>
                        <CardText>
                            To-Do-List
                    </CardText>
                        <CardActions border>
                            <Button colored href='https://github.com/AHors93/todolist' rel='noopener noreferrer' target='_blank'>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                    {/* Project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.idevie.com/wp-content/uploads/2015/12/React.js_logo.svg_.png) center / cover' }} >React Project #3</CardTitle>
                        <CardText>
                            Built my first restfulAPI in React
                    </CardText>
                        <CardActions border>
                            <Button colored href='https://github.com/AHors93/restfulAPI' rel='noopener noreferrer' target='_blank'>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                </div >
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className='projects-grid'>
                    {/* MongoDB Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.idevie.com/wp-content/uploads/2015/12/React.js_logo.svg_.png) center / cover' }} >MongoBD Project #1</CardTitle>
                        <CardText>
                            Address Book - First Full Stack Project using MongoDB
                    </CardText>
                        <CardActions border>
                            <Button colored href='https://github.com/AHors93/addressBook' rel='noopener noreferrer' target='_blank'>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className='projects-grid'>
                    {/* Full Stack Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.idevie.com/wp-content/uploads/2015/12/React.js_logo.svg_.png) center / cover' }} >Full Stack Project #1</CardTitle>
                        <CardText>
                            Food Deal App - Started 14th Sep 2020 - nothing on Github just yet...
                    </CardText>
                        <CardActions border>
                            <Button colored href='' rel='noopener noreferrer' target='_blank'>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                    {/* Full Stack Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.idevie.com/wp-content/uploads/2015/12/React.js_logo.svg_.png) center / cover' }} >Full Stack Project #2</CardTitle>
                        <CardText>
                            Online Bookmark - OneLink
                    </CardText>
                        <CardActions border>
                            <Button colored href='https://github.com/Code-Nation-Final-Project' rel='noopener noreferrer' target='_blank'>Github</Button>
                            <Button colored href='https://tender-ride-850528.netlify.app/' rel='noopener noreferrer' target='_blank'>Netlify</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                </div>
            )
        }

    }

    render() {
        return (
            <div className='projects'>
                <div className='category-tabs'>
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                        <Tab>React</Tab>
                        <Tab>MongoDB</Tab>
                        <Tab>Full Stack</Tab>
                    </Tabs>


                    <Grid>
                        <Cell col={12}>
                            <div className='projects-content'>{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>

                </div>
            </div >
        )
    }

}
export default Projects;