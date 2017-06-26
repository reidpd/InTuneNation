import React, { Component } from 'react';
import { Thumbnail, Col, Row, Grid } from 'react-bootstrap';
import C3Chart from 'react-c3js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import 'c3/c3.css';
import profileImg from '../../assets/img/profile-img.png';
import {
  loadPastExercisesData,
  postSignUp,
  postLogIn,
  renderNavBar,
  googleOauth,
  startload,
  averageArr
} from '../../actions';
import Table from '../table/table';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { Link } from 'react-router-dom';
import rd3 from 'react-d3';
import { BarChart } from 'react-d3/barchart';
import { noteName } from '../table/table.js'

const mapStateToProps = (state, ownProps) => ({
  user: state.loginReducer,
  graphData: state.graphDataReducer,
  graphDataBarGraph: state.barGraphgraphDataReducer,
  googleOauthState: state.googleOauthReducer,
  list: state.dashboardReducer,
  notesLine: state.graphDataReducer,
  notesBar: state.barGraphgraphDataReducer
});

let profile_picture;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadPastExercisesData,
    startload,
    postSignUp,
    postLogIn,
    renderNavBar,
    googleOauth,
    startload,
    averageArr
  }, dispatch);
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: ''
    };
  }

  componentDidMount = () => {
    let token = localStorage.getItem('token');
    let id = localStorage.getItem('userId');
    let firstName = localStorage.getItem('firstName');
    let lastName = localStorage.getItem('lastName');
    let email = localStorage.getItem('email');

    if (localStorage.getItem('profile_picture') !== "undefined") {
      profile_picture = localStorage.getItem('profile_picture').substring(0, localStorage.getItem('profile_picture').length - 2) + '200';
    } else {
      profile_picture = profileImg;
    }

    let obj = {
      token: token,
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      profile_picture: profile_picture.substring(0, profile_picture.length - 2) + '200'
    }
    this.props.googleOauth(obj);
    this.props.loadPastExercisesData(obj.id);
  }

  convertArr = (arr) => {
    this.props.averageArr(arr);
  }

  graph = () => {
    if (this.props.graphData === null) {
      return <div></div>;
    } else if (this.props.graphData.length !== 0 && this.props.graphDataBarGraph !== null) {

      return <div className="graphBackGround">
        <div className="center-warning graphBack">
          <C3Chart data={{
            unload: true,
            x: 'x1',
            columns: [
              [
                'x1', ...this.props.notesLine.notes
              ],
              ...this.props.graphData.columns
            ]
          }} axis={this.props.graphData.axis} title={{
            text: 'InTuneNation Scores'
          }}/>
        </div>
        <div className="center-warning">
          <C3Chart data={{
            unload: true,
            x: 'x1',
            columns: [
              [
                'x1', ...this.props.notesBar.notes
              ],
              [
                'Note Name', ...this.props.graphDataBarGraph.columns
              ]
            ],
            type: 'bar'
          }} title={{
            text: 'Average InTuneNation Scores'
          }} bar={{
            width: {
              ratio: 0.5
            }
          }} axis={this.props.graphDataBarGraph.axis}/>
        </div>

      </div>
    } else {
      return <div className="center-warning">
        <Link to="/interface" onClick={this.insertExToRedux}>
          <a className="thumbnail" style={{
            'background': '#e6ecff'
          }}>
            <h3>No scores logged. Please go back to the interface page and Sing! 😉
            </h3>
          </a>
        </Link>
      </div>
    }
  }

  render() {
    return (
      <div id="profileBackground">
        <div id="profile-container" className="container">
          <div className="row">
            <div className="col-md-2 col-xs-2">
              <div className="thumbnailSection">
                <div className="thumbnail">
                  <img id="profile-pic" src={profile_picture} alt=".."/>
                  <div className="caption">
                    <h3>{this.props.googleOauthState.firstName} {this.props.googleOauthState.lastName}</h3>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div className="col-md-8 col-xs-8">
              <div className="pastExercise"></div>
              <div>
                <Table/>
              </div>
              <br/>
            </div>
            <div className="col-md-2 col-xs-2">

              <div className="popover right static-popover profile-right" id="right-pointer">
                <div className="arrow"></div>
                <h3 className="popover-title poptitle"> 🎶  &nbsp; 🎵 &nbsp; 🎶 </h3>
                <div className="popover-content">
                  <span>Click on a row to display its graph</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-xs-2"></div>
            <div className="col-md-8 col-xs-8">
              {this.graph()}
            </div>
            <div className="col-md-2 col-xs-2"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
