import * as actionTypes from './actionsTypes';
import firebase from '../../config/fbConfig';
import axios from 'axios';

export const addBusiness = (data) => {
	return{
		type: actionTypes.ADD_BUSINESS,
		data: data
	}
}

export const switchBusinessTab = (id) => {
	return{
		type: actionTypes.SWITCH_BUSINESS_TAB,
		id: id	
	}
}

export const deleteBusiness = (id) => {
	return{
		type: actionTypes.DELETE_BUSINESS,
		id: id,
	}
}

export const addWorkingHours = (id) => {	
	return{
		type: actionTypes.ADD_WORKING_HOURS,
		id: id,
	}
}

export function fetchBusinessDataSuccess (userBusinesses) {
	    return{
	      type: actionTypes.FETCH_BUSINESSDATA_SUCCESS,
	      userBusinesses: userBusinesses
	    }
} 

  function fetchBusinessDataError(error){
    return{
      type: actionTypes.FETCH_BUSINESSDATA_FAILURE,
      error: error
    }   
  };

export function fetchBusinessDataBegin(userId) {
  return dispatch => {
  	if(userId==null){
  		dispatch(fetchBusinessDataError('User is not logged in'))
  		return false;
  	}
    let docRef = firebase.firestore().collection("Users").doc(userId);
    docRef.get().then(function(doc) {
      if (doc.exists) {
        dispatch(fetchBusinessDataSuccess(doc.data()))
        console.log("Document data:", doc.data());
      }
  }).catch(function(error) {
      return dispatch => {
        dispatch(fetchBusinessDataError(error))
      }
      console.log("Error getting document:", error);
  });
  }
}

export function clearState(){
  return {
    type: actionTypes.CLEAR_STATE
  }
}



// Actions for countDown:

export const clearCurrentCountDownTime = (id) => {
	return{
		type: actionTypes.CLEAR_CURRENT_COUNTDOWN_TIME,
		id: id,
	}
}

export const stopWatchOrCountDownIsShownHandler = (id, countDownOrStopwatch) => {
	return{
		type: actionTypes.STOPWATCH_OR_COUNTDOWN_IS_SHOWN_HANDLER,
		countDownOrStopwatch: countDownOrStopwatch,
		id: id,
	}
}


export const saveCurrentMiniStopwatchTime = (time, id, timerTime) => {
	return{
		type: actionTypes.SAVE_CURRENT_MINI_STOPWATCH_TIME,
		time: time,
		id: id
	}
}

export const increaseTimer = (increaseBy, id) => {
	return{
		type: actionTypes.INCREASE_TIMER,
		increaseBy: increaseBy,
		id: id
	}
}

export const saveTimerTime = (currentCountdownTime, timerTimeCountDown, currentMiniStopwatchTime, miniTimerTime, id) => {
	return{
		type: actionTypes.SAVE_TIMER_TIME,
		currentCountdownTime: currentCountdownTime,
		timerTimeCountDown: timerTimeCountDown,
		currentMiniStopwatchTime: currentMiniStopwatchTime,
		miniTimerTime: miniTimerTime,
		id: id
	}
}

export default {fetchBusinessDataBegin}


 