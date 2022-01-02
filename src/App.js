import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App(){
  const data=[
    {title:'movie tickets',date:new Date(2021,4,16),amount:23.5},
    {title:'laundry',date:new Date(2021,1,6),amount:45},
    {title:'laptop',date:new Date(2021,8,23),amount:560.55},
    {title:'travelling',date:new Date(2021,5,19),amount:786.23},
    {title:'study react',date:new Date(2021,11,21),amount:135.60}
  ]

  function getNewExpenseHandler(newExpenseData){
    console.log(newExpenseData);
  }

  return(
    <div>
      <NewExpense onGetNewExpenseData = {getNewExpenseHandler}></NewExpense>
      <Expenses expenses={data}></Expenses>
    </div>
  );
}

export default App;