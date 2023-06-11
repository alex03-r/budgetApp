
import { BudgetContex } from "../Contex/AppContex"
import Home from "../assets/Home.png"
import { useContext } from "react"
import { capitalizeName } from "../helpers/helper"
import { useLocation } from "react-router-dom"

export function Header() {

    const { setPopUp, setPopUpValues, setUser, user, budgets, setBudgets, setExpenses } = useContext(BudgetContex)

    let location = useLocation();

    const deleteUser = function () {

        setUser({
            name: ""
        })
        setBudgets([])
        setExpenses([])

        setPopUp(false)

    }

    // 

    const setPopUpValuesAndOpenIt = () => {
        let popUpValues = {
            title: "Delete",
            text: `Are you sure you want to delete the user: ${capitalizeName(user.name)} ?`,
            actionName: "Delete",
            action: () => {
                deleteUser()
            },
        }
        setPopUpValues(popUpValues)
        setPopUp(true)
    }




    return (
        <>
            <div className="h-2" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#38b6ff", color: "white", height: "54px", width: "100%" }} >
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "4.1%" }} >
                    <p className="text-xl" >Budget</p>
                    <img style={{ width: "40px", height: "40px", marginLeft: "10px" }} src={Home} />

                </div>

                <div className="me-2" >

                    {
                        user.name && location.pathname !== "/" &&

                        <button className="border rounded bg-red-600 border-rose-600 p-1" onClick={setPopUpValuesAndOpenIt} > Delete user</button>
                    }

                </div>
            </div>
        </>
    )


}