import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img
                            src='https://pbs.twimg.com/profile_images/1275512987470770183/5K23CgaI_400x400.jpg'
                            alt='me'
                            className='avatar-img'
                        />

                        <div className='banner-text'>
                            <h1>Software Developer</h1>

                            <hr />

                            <p>Javascript | HTML/CSS | React | NodeJS | Express | MongoDB | Postman | restAPI/API</p>
                            <div className='social-links'>

                                {/* LinkedIn */}
                                <a href='https://www.linkedin.com/in/adam-horscraft0987/' rel='noopener noreferrer' target='_blank'>
                                    <i className='fa fa-linkedin-square' aria-hidden='true' />
                                </a>

                                {/* Github */}
                                <a href='https://github.com/AHors93' rel='noopener noreferrer' target='_blank'>
                                    <i className='fa fa-github-square' aria-hidden='true' />
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;