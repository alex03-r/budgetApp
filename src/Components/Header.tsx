
import Home from "../assets/Home.png"

export function Header(){


    return(
        <>
        <div className="h-2" style={{ display:"flex", justifyContent:"space-between", alignItems:"center", backgroundColor:"#38b6ff", color:"white", height:"54px", width:"100%" }} >
            <div style={{ display:"flex", justifyContent:"center" , alignItems:"center" , marginLeft:"4.1%" }} >
                <p className="text-xl" >Budget</p>
                <img style={{ width:"40px" ,height:"40px" , marginLeft:"10px" }} src={Home} />

            </div>
            <div>
             
            </div>
        </div>
        </>
    )


}