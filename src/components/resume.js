import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>

                        </div>

                        <h2 style={{ paddingTop: '0em' }}>Adam Horscraft</h2>
                        <h4 style={{ color: 'grey' }}>Software Developer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>Flat 13, Dinmore House, Templecombe Road, London</p>
                        <h5>Phone</h5>
                        <p>07753 142564</p>
                        <h5>Email</h5>
                        <p>adam.horscraft@gmail.com</p>
                        <h5>Webiste</h5>
                        <p>mywebsite.com</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

                    </Cell>
                    <Cell className='resume-right-col' col={4}>
                        <h2>Education</h2>

                        <Education
                            startYear={2013}
                            endYear={2016}
                            schoolName='Manchester Metropolitan University'
                            schoolDescription='Sports Marketing & Management'
                        />

                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Experience</h2>

                        <Experience
                            startYear={2020}
                            endYear={2020}
                            jobDescription={'CodeNation - Junior Software Developer'}
                        />

                        <Experience
                            startYear={2017}
                            endYear={2020}
                            jobDescription={'Recruitment Consultant'}
                        />

                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Skills</h2>
                        <Skills
                            skill='Javascript'
                            progress={100}
                        />
                        <Skills
                            skill='NodeJS'
                            progress={100}
                        />
                        <Skills
                            skill='Express'
                            progress={90}
                        />
                        <Skills
                            skill='React'
                            progress={40}
                        />
                        <Skills
                            skill='MongoDB'
                            progress={100}
                        />
                        <Skills
                            skill='restAPI/API'
                            progress={40}
                        />
                        <Skills
                            skill='HTML/CSS'
                            progress={50}
                        />
                        <Skills
                            skill='Postman/Insomnia'
                            progress={100}
                        />


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;