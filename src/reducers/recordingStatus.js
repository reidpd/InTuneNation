import initialState from './initialState';

const recordingStatusReducer = (state = initialState.recordingStatus, action) => {
  switch (action.type) {
    case 'TOGGLE_AUDIO_CAPTURE':
      return !state;
    case 'EXERCISE_FINISHED':
      return initialState.recordingStatus;
    case 'RESET_INTERFACE':
      return initialState.recordingStatus;
    default:
      return state;
  }
};

export default recordingStatusReducer;
