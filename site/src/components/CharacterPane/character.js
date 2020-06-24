import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
    NavLink,
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import TitlePane from './TitlePane'
import TrackingPane from './TrackingPane'
import EditingPane from './EditingPane.js'

import Arrow from '../../ImageStore/fliparrow.png'
import './character.css'

import { characterPaneUpdate } from '../../actions'


export class Character extends React.Component {

  // componentDidMount(){
  //     this.props.dispatch(characterPaneUpdate(true))
  //     // .then(() => {
  //       console.log(this.props.navBar)
  //       // this.conditionalLink(navBar)
  //     // })

  //   // this.props.dispatch(characterPaneUpdate())
  //   // this.conditionalLink()
  // }

  // conditionalLink(){
  //   if (document.getElementById('character-title-pane')){
  //       console.log(document.getElementById('character-title-pane'))
  //     return '/final/tracking'
  //   }
  //   else {
  //       console.log(document.getElementById('character-title-pane'))
  //     return '/final/title'
  //   }
  //   // console.log("running")    
  //   // return document.getElementById('character-title-pane') ? '/final/tracking' : '/final/title'
  // }



  render() {
    // this.conditionalLink()

    // const toggleArrows = () => {

    //   if (document.getElementById('character-title-pane')){

    //       <Link to={`/final/tracking`}>
            // <div id={'arrow-box'} className={'character-pane-box'}>
            //   <img id={'flip-arrow'} src={Arrow} />
            // </div>
    //       </Link>
        
    //   }

    //   if (document.getElementById('character-tracking-pane')){
    //       <Link to={`/final/title`}>
    //         <div id={'arrow-box'} className={'character-pane-box'}>
    //           <img id={'flip-arrow'} src={Arrow} />
    //         </div>
    //       </Link>
    //   }
    // }
    // let variable = this.props
    // debugger;
    return (
      // <Router>
          <div id={'character-pane'} className={'aware'}>
            {/* <Redirect exact from="/final" to="/final/title" /> */}
                <Route 
                    // exact
                    path="/final/title"
                    render={() => 
                        <TitlePane
                          name={this.props.name}
                          source={this.props.source}
                          role={this.props.role}
                          level={this.props.level}
                          title={this.props.title}
                        />
                    }
                />
                <Route
                  // exact
                  path={["/final/tracking",'/rolling']}
                  render={() =>
                    <TrackingPane
                    />
                  }
                />
                <Route
                  path="/editing"
                  render={() =>
                    <EditingPane
                    />
                  }
                />
            {/* <Link to={this.conditionalLink()}>
              <div id={'arrow-box'} className={'character-pane-box'}>
                <img id={'flip-arrow'} src={Arrow} />
              </div>
            </Link> */}
          </div>
      // </Router>
      );
  }
}

const mapStateToProps = state => ({
  source: state.source,
  role: state.role,
  intersection: state.intersection,
  level: state.level,
  name: state.name,
  navBar: state.navBar,
  title: state.title
});

export default connect(mapStateToProps)(Character);