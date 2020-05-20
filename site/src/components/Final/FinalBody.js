import React from 'react'
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import FinalItem from './FinalItem'

export default function FinalBody(props) {

    // const navsteps = steps.map(step =>
    //     <li key={step+"1"} id={step + "-nav"}>
    //         <NavLink 
    //             to={`/editing/${step}`} 
    //             activeClassName={"highlight-nav"}
    //         >
    //             {capitalize(step)}
    //         </NavLink>
    //     </li>
    // )

    // console.log(props)

    const shownSkills = props.shownSkills.map((skill, key) => 
        <FinalItem
            skill={skill}
            toggleFavorite={props.toggleFavorite}
            key={key}
        />
    )


    return (
        <div id={'final-body'}>
            <div id={'skills-header'}>
                <h2>SKILLS</h2>
                <Link to={'/editing/skills/roleskillschoice'}>
                    <p id={'manage-skill-choices'}>Manage</p>
                </Link>
            </div>
            {shownSkills}
        </div>
    )
}
