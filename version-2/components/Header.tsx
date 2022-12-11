import Link from "next/link";
import Navbar from "../components/Fullscreennav";
function Header() {
  return (
    <header className="flex align-right justify-between p-2  mx-auto items-center bg-transparent overflow-hidden scrollbar-hide">
      
    <div className="flex">
    <Link href="/">  
       <img className="w-20 object-contain cursor-pointer mt-3 "src="https://github.com/psmithulsourav/psmithulsourav.github.io/blob/main/version-2/public/pfp_nobg.png?raw=true"alt=""/>
    </Link>
      
      </div>
   <Navbar />
    
    </header>
  )
}

export default Header 