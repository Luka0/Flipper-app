import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setInactiveColor, toggleActivitiy } from '../reducers.js/gridSlice';

export default function Grid() {

    const grid = useSelector(state => state.gridReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setInactiveColor());
    }, []);

    return (
    <div>
        <div className='grid'>
            {
                grid.gridIds.map(id => 
                    <div 
                        id={id} 
                        key={id} 
                        className='gridItem' 
                        onClick={() => dispatch(toggleActivitiy(id))}
                    />
                )
            }
        </div>
    </div>
    )
}
