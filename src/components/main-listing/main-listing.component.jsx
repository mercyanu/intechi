import React from "react";
import './main-listing.styles.scss';
import ListItem from '../list-item/list-item.components';
import FilterList from '../filter/filter-component';

const MainListing = ({listing}) => {
    return(
        <div className='container'>
            <div class='heading'>
                <h2>Jobs around you</h2>
                <FilterList/>
            </div>
            {
                listing.map( job => 
                (<ListItem key={job.id} job={job}/>))
            }
        </div>
    );
}

export default MainListing;