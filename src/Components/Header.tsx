
import Home from "../assets/Home.png"

export function Header(){


    return(
        <>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", backgroundColor:"#38b6ff", color:"white", height:"50px", width:"100%" }} >
            <div style={{ display:"flex", justifyContent:"center" , alignItems:"center" , marginLeft:"40px" }} >
                <p>Budget</p>
                <img style={{ width:"40px" ,height:"40px" , marginLeft:"10px" }} src={Home} />

            </div>
            <div>
             
            </div>
        </div>
        </>
    )


}