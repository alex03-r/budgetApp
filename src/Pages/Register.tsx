import { BudgetContex } from "../Contex/AppContex"
import { useContext } from "react"

import { useNavigate } from "react-router-dom"

import Home from "../assets/Home.png"

export function Register() {

    const { setUser, user, setBudgets, setExpenses } = useContext(BudgetContex)
    const navigate = useNavigate()

    const onRegister = () => {

        if (!user.name) {
            alert("Please register")
            return
        }
        setBudgets([])
        setExpenses([])
        navigate('/home')
    }



    return (
        <div className="ms-11 sm:flex-col md:flex md:flex-row justify-center items-center w-11/12 h-full  " >

            <div className="ms-0 pe-5 sm:mt-10 sm:items-center sm:flex md:flex-col ">
                <img className="w-48 rounded-2xl" src={Home} />
                <h1 className="text-xl sm:ms-4 text-slate-900" >Welcome to the Budget app where you can control your money</h1>

            </div>
            <div className=" shadow-md border rounded h-1/2 sm:w-1/2 md:w-2/5 sm:mt-4 flex flex-col justify-evenly items-center" >
                <h1 className="mt-3 text-xl " >Register</h1>
                <div className=" flex flex-col" >                 
                    <input  className="border rounded mt-2 ms-2 w-11/12" onChange={(e) => setUser({ name: e.target.value })} placeholder="name" />
                    <button className="border mt-2 ms-2 w-11/12 rounded border-l-white text-white p-1 hover:bg-slate-500 bg-slate-500 " onClick={onRegister} >Register</button>
                </div>
            </div>

        </div>
    )
}