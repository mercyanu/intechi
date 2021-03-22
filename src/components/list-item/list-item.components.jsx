import React from 'react';

import './list-item.styles.scss';
import Logo from '../../images/faceit.svg';

const ListItem = ({job}) => {

    const { company, logo, new:newJob, featured, position, role, level, postedAt, contract, location, languages, tools } = job;

    return(
    <div className='item-container'>
        <div className='item-sect-1'>
            <div className='img-container'>
                <img src={Logo}/>
            </div>
            <div className='info-1'>
                <div className='info-2'>
                    <span className='company-name'>{company}</span>
                    { newJob ? <span className='new'>NEW</span> : null }
                    { featured ? <span className='featured'>FEATURED</span> : null }
                </div>
                <div className='role'>{position}</div>
                <div className='info-3'>
                    <span>{postedAt}</span> |
                    <span> {contract}</span> |
                    <span> {location}</span>
                </div>
            </div>
        </div>
        <div className='info-4'>
            <div><span><p>{role}</p></span></div>
            <div><span><p>{level}</p></span></div>
            {
                languages.map(language => (
                    <div><span><p>{language}</p></span></div>))
            }
            {
                tools.map(tool => (
                    <div><span><p>{tool}</p></span></div>))
            }
        </div>
    </div>
    )
}

export default ListItem;