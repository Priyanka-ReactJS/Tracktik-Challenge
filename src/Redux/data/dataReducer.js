import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
  } from './dataType'
  
  const initialState = {
    loading: false,
    allData: [],
    error: ''
  }
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_DATA_SUCCESS:
        return {
          loading: false,
          allData: action.payload,
          error: ''
        }
      case FETCH_DATA_FAILURE:
        return {
          loading: false,
          allData: [],
          error: action.payload
        }
      default: return state
    }
  }
  
  export default dataReducer