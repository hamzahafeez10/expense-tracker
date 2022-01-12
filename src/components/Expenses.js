import React,{useState} from 'react';
import Card from './Card';
import ExpenseChart from './ExpenseChart';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import './Expenses.css';

function Expenses(props){
  const [filteredYear, setFilteredYear] = useState('2020');

  function onValueChangeHandler(filterData){
    setFilteredYear(filterData);
  }

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return(
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} valueChange={onValueChangeHandler}></ExpenseFilter>
        <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
        <ExpenseList data={filteredExpenses}></ExpenseList>
      </Card>
    </div> 
  );
}

export default Expenses;