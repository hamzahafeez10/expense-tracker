import React,{useState} from 'react';
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(props){
  const [filteredYear, setFilteredYear] = useState('2020');

  function onValueChangeHandler(filterData){
    setFilteredYear(filterData);
  }
  return(
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} valueChange={onValueChangeHandler}></ExpenseFilter>
        {props.expenses.map((expenses)=>(
          <ExpenseItem 
          title={expenses.title} 
          date={expenses.date} 
          amount={expenses.amount}>
          </ExpenseItem>
        ))}     
      </Card>
    </div>
  );
}

export default Expenses;