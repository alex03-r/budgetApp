
import { Link, } from 'react-router-dom'
import { formatWithCurrency, capitalizeName, formatAmount } from "../helpers/helper"
import {  Budgets } from "../Contex/AppContexProvider"


interface BudgetProps {
    budgetSelected: Budgets
}


export function  BudgetSelected({ budgetSelected }: BudgetProps) {

 
    return (

        <div className=' ms-2 mt-10 h-2/4 sm:w-11/12 md:w-11/12 flex flex-col items-center ' >
           <div className='flex gap-2' >
             <h1 className=' text-lg ' style={{ color:`${budgetSelected.color}` }} > { capitalizeName(budgetSelected.name)  } </h1>
             <h1 className='text-lg'> Overview</h1>
           </div>
            <div style={{ borderColor:`${budgetSelected.color}`, borderWidth:'2px', borderStyle:"solid", borderRadius:"4px"  }} className=' sm:w-11/12 md:w-11/12 flex flex-col items-center' >
                <div className='p-2 ms-3 flex-column justify-center' >
                    <p className=' text-lg '>Name: {capitalizeName(budgetSelected?.name!)}</p>
                    <p className=' text-lg '>Amount: {formatWithCurrency(budgetSelected?.amount!)} </p>
                    <p className=' text-lg '>Spent: {formatAmount(budgetSelected?.spent!)} </p>
                    <p className=' text-lg '>Remaining: {formatAmount(budgetSelected?.remaining!)} </p>
                    <p className=' text-lg '>Percentage: {formatAmount(budgetSelected?.rangeValue!)} % </p>
                </div>
                <button style={{ backgroundColor:`${budgetSelected.color}` }} className=' w-36 mb-3 h-7  border rounded text-black hover:text-neutral-100 ' ><Link to="/home"> Go Back</Link></button>
            </div>
        </div>

    )
}