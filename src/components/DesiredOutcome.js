import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { randomizeActivities, setColors } from '../reducers.js/desiredOutcomeSlice';

export default function DesiredOutcome() {

    const desiredOutcome = useSelector(state => state.desiredOutcomeReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(randomizeActivities());
        dispatch(setColors());
    }, []);

    return (
    <div>
        <div className='grid'>
            {desiredOutcome.gridIds.map(id => <div id={id} key={id} className='gridItem' />)}
        </div>
    </div>
    )
}
