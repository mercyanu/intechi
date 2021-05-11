import React from 'react';
import './filter.styles.scss';

const FilterList = () => (
    <div class='filter-container'>
        <span>Filters:</span>
        <div className='filter'>
            <span className='active-filter'>Frontend</span>
            <span>SQL</span>

        </div>
    </div>
);

export default FilterList;