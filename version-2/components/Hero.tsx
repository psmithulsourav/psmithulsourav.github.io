import { motion } from 'framer-motion';
function Hero(){
return (
  
    <div className="snap-y snap-mandatory h-screen w-screen overflow-auto ">
      <div className="snap-start h-screen w-screen flex items-      center justify-center text-5xl ">
          <div className='grid gap-2 grid-row-3 content-                    center'>
            <div><h1 className='text-white row-start-1 '>
              <span>P S Mithul</span> 
              <br></br><span>Sourav</span>
              <br></br></h1>
            </div>
            <img src=''></img>
          </div>
          
    
    </div>
      <div className="snap-start h-screen w-screen flex items-        center justify-center text-5xl text-red-700">
        2
      </div>
      <div className="snap-start  h-screen w-screen flex             items-center justify-center text-5xl text-red-700">
        3
      </div>
    
  </div>
  ) 
}
export default Hero