
import React from 'react'
import ReactDOM from 'react-dom';

import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
// import { Font } from '@react-pdf/renderer'

import {style} from './pdfstyle'


export default function MyDocument(props) {

    const styles = StyleSheet.create(style);

    let skill = props.skill
    let role = props.role
    let source = props.source
    let intersection = props.intersection
    let category = skill.category
    let categoryLabel =
        category === "Source" ? source :
        category === "Role" ? role :
        category === "Intersection" ? intersection :
        false
    let arrow = categoryLabel ? ' >' : false
    let hexColorCodes = props.hexColorCodes
    // console.log(hexColorCodes)
    // debugger;
    let colorDesignate = 
        hexColorCodes && category === "Source" ? source :
        hexColorCodes && category === "Role" ? role :
        hexColorCodes && category === "Intersection" ? "Intersection" :
        false
    let colorDesignateClean = colorDesignate.replace(/\s/g, '');
    let colorCode = 
        colorDesignate === "Intersection" ? "000000" : 
        colorDesignate ? hexColorCodes[colorDesignateClean] : 
        "696969"

    let name = <Text style={styles.skillTitle}>{skill.name}</Text>
    let descriptors = <Text style={[styles.paragraph, style.skillParagraph, {marginTop: -5}]}>{skill.action}{arrow} {skill.skillLevel}</Text>
    let categoryTag = <Text style={[styles.paragraph, styles.skillCategory]}>{categoryLabel}</Text>
    let flavor = skill.flavor.length > 1 ? <Text style={[styles.paragraph,  styles.skillParagraph, styles.skillFlavor]}>{skill.flavor}</Text> : false
    let impact = <Text style={[styles.paragraph, styles.skillParagraph]}>{skill.impact}</Text>

    if (skill){
        return (
            <View style={[styles.skillBox, { borderColor: "#" + colorCode}]}>
                <View style={[styles.skillHeadPane, {backgroundColor: "#" + colorCode}]}>
                    {name}
                    {descriptors}
                    {categoryTag}
                </View>
                <View style={styles.skillBody}>
                    {flavor}
                    {impact}
                </View>
            </View>
        )
    }

}