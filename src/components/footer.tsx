import { Mail } from "lucide-react"

export default function Footer(){
    return(
       <>
       
        <footer className=" flex justify-center w-full bg-stone-800 text-white pt-12 pb-8">
          <section className="w-4/5 flex flex-wrap gap-12 justify-around items-center">
          
             <div className="flex flex-col gap-4">
                <h1 className="text-3xl text-white">Quick Menu</h1>
                <p>About Us</p>
                <p>Customer Support</p> 
                <p>International Shipping</p>
                <p>Terms of Service</p>
                <p>Refund Policy</p>
             </div>
             <div>
                <h1 className="text-3xl text-white mb-4">Sign up and save</h1>
                <p className="mb-2 ">Subscribe to get special offers, free giveaways.</p>
                <div className="flex justify-between w-1/2 ">
                <input type="text" placeholder="Enter your email" className="placeholder-white focus:border-b-2 outline-none"></input>
                <Mail/>
                </div>
                <button className="border-white border-2 px-2 py-1 rounded-xl mx-auto mt-4 leading-5 cursor-pointer">Submit</button>
             </div>
         
          </section>
        
        </footer>
        <div className="text-center bg-stone-800 text-white pt-2 pb-2 border-stone-800 border-none">
          <div >@Ola Perfumes</div>
          <div>All rights reserved</div>
          </div>
    
        
        </>
    )
}