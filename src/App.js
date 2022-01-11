import { useState } from "react";

import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


  const DUMMY_DATA=[
    {id:'e1',title:'movie tickets',date:new Date(2022,4,16),amount:23.5},
    {id:'e2',title:'laundry',date:new Date(2022,1,6),amount:45},
    {id:'e3',title:'laptop',date:new Date(2021,8,23),amount:560.55},
    {id:'e4',title:'travelling',date:new Date(2021,5,19),amount:786.23},
    {id:'e5',title:'study react',date:new Date(2020,11,21),amount:135.60},
    {id:'e6',title:'study node js',date:new Date(2020,6,17),amount:215.75}
  ];

function App(){
  const [expenses,addExpense]=useState(DUMMY_DATA);

  function getNewExpenseHandler(newExpenseData){
    addExpense((prevExpenses)=>{
      return [newExpenseData,...prevExpenses];
    });
  }

  return(
    <div>
      <NewExpense onGetNewExpenseData = {getNewExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;