
import { Link, } from 'react-router-dom'
import { formatWithCurrency, capitalizeName, formatAmount } from "../helpers/helper"
import {  Budgets } from "../Contex/AppContex"


// type ID = {
//     id:string
// }

interface appProps {
    budgetSelected: Budgets
}


export function BudgetSelected({ budgetSelected }: appProps) {

 

    return (

        <div className='mt-10 h-2/4 ' >
            <h2>Budget Selected</h2>
            <div className='border rounded w-56' >
                <div className='p-1 w-full flex-column justify-center' >
                    <p>Name: {capitalizeName(budgetSelected?.name!)}</p>
                    <p>Amount {formatWithCurrency(budgetSelected?.amount!)} </p>
                    <p>Spent {formatAmount(budgetSelected?.spent!)} </p>
                    <p>Remaining {formatAmount(budgetSelected?.remaining!)} </p>
                    <p>Percentage {formatAmount(budgetSelected?.rangeValue!)} </p>
                </div>
                <button className=' bg-red-700 border rounded text-neutral-100 hover:text-neutral-100 ' ><Link to="/"> Go Back</Link></button>
            </div>
        </div>

    )
}