import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Popup from '../../../Popup/Popup'
import GeneratePDF from '../../../GeneratePDF'
import Homebrewed from '../../../Final/homebrewed'

import {generatePDF} from '../../../../PDF/PDF'

import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";

// import { action } from '../actions'

export class FinishPage extends React.Component {

    render(){
    // console.log("finish loaded")

        function pdfClick(input){
            let elementPopup = document.getElementById(input)
            elementPopup.classList.remove('hidden')
        }
    
    // function pdfclick(){
    //     const input = document.getElementById('main-container');
    //     if (input){
    //         let hidden = false

    //         const promise1 = new Promise((resolve, reject) => {
    //             if (input.classList.contains('hidden')){
    //                 input.classList.remove('hidden')
    //             }
    //             resolve();
    //         });  
    //         promise1.then(() => {
    //             if (!input.classList.contains('hidden')){
    //                 console.log(hidden)
    //                 html2canvas(input)
    //                 .then((canvas) => {
    //                     const imgData = canvas.toDataURL('image/png');
    //                     const pdf = new jsPDF();
    //                     pdf.addImage(imgData, 'PNG', 0, 0);
    //                     pdf.save("download.pdf");  
    //                 });
    //             }
    //             else { console.log('ERROR: div was hidden!')}
    //         }).then(()=>{
    //             if (hidden){
    //                 input.classList.add('hidden')
    //             }
    //         })
    //     }
    //     else {
    //         console.log("couldn't find ID!")
    //     }
    // }

        let name = this.props.name ? this.props.name : "Your nameless Hero"

        return (
            <div className={"choice-page"} id={'finish-page'}>
                <div className="choice-header-box">
                    <h2>{name} is ready for adventure! Are you?</h2>
                </div>
                <p id={'finish-page-description'}>Save your Champion using the "Save" button above. Make sure not to lose the spawned 24-digit code so that you can find them again!</p>
                <GeneratePDF />
                {/* <Homebrewed /> */}
                {/* <div id={'create-pdf-button'} onClick={()=> pdfClick('popup-pdf')}>
                    Create PDF Character Sheet (not yet available)
                </div> */}
                {/* <Popup 
                    popupContent={
                        <GeneratePDF 
                            elementId={''}
                            rolesource={''}
                        />
                    }
                    popupId={'popup-pdf'}
                    popupClass={''}
                    // popupClass={'pdf-popup'}
                /> */}
                <Link to={'/final/title'} className={'next-button-link'}>
                    <h2 id={'character-view-button'}>
                        VIEW CHARACTER
                    </h2>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    state: state
});

export default connect(mapStateToProps)(FinishPage);