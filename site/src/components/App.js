import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import GSheetReader from 'g-sheets-api'

import Loading from './loading'
import Nav from './nav';
import Character from './CharacterPane/character';
import Main from './main';

import {fetchProjectU} from '../actions'

export class App extends React.Component {

  // componentDidMount(){
  //   console.log('database conjured')

  //   if (!this.props.database){
  //     console.log('database conjured')
  //     this.conjuringDatabase()
  //   }
  // }

  conjuringDatabase(){
  //       // https://github.com/bpk68/g-sheets-api#readme

  //       const options = {
  //         sheetId: '1fGsKaEtVgPg-T40KW_drtFQ6schm5rCmRL_APYt8gw4',
  //         sheetNumber: 2,
  //         returnAllResults: true,
  //       }
  //       const promise1 = new Promise((resolve, reject) => {
  //         GSheetReader(options, results => {
  
  //             resolve(results);
  //         });
  
  //       });
  //       promise1.then((googleSheet) => {
  //         //grabbed from Google Sheets?
  //         let fetched = googleSheet.length > 0 ? true : false
  //         if (!fetched){
  //             alert('Failed to fetch from Google Sheets!')
  //         }
  //         // console.log(googleSheet[0])
  //         // console.log(googleSheet[1])
  //         // console.log(googleSheet[2])
  //         // console.log(googleSheet[3])
  //         //combine separately fetch objects into one object
  //         let combinedFetch = [{}]
  //         for (let i=0; i < googleSheet.length; i++){
  //             let last = combinedFetch.length - 1
  //             let newCombination = {...combinedFetch[last], ...googleSheet[i]}
  //             console.log(combinedFetch)
  //             combinedFetch.push(newCombination)
  //         }
  //         let last = combinedFetch[combinedFetch.length - 1]
  //         // console.log(last)
  //         //capitalize the keys
  
  //       });

        this.props.dispatch(fetchProjectU());
  }


  render() {

    const promise1 = new Promise((resolve, reject) => {
      if (!this.props.database){
        console.log('loading database...')
        resolve(
            this.conjuringDatabase()          
        );
      }
      else {
        resolve(
          console.log('database loaded')
        )
      }
    });
    
    promise1.then((value) => {
      // console.log(value);
    });
    


    if (!this.props.database){
      return (
        <div id={'page'}>
          <Loading />
        </div>
      )
    }

    else {
      return (
        <Router>
          <Switch>
            <Redirect exact path='/' to='/editing/role' />
            <div id={"page"}>
                <div id={"fixed-top"}>
                  {/* <div id={"background-top-bar"}>
                    <div id={"background-nav-bar"} />
                    <div id={"background-character-bar"}/>
                  </div> */}
                  <Nav />
                  <Character />
                </div>
                <div id={"background-top-bar"}>
                    <div id={"background-nav-bar"} />
                    <div id={"background-character-bar"}/>
                </div>
                <div id={'back-pane'} />
                {/* <div id={"dimmer"}/> */}
                <Main
                  savedActionTab={this.props.savedActionTab}
                />
            </div>
          </Switch>
        </Router>
      )
    }
  }
}

const mapStateToProps = state => ({
  hitpoints: state.hitpoints,
  database: state.database,
  savedActionTab: state.savedActionTab
});

export default connect(mapStateToProps)(App);

