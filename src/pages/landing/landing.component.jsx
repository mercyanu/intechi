import React from 'react';
import './landing.styles.scss';

import MainListing from '../../components/main-listing/main-listing.component';
import JOB_DATA from '../../data.json';

class LandingPage extends React.Component {

    constructor (props){
        super(props);

        this.state = {
            job_listing: JOB_DATA
        }
    }

    render() {
        const { job_listing} = this.state;
        return (   
            <div className='parent-container'>    
                <div className='header'></div>    
                <MainListing listing={job_listing}/>
            </div>
            )
        
        }
} 


export default LandingPage;