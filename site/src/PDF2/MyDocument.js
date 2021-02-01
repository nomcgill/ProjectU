
import React from 'react'
import ReactDOM from 'react-dom';

import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

import {style} from './pdfstyle'
import PdfSkill from './PdfSkill'

import font from '../../src/ImageStore/Poppins/Poppins-Medium.ttf'
import boldFont from '../../src/ImageStore/Poppins/Poppins-Bold.ttf'
import italicFont from '../../src/ImageStore/Poppins/Poppins-Italic.ttf'
import thinFont from '../../src/ImageStore/Poppins/Poppins-Light.ttf'

export default function MyDocument(props) {

    // console.log(props)
    const styles = StyleSheet.create(style);
    let hexColorCodes = props.data.database.hexColorCodes

    Font.register({ family: 'Poppins', src: font });
    Font.register({family: 'Poppins-heavy', src: boldFont})
    Font.register({family: 'Poppins-italic', src: italicFont})
    Font.register({family: 'Poppins-thin', src: thinFont})
    Font.registerHyphenationCallback(word => [word]);

    // Skills per page at the end
    let skillPageCount = Math.ceil(props.data.currentSkills.length / 8)
    let blankPageArray = []
    for (let i=0; i<skillPageCount; i++){
        blankPageArray.push(1)
    }

    let skills = (pageNumber) => props.data.currentSkills.map((skill, count) => {
        // skills per page at 3 places
        let rangeMin = pageNumber * 8 + 1
        let rangeMax = pageNumber *8 + 8
        if (rangeMax >= count && count >= rangeMin){
            return (
                <PdfSkill 
                    key={count}
                    skill={skill}
                    role={props.data.role}
                    source={props.data.source}
                    intersection={props.data.intersection.title}
                    hexColorCodes={hexColorCodes}
            />)            
        }

    })

    let skillsPages = blankPageArray.map((blank, count) => {
        // console.log(count)

        return (
            <Page key={count} size={"LETTER"} style={styles.page} wrap={false} orientation={'landscape'}>
                <View style={[styles.section, styles.row, styles.column]}>
                    <View style={styles.column}>
                        {skills(count)}
                    </View>
                </View>
            </Page>
        )
    })
        

    return (
        <Document>
            {skillsPages}

            {/* <Page size="A4" style={styles.page} >
                <View style={styles.section}>
                    <Text>Section #2</Text>
                </View>
            </Page> */}
        </Document>
    )
}
