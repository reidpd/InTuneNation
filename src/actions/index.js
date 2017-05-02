import axios from 'axios';

export const currentNote = (note) => {
  return {
    type: 'CURRENT_NOTE',
    payload: note,
  };
};

export const pushKeyEventToArray = (noteObj) => {

  return {
    type: 'ADD_KEY_EVENT',
    payload: noteObj,
  };
};

export const toggleCapture = () => {
  return {
    type: 'TOGGLE_CAPTURE',
  };
};

export const signUserUp = (email, firstName, lastName, password) => {
  return {
    type:'USER_SIGN_UP',
    payload: {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
    }

  };
};

export const logUserIn = (email, password) => {
  return {
    type: 'USER_LOG_IN',
    payload: {
      email,
      password,
    }
  };
};

export const shiftOctaves = (direction) => {
  return {
    type: 'SHIFT_OCTAVES',
    payload: direction,
  };
};

export const toggleAudioCapture = () => {
  return {
    type: 'TOGGLE_AUDIO_CAPTURE',
  };
};

export const incrementGreenTime = () => {
  return {
    type: 'INCREMENT_GREEN_TIME',
  };
};

export const resetGreenTime = () => {
  return {
    type: 'RESET_GREEN_TIME',
  };
};

export const changeGreenTimeRequirement = (amount) => {
  return {
    type: 'CHANGE_GREEN_TIME_REQUIREMENT',
    amount,
  };
};

export const decrementScore = (amount) => {
  return {
    type: 'DECREMENT_SCORE',
    amount,
  };
};

export const resetScore = () => {
  return {
    type: 'RESET_SCORE',
  };
};

export const setKeyEventAsTargetNote = (keyEvent) => {
  return {
    type: 'SET_KEY_EVENT_AS_TARGET_NOTE',
    payload: keyEvent,
  };
};

export const setSungNote = (note) => {
  return {
    type: 'SET_SUNG_NOTE',
    payload: note,
  };
};

export const incrementTargetNoteIndex = () => {
  return {
    type: 'INCREMENT_TARGET_NOTE_INDEX',
  };
};

export const resetTargetNoteIndex = () => {
  return {
    type: 'RESET_TARGET_NOTE_INDEX',
  };
};

export const pushScoreToExerciseScoresArray = (score) => {
  return {
    type: 'PUSH_SCORE_TO_EXERCISE_SCORES_ARRAY',
    payload: score,
  };
};

export const fetchAllPastInstancesOfOneExercise = (userId, exId) => {
  const API_URL = `http://api/users/${userId}/exercises/${exId}/scores`; // add url when deployed!!
  return axios.get(API_URL).then((response) => { return response.json(); });
};

export const getAllPastInstancesOfOneExercise = (userId, exId) => {
  const data = fetchAllPastInstancesOfOneExercise(userId, exId);
  return {
    type: 'GET_ALL_PAST_INSTANCES_OF_ONE_EXERCISE',
    payload: data,
  };
};

// router.get('/users/:userId/exercises/:exId/scores', (req, res, next) => {
//   knex('scores')
//     .select()
//     .where({
//       user_id: req.params.userId,
//       exercises_id: req.params.exId
//     })
//     .then((user_scores) => {
//       res.json(user_scores);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
