import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleAudioCapture, singButton, resetState, resetInterface, repeatExercise } from '../../actions';
import Tone from '../../../tone-js/tone';

const mapStateToProps = (state) => {
  return {
    resetDisabled: (state.captureReducer.resetDisabled === 'disabled'),
    singText: state.singButtonReducer.singText,
    singDisabled: (state.singButtonReducer.disabled === 'disabled'),
    captureDisabled: (state.captureReducer.disabled === 'disabled'),
    captureText: state.captureReducer.captureText,
    keyEvents: state.keyEventsReducer,
    recordingStatus: state.recordingStatusReducer,
  };
};

const mapDispatchToProps = (dispatch) => { return bindActionCreators({ toggleAudioCapture, singButton, resetState, resetInterface, repeatExercise }, dispatch); };

class SingButtons extends Component {
  constructor(props) {
    super(props);
    this.synth = new Tone.Synth().toMaster();
  }

  handleResetClick = () => { this.props.resetInterface(); }

  handleSingClick = () => {
    if (this.props.keyEvents.length > 0) { this.props.repeatExercise(); }
    this.props.toggleAudioCapture();
    this.props.singButton();
  }

  handleStartingNoteClick = () => {
    if (!this.props.recordingStatus) {
      const tone = this.props.keyEvents[0].tNote.toUpperCase();
      this.synth.triggerAttackRelease(tone, 0.65);
    }
  }

  // handlePlayExerciseClick = () => {
  //   if (!this.props.recordingStatus) {
  //     const firstNote = this.props.keyEvents[0].tNote.toUpperCase();
  //     let chain = this.synth.triggerAttackRelease(firstNote, 0.65, 0);
  //     for (var i = 1; i < this.props.keyEvents.length; i++) {
  //       let newNote = this.props.keyEvents[i].tNote.toUpperCase();
  //       chain = chain.setNote(newNote, "+4n");
  //     }
  //     chain;
      // this.props.keyEvents.forEach((keyEvent, index) => {
      //   const tone = keyEvent.tNote.toUpperCase();
      //   this.synth.triggerAttackRelease(tone, 0.5);
      //   // notes.push(instanceFn);
      // });
      // notes.forEach((fn) => { fn(); });
    // }
  // }

  getSingDisabled = () => {
    if (this.props.captureDisabled) {
      if (!this.props.recordingStatus) { return ''; } else { return 'disabled'; }
    } else {
      return 'disabled';
    }
  }

  startingNoteDisable = () => {
    if (this.getSingDisabled() === 'disabled') { return 'disabled' } else { return ''; }
  }

  render() {
    return (
      <div className="sing-button-collection">
        {/* <div className="col-md-12">
          <button id="play-exercise-button" onClick={this.handlePlayExerciseClick} className="btn btn-lg active sing-buttons" disabled={this.getDisabled()}>PLAY EXERCISE</button>
        </div> */}
        <div className="col-lg-10 col-md-4 col-sm-4 col-xs-4 singButtonBackground">
          <button onClick={this.handleStartingNoteClick} id="starting-note-button" className="btn btn-lg active sing-buttons" disabled={this.startingNoteDisable()}>START {String.fromCharCode(9834)}</button>
        </div>
          <div className="col-lg-10 col-md-4 col-sm-4 col-xs-4 singButtonBackground">
            <button id="sing-button" onClick={this.handleSingClick} className="btn btn-lg active sing-buttons" disabled={this.getSingDisabled()}>{this.props.singText}</button>
          </div>
          <div className="col-lg-10 col-md-4 col-sm-4 col-xs-4 singButtonBackground">
            <button onClick={this.handleResetClick} className="btn btn-lg active sing-buttons" disabled={this.props.resetDisabled} >RESET</button>
          </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(SingButtons);
