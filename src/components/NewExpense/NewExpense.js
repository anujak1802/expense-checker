import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
function NewExpense(props){
    const [isEditing,setIsEditing] = useState(false);
    function startEditingHandler(){
        setIsEditing(true);
    }
    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };
    function stopEditing(){
        setIsEditing(false);
    }
    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onCancel={stopEditing} onSaveExpenseData={saveExpenseDataHandler}/>}
        </div>
    );
}

export default NewExpense;