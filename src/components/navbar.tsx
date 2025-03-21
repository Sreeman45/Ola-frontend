
import { Link } from "react-router-dom"
import Dropdown from "./dropdown"
export default function Navbar(){
    return( 
        <nav className="w-full h-28 max-sm:h-24 2xl:h-32 flex items-center  justify-between bg-gradient-to-r to-slate-800 from-[#b7126d] max-md:justify-between max-md:px-6" >
            <img src="olajpg.jpg" className="md:size-20 size-16 rounded md:ml-12 "></img>
         
          <ul className="md:flex  w-auto gap-8 font-semibold text-white  px-2 py-1   hidden text-2xl 2xl:text-3xl">
      
            <Link to='/Perfumes' className="hover:text-yellow-500 hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out">Perfumes</Link> 
            <Link to='/Account'  className="hover:text-yellow-500 hover:-translate-y-1 hover:scale-105 duration-200 ease-in-out">Account</Link>
            <Link to='/Orders'  className="hover:text-yellow-500 md:mr-6 hover:-translate-y-1 hover:scale-105 duration-200 ease-in-out">Orders</Link>
            <Link to='/Signup' className="bg-blue-600 px-3 py-1 font-semibold rounded-2xl text-2xl hover:bg-blue-500 ">Sign Up</Link>
          </ul>
          <div className="md:hidden sm:w-[1/3] md:self-end  "><Dropdown/>
           
                                                     
          </div>

          
        </nav>
    )
}


