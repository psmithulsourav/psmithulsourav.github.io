import Link from "next/link";
function Header() {
  return (
    <header className="flex align-right justify-between p-5 max-w-7xl mx-auto">
    <div className="flex items-center">
    <Link href="/">  
      <img className="w-44 object-contain cursor-pointer"src=""alt="coming soon"/>
    </Link>
      
    </div>
      <div className="hidden md:inline-flex items-center space-x-5 align-left ">
        <h3>About</h3>
        <h3>Contact</h3>
        <h3 className="bg-green-600 px-4 py-1 rounded-full text-white">Follow</h3>
      </div>
    </header>
  )
}

export default Header 