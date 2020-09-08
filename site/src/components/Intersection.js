import React from 'react'
import Item from './Item.js'

export default function Intersection(props) {

    const items = props.intersection.traits.map((item, count) =>
        <Item 
            id={"intersection-info"}
            key={"intersection-" + count}
            class={"info none intersection-item intersection-item-" + count}
            count={count}
            info={item}
        />
    )

    function toggleDetails(){
        document.getElementById("intersection-plus").classList.toggle("none")
        document.getElementById("intersection-minus").classList.toggle("none")
        document.getElementById("intersection-line").classList.toggle("gray")
        document.getElementById("intersection-line").classList.toggle("whited")
        document.getElementById("intersection-box").classList.toggle("open-box")     
        let relevant = document.getElementsByClassName("intersection-item")
        for ( let i=0;i<relevant.length;i++){
            relevant[i].classList.toggle("none")
        }
    }

    return (
        <div id={"intersection-box"} className={"skillbox"}>
            <div 
                id={"intersection-line"} 
                className={"plus whited skill-top"}
                onClick={() => toggleDetails()}
            >
                <h3>Intersection: {props.intersection.title}</h3>
                <h3 id={"intersection-plus"}>+</h3>
                <h3 id={"intersection-minus"} className={"none"}>-</h3>
            </div>
            {items}
        </div>
    );
}
