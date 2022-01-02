import React from 'react';
import './ExpenseFilter.css';

function ExpenseFilter(props){
    function optionChangeHandler(event){
        props.valueChange(event.target.value)
    }
    return (
        <div className='expenses-filter'>
            <div className='expense-filter__control'>
                <label>Filter By Year</label>
                <select value={props.selected} onChange={optionChangeHandler}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
}

export default ExpenseFilter;