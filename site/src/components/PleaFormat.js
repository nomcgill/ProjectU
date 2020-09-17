import React from 'react'
import pleaformat from './pleaformat.css'

export default function PleaFormat(props) {

    let plea = props.plea
    let actionClass = plea.action !== "Passive" ? "plea-action orange" : 'plea-action'
    let editSection = props.edit ? 'plea-section plea-edit' : 'plea-section'

    return (
        <div className={editSection}>
            <p><span className={'plea-name'}>{plea.name}</span> (<span className={actionClass}>{plea.action}</span>) = {plea.impact}</p>
        </div>
    )

}