
import React from 'react'

export default function RollHistory(props) {
    // console.log(props.rollHistory)

    if (props.rollHistory.length > 0 && document.getElementById('prior-roll')){
        document.getElementById('prior-roll').classList.add('prior-roll')
    }
    else if (document.getElementById('prior-roll')){
        document.getElementById('prior-roll').classList.remove('prior-roll')        
    }

    function translateRoll(index, targetRollStat){
        if (props.rollHistory.length > index){
            let theRoll = props.rollHistory[index]
            // debugger;
            if (targetRollStat === "chosenRoll"){
                return theRoll.chosenRoll
            }
            if (targetRollStat === "actionStatus"){
                return theRoll.actionStatus
            }
        
        }
        else {
            return '--'
        }
    }

    return (

        <div id={'prior-roll'}>
            <div id={'prior-roll-head'}>Prior Roll</div>
            {/* <div id={'prior-roll-number'}>{translateRoll(0, "chosenRoll")}</div> */}
            <div id={'prior-roll-result'}>{translateRoll(0, "actionStatus")}</div>
        </div>
    )
}