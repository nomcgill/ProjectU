import React from 'react'
import {connect} from 'react-redux';

import NextButton from '../NextButton.js'
import IntersectionInfo from './IntersectionInfo'

import './intersectionpage.css'

import { updateSkillsFromIntersection, updateIntersection } from '../../../actions'

export class IntersectionPage extends React.Component {


    componentDidMount(){
        let intersectionSkills = this.props.currentSkills ? this.props.currentSkills.filter(skill => skill.category === "Intersection") : false
        let dashedSkillNames = intersectionSkills ? intersectionSkills.map(skill => skill.name.replace(/ /g, "-")) : false
        if (dashedSkillNames) {
            this.updateVisuals(dashedSkillNames)
        }
    }

    updateSkills(selectedSkills){

        const promise1 = new Promise((resolve, reject) => {
            // console.log(selectedSkills)
            resolve(
                this.props.dispatch(updateSkillsFromIntersection(selectedSkills, this.props.currentSkills, this.props.database))
            );
          });
          
        promise1.then(() => {
                    // console.log(' ')
            let intersectionSkills = this.props.currentSkills.filter(skill => skill.category === "Intersection")
            let dashedSkillNames = intersectionSkills.map(skill => skill.name.replace(/ /g, "-"))
            this.updateVisuals(dashedSkillNames)
            // console.log(this.props.currentSkills);
        });
            // expected output: "Success!"

    }

    updateVisuals(dashedSkillNames){
        let itemContents = document.getElementsByClassName('intersection-item-content')
        // console.log(itemContents)
        Array.from(itemContents).forEach(item=> {
            // if (
                // console.log(dashedSkillNames)
                item.classList.remove('selected-intersection')      
        })

        dashedSkillNames.forEach(skill=>{
            let skillId = skill + '-checkbox-div'
            document.getElementById(skillId).classList.add('selected-intersection')
        })
            // let checkboxId = item.id.substring(0, item.id.length - 4);
            // debugger;
            // if (document.getElementById(checkboxId).checked){
                // item.classList.add('intersection-item-content')
            // }
            // console.log(checkboxId)
            // console.log(item)
            // debugger;
            
        // item.classList.add('hello')

            // const allItems = document.getElementsByClassName('item')
        // console.log(allItems)
        // const allItemsArray = [...itemContents]
        // const chosenSkillTitles = []
        // const chosenDivs = []
        // allItemsArray.map((item) => {
        //     // console.log(allItemsArray)
        //     let singleInput = item.children[0]
        //     // console.log(singleInput.checked)
        //     if (singleInput.checked){
        //         console.log(item)
        //         // chosenDivs.push(item)
        //         // chosenSkillTitles.push(item.id)
        //         // allSelectedItemsArray.push(props.info)
        //     }
        // })
        // console.log(dashedSkillNames)
    }

    render() {

        // to remove highlight!
        const levelBox = document.getElementById("level-box")
        const skillsNumbers = document.getElementById("character-pane-skills-numbers")
        if (levelBox){
            if (levelBox.classList.contains("aware") == true){
                levelBox.classList.remove("aware")
                skillsNumbers.classList.add("hidden")
            }
        }

        function togglePaths(){
            // console.log("click")
            // document.getElementById("intersection-peek-plus").classList.toggle("hidden")
            // document.getElementById("intersection-peek-minus").classList.toggle("hidden")
            document.getElementById("intersection-peek-bar").classList.toggle("gray")
            document.getElementById("intersection-peek-bar").classList.toggle("whited")
            // document.getElementById("intersection-peek-box").classList.toggle("open-box")
            document.getElementById("intersection-content").classList.toggle("hidden")
        }

        let passed = this.props
        let intersections = passed.database.intersections
        let supposedIntersection = [passed.source, passed.role]
        let databaseIntersectionArray = []

        // Determine the intersection by matching choices with database combinations.
        intersections.forEach(intersection => {
            if (supposedIntersection[0] === intersection.combinations[1][0] && 
                supposedIntersection[1] === intersection.combinations[1][1]){
                    databaseIntersectionArray.push(intersection)
                }
            if (supposedIntersection[0] === intersection.combinations[2][0] && 
                supposedIntersection[1] === intersection.combinations[2][1]){
                    databaseIntersectionArray.push(intersection)
            }
        })


        // console.log(databaseIntersectionArray)
        let intersection = databaseIntersectionArray[0]
        this.props.dispatch(updateIntersection(intersection))
        // debugger;
        // console.log(intersection)

        // let intersection = 'Warlock'

        function startsWithVowel(word){
            return /[aeiou]/i.test(word[0]);
        }

        let aOrAn = (word) => startsWithVowel(word) === true ? 'an' : 'a'

        function header(){
            if (passed.level > 5 && passed.role && passed.source){
                return (
                    "As " + aOrAn(passed.role) + ' ' + passed.role + " who draws power from " + passed.source + " energies, you've gained the unique aptitudes of a " + intersection.title + "."
                )
            }
            else {
                return (
                    'At levels 6 and 11, Heroes have the choice of a unique skill based on the Intersection of your Role and Source.'
                )
            }
        }

        // "As a " + props.role + " who draws power from " + props.source + " energies, you've gained the unique aptitudes of a " + intersection + "."

        // THEY HAVE AN INTERSECTION
        if (passed.database && passed.role && passed.source && passed.level > 5){
            // console.log("have intersection")
            return (
                <div className={"intersection-page choice-page"}>
                    <div id={'intersection-header'}>
                        <h2>Intersection: {intersection.title}</h2>
                        <p>{passed.source} - {passed.role}</p>
                        <p id="intersection-headline">{header()}</p>
                    </div>
                        <div id={"intersection-content"} className={""}>
                                <IntersectionInfo 
                                    props={passed}
                                    intersection={intersection}
                                    updateSkills={(chosenSkillTitles) => this.updateSkills(chosenSkillTitles)}    
                                />
                        </div>
                    <NextButton next={passed.next} />
                </div>
            )
        }
        
        // THEY DON'T HAVE AN INTERSECTION BUT THEY'VE CHOSEN THEIR ROLE & SOURCE
        else if(passed.database && passed.role && passed.source && passed.level) {
            // console.log("don't have intersection")
            return (
                <div className={"intersection-page choice-page"}>
                    <div id={'intersection-header'}>
                        <h2>Intersection</h2>
                        <p>{passed.source} - {passed.role}</p>
                        <p id="intersection-headline">{header()}</p>
                    </div>
                        <div id={"intersection-peek-box"}>
                            <div id={"intersection-peek-bar"} className={"whited"} onClick={() => togglePaths()}>
                                <h2>Peek ahead?</h2>
                            </div>
                            <div id={"intersection-content"} className={"hidden"}>
                                <IntersectionInfo
                                    props={passed} 
                                    // currentSkills={passed.currentSkills}
                                    intersection={intersection}
                                    updateSkills={(chosenSkillTitles) => this.updateSkills(chosenSkillTitles)}
                                />
                            </div>
                        </div>
                    <NextButton next={passed.next} />
                </div>
            );
        }
        else {
            return (
                <div className={"intersection-page choice-page"}>
                    <div id={'intersection-header'}>
                        <h2>Intersection</h2>
                        <div className={'no-rolesource-notice'}>
                            <p>First, choose a Role and Source.</p>
                            <p id="intersection-headline">{header()}</p>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    // who: state.who,
    // // skills: state.skills,
    // intersection: state.intersection,
    role: state.role,
    source: state.source,
    database: state.database,
    // level: state.level,
    currentSkills: state.currentSkills
});

export default connect(mapStateToProps)(IntersectionPage);