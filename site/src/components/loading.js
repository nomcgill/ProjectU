import React from 'react'

import './loading.css'

export default function Loading(props) {

    setTimeout(function(){ 
        if (document.getElementById('loading-bar')){
            document.getElementById('loading-bar').classList.add('slide-in') 
        }
    }, 1000);

    setTimeout(function(){ 
        let loadingLabel = document.getElementById('loading-label')
        if (loadingLabel){
            loadingLabel.innerHTML = 'Attempt to connect failed. Try refreshing this page.'
        }
    }, 10000);

    return (
        <div id={'loading-page'}>
            <div id={'loading-box'}>
                <h2 id={'loading-label'}>Loading Overstep database...</h2>
                <div id={'loading-bar'} />
            </div>
        </div>
    );
}
