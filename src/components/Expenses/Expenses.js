import React, { useState } from "react";

import ExpensesFilter from "../Expenses/ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";

function Expenses(props) {
    const [filteredYear, setFilterYear] = useState("2022");
    function filterChangeHandler(selectedYear) {
        setFilterYear(selectedYear);
    }

    const filterExpenses=props.items.filter(expense=>{
        return expense.date.getFullYear().toString()===filteredYear;
    });

    
    
    return (
        <li>
            <Card className="expenses">
            <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
            />
            <ExpensesList items={filterExpenses}/>
            </Card>
        </li>
    );
}

export default Expenses;
