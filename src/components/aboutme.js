import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class About extends Component {
    render() {
        return (
            <div className='about-me'>
                <Grid>
                    <Cell className='about-me-para' col={12}>
                        <h2>About Me</h2>
                        <p>I left uni in 2016 with absolutely no idea what I wanted to do as a career... I had a franchise with my dad so attempted this for a few months but it wasn't for me. After 6 months I was approached and asked if I fancied recruitment
                        which I'd never heard and thought why not. So started recruiting Cyber Security professionals and wasn't too bad at it. I moved to a couple of places and had exprience of working with some big organisations and helping build out
                        their IT teams. I moved to London at the start of 2020 for another recruitment role, having spent the last year recruiting Developers and DevOps Engineers for banks in London.</p>
                        <p>In March when lockdown happened, I was placed on furlough
                        which gave me a lot of time to really think about what I wanted to do. I'll always have a great appreciation for recruitment as it offered me insights into the world that I don't think I would've had been exposed to otherwise, and
                        this is where my interest in pursuing a Dev career came from. I spent a couple of months using FreeCodeCamp and Udemy courses but felt I needed more lesson based work, and that's when I came across CodeNation. The last 12 weeks have
                        been nothing short of amazing, I have gone from not knowing what a variable was or how a funciton works, to building full stack projects in a matter of 12 weeks. Of course, there is so much more to learn, but now I've started this
                        journey I'm excited and can't wait to keep going!
                        </p>

                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <p>Outside of work I love football, Hull City being my team (one of those really), and anything that helps to relax after a few hours trying to de-bug something! Reading is a simple pleasure of mine, I dont tie myself to
                        any genres in particular. Going to the gym helps with de-stressing, and even a walk round Victoria Park on a nice evening is good for the soul. I was big into road racing at one point, but I didn't bring my back to
                        London with me, I'm hoping I can pick this up again or maybe even ride to my new place of work :) I am hoping to put my New Zealand passport to good use at some point, but having only just moved to London this year I feel there
                            is quite a lot more to explore before going elsewhere... Would quite like to get invovled with some Dev meet-ups when things get back to 'normal', if you know of any do pass them on! </p>
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;