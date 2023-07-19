import { BudgetContex } from "../Contex/AppContex"
import { useContext, useRef } from "react"
import Sea from "../assets/RealSea.jpeg"
import { useNavigate } from "react-router-dom"

import Home from "../assets/Home.png"
import Money from "../assets/money.jpeg"

export function Register() {

    const { setUser, setBudgets, setExpenses } = useContext(BudgetContex)
    const navigate = useNavigate()
    const inputRef = useRef<HTMLInputElement>(null!)

    const onRegister = () => {

        if (!inputRef.current.value) {
            alert("Please enter your name")
            return
        }
        setUser({ name: inputRef.current.value, isLogged: true })
        setBudgets([])
        setExpenses([])
        navigate('/home')
    }



    return (
        <>
            <div className="ms-11 sm:flex-col md:flex md:flex-row justify-center items-center w-11/12 h-full  " >

                <div className="ms-0 pe-5 sm:mt-10 sm:justify-center flex sm:flex-row md:flex-col ">
                    <img className=" sm:w-36 w-48 rounded-2xl" src={Money} />
                <div>
                <h1 className="text-xl sm:ms-4 sm:mt-20 lg:mt-14 xl:mt-10 lg:ms-1 text-slate-900 font-bold" >Take control of your money</h1>
                     <h1 className=" sm:ms-4 text-lg italic" >Personal budgeting is the key for your finantial success</h1>
                </div>
                </div>
                <div className=" shadow-md border rounded sm:h-2/4 md:h-3/4  sm:w-1/2  sm:mt-4 flex flex-col justify-evenly items-center" >
                    <h1 className="mt-3 text-xl " >Register</h1>
                    <div className=" flex flex-col" >
                        <input className="border rounded mt-2 ms-2 w-11/12" ref={inputRef} placeholder=" Name" />
                        <button className="border mt-2 ms-2 w-11/12 rounded border-l-white text-white p-1 bg-sky-400 " onClick={onRegister} >Register</button>
                    </div>
                </div>



            </div>
            <img className="sm:mt-32 lg:mt-28 " style={{ height: "70px" }} src={Sea} />
        </>
    )
}