import { useState,useCallback ,useEffect ,useRef} from 'react'



function App() {

  const [length,setlength]=useState("8")
  const [password,setPassowrd]=useState("")
  const [char,isCharAllowed]=useState(false)
  const [number,isNumberAllowed]=useState(false)

  const passwordGenerator=useCallback((()=>{
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass=""
     if(char) str+="!@#$%^&*"
    if(number) str+="1234567890" 


    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1);
      pass=pass+str.charAt(char)

    } 

   
    setPassowrd(pass)


  }),[number,length,char,setPassowrd])

  const copyToClipBoard=useCallback(()=>{
    passRef?.current.select();
    passRef?.current.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password)

  },[char,number,length])

 useEffect(()=>{
  passwordGenerator()

 },[length,char,number])


 const passRef=useRef(null)

  




  return (
    <> 
    <div className='flex justify-center items-center h-screen '>

      <div className='w-full max-w-lg  bg-slate-800 h-36 p-2 rounded-md shadow-md  justify-center items-center text-orange-500'>

      <h1 className='text-white text-center'>Password Generator</h1>

      <div className='flex items-center justify-center w-full max-w-lg mt-2 rounded-md p-2'>
        <input className='rounded-l outline-none p-1'
         type="text" 
        value={password}
        readOnly
       ref={passRef}
         
  
        
        />
        <button 
         onClick={copyToClipBoard}
        className='bg-blue-700 rounded-r p-1'>Copy</button>
      </div>

      <div className='flex items-center justify-center  mt-2 gap-x-2'>
        <div className='p-1  sm:mt-1'> 
        <input  type="range" 
        min={8}
        max={100}
        value={length}
        onChange={(e)=>{setlength(e.target.value)
         
        }
        
      }
        
        
        /></div>
        <div className='gap-x-1'>
        <label className='mt-3' >{length}  Length</label>
        </div>
        <div className='gap-x-1'>
        <input type="checkbox"  id="isCharAllowed" 
        defaultValue={char}
        onChange={()=>{
          isCharAllowed((prev)=>!prev)
        }}
        
        />
        <label htmlFor='isCharAllowed'>Character</label>
        </div>
        <div className='gap-x-1 '>
        <input type="checkbox"  id="isNumberAllowed" 
        defaultValue={number}
        onChange={()=>{
          isNumberAllowed((prev)=>!prev)
         
        }}
        />
        <label htmlFor='isNumberAllowed'>Number</label>
        </div>


        </div>
       

   </div>  
  
     




    </div>


     
    
    
    </>
  )
}

export default App
