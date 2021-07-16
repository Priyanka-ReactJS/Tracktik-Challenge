import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchData} from '../Redux/data/dataAction'

const DataContainer = () => {
    const allData = useSelector(state => state.data.allData)
    const dispatch = useDispatch()
    console.log("alldata",allData)

    useEffect(()=>{
        dispatch(fetchData())
    },[])
    return (
        <div>
            {/* <h1>Number Of IceCreeam = {allData} </h1>
            <button onClick ={() => dispatch(fetchData())}>Bye IceCreeam</button> */}
        </div>
    )
}
export default DataContainer; 
