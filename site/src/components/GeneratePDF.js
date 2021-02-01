import React from 'react'
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

// import {generatePDF} from '../PDF/PDF'

import MyDocument from '../PDF2/MyDocument'
import Homebrewed from './Final/homebrewed'

// Rendingering in DOM
// import { PDFViewer } from '@react-pdf/renderer';
// saving directly
import ReactPDF from '@react-pdf/renderer';
import { pdf } from '@react-pdf/renderer';


import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

export class GeneratePDF extends React.Component {

    componentDidMount(){
        // this.renderPDF(this.props.state)
    }

    renderPDF(state){

        const saveBlob = (blob, filename) => {
            var a = document.createElement("a");
            document.body.appendChild(a);
            a.style.display = "none";
            let url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = filename;
            a.click();
            window.URL.revokeObjectURL(url);
        };
          
        const savePdf = async (document, filename) => {
            saveBlob(await pdf(document).toBlob(), filename);
        };

        var str = this.props.state.name;
        let fileName = str.replace(/\s+/g, '_').toLowerCase() + ".pdf";

        savePdf(
            <MyDocument data={state} />, 
            fileName
        )   
    }


    render(){

        // const styles = StyleSheet.create({
        //     page: {
        //       flexDirection: 'row',
        //       backgroundColor: '#E4E4E4'
        //     },
        //     section: {
        //       margin: 10,
        //       padding: 10,
        //       flexGrow: 1
        //     }
        //   });



          
          // Create Document Component
        //   const MyDocument = () => (
        //     <Document>
        //       <Page size="A4" style={styles.page}>
        //         <View style={styles.section}>
        //           <Text>Section #1</Text>
        //         </View>
        //         <View style={styles.section}>
        //           <Text>Section #2</Text>
        //         </View>
        //       </Page>
        //     </Document>
        //   );


        // const App = () => (
        //     <PDFViewer>
        //       <MyDocument />
        //     </PDFViewer>
        // );
        
        // const renderWhat = document.getElementById('generate-pdf-component')

        return (
            <div id={'generate-pdf-component'}>
                <Homebrewed />
                <h1>PDF-Generator (Alpha)</h1>
                <button onClick={()=> this.renderPDF(this.props.state)}>Generate PDF</button>
                
                {/* <button onClick={()=> generatePDF(this.props.state)}>Generate PDF</button> */}
            </div>
        )
    }
}

    const mapStateToProps = state => ({
        state: state
    });
    
    export default connect(mapStateToProps)(GeneratePDF);