
import { useParams ,Link} from "react-router-dom"
import { useContext } from "react"
import { BudgetContex } from "../Contex/AppContex"
import { formatWithCurrency , capitalizeName, formatAmount } from "../helpers/helper"

export function RecentBuget(){


    const { budgets, expenses } = useContext(BudgetContex)
    const param = useParams()
    const budgetSelected = budgets.find(bud => bud.id === parseInt(param.id!))
    const expensesOfBudgetSelected = expenses.filter(expense => expense.budget == budgetSelected?.name)


    return (
        <div style={{ display:"flex", marginLeft:"4%", border:"grey solid 2px", gap:"10%", height:'100vh' }}>
            <div style={{  }} >
                    <h2>Budget Selected</h2>
                    <div style={{ marginTop:"20px " }} >
                        <p>Name: { capitalizeName(budgetSelected?.name!) }</p>
                        <p>Amount { formatWithCurrency(budgetSelected?.amount!)  } </p>
                        <p>Spent { formatAmount(budgetSelected?.spent!)   } </p>
                        <p>Remaining { formatAmount(budgetSelected?.remaining!) } </p>
                        <p>Percentage { formatAmount(budgetSelected?.rangeValue!) } </p>
                    </div>
                    <button><Link to="/"> Go Back</Link></button>
            </div>
            <div>
                <h2>Expenses</h2>
                <div>
                    <ul>
                        {
                            expensesOfBudgetSelected.map(exp => {
                                return <li key={exp.id} >{ exp.name }</li>
                            })
                        }
                    </ul>

                </div>
            </div>
        </div>
    )

}