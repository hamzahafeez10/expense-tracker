import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

function ExpenseList(props){
    if(props.data.length===0)
        return <h2 className='expenses-list__fallback'>No expenses exist for selected year.</h2>

    return(
        <ul className='expenses-list'>
            {props.data.map((expenses)=>(
            <ExpenseItem 
            key = {expenses.id}
            title = {expenses.title} 
            date = {expenses.date} 
            amount = {expenses.amount}>
            </ExpenseItem>
            ))};
        </ul>
    )
}

export default ExpenseList;