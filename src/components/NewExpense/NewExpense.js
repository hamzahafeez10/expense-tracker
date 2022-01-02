import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

function NewExpense(props){
    function getExpenseFormDataHandler(ExpenseFormData){
        const AppendedData = {
            id:Math.random(),
            ...ExpenseFormData
        }
        props.onGetNewExpenseData(AppendedData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onGetExpenseForm={getExpenseFormDataHandler}></ExpenseForm>
        </div>
    );
}

export default NewExpense;