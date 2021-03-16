import React from "react";
import './main-listing.styles.scss';
import ListItem from '../list-item/list-item.components';

const MainListing = ({listing}) => {
    return(
        <div className='container'>
            <h2>Jobs around you</h2>
            {
                listing.map( job => 
                (<ListItem key={job.id} job={job}/>))
            }
        </div>
    );
}

export default MainListing;