import axios from 'axios'
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from './dataType'

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest())
    axios
      .get('https://tracktik-challenge.staffr.com/sites')
      .then(response => {
        // response.data is the users
        const allData = response.data
        console.log(response,"all")
        dispatch(fetchDataSuccess(allData))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchDataFailure(error.message))
      })
  }
}

export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST
  }
}

export const fetchDataSuccess = allData => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: allData
  }
}

export const fetchDataFailure = error => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error
  }
}