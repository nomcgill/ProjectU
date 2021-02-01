
import { jsPDF } from "jspdf";

import {style} from './pdfstyling'

export const generatePDF = (state) => {
    var pdf = new jsPDF();
    let text = (divType, x, y, input) => {
        // console.log(divType, x, y, input)
        pdf.setFontSize(style[divType].size)
        pdf.text(x, y, input)
    }

    // console.log(state)

    let info = [
        "Some info",
        "Wow some more info too"
    ]

    for (let i=0; i < state.currentSkills.length; i++){
        let Yplacement = 20*i + 20

        let skillName = state.currentSkills[i].name

        text("header", 20, Yplacement, skillName)
        text("body", 140, Yplacement, skillName)
    }

    // text("header")
    // text("body")

    pdf.save('TestingTesting')

    // console.log(pdf)







    // console.log(state)
    
    // (doc, divType, input)
    // text("body")
    // text(doc, "body", "Some text goes here." )



    // doc.setFontSize(40);
    // doc.text("Octonyan loves jsPDF", 35, 25);
    // doc.save('TestingTesting')
    // doc.addImage("examples/images/Octonyan.jpg", "JPEG", 15, 40, 180, 180);
}