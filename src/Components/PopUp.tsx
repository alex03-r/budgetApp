

import { useContext } from "react"
import { BudgetContex } from "../Contex/AppContex"




export function PopUp() {


    const { popUpValues, setPopUp } = useContext(BudgetContex)


    return (

        <div  className=" w-full h-full  flex justify-center z-0 items-center absolute inset-y-0 " >
            <div className=" bg-slate-100  w-1/3  border rounded h-1/4 flex flex-col justify-around items-center absolute  "  >
                <h1>{popUpValues.title || "titulo"}</h1>
                <div className="" >
                    <p>{popUpValues.text || "que quieres hacer"}</p>
                </div>
                <div className=" flex gap-2 ">
                    <button onClick={() => setPopUp(false)} className="border rounded justify-center " >Cancel</button>
                    <button className="bg-rose-600 text-white p-1 border rounded " onClick={() => popUpValues.action()} >{popUpValues.actionName || "jj"} </button>
                </div>
            </div>
        </div>
    )

}