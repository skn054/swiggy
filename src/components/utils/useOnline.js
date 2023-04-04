import { useEffect, useState } from "react"
/**
 * 
 * useOnline hook runs every time App referesh. Hence create a new listener every time app refresh.
 * 
 */
const useOnline = () =>{
    const [isOnline,setIsOnline] = useState(true);
    // console.log("useOnline hook")

    /**
     * listeners are regstered only one time when useHook is called initially. When App component initially called.
     * When online state changes, App component is re-evaluated, but useEffect will not be called again, as it is tied to App component.
     */
    useEffect(()=>{ 
    // console.log("inside useEffect");
       const handelOnline =  window.addEventListener('online', ()=>{
            console.log("Event listener")
            setIsOnline(true);
    })
    
    const handleOffline = window.addEventListener('offline',() =>{
        // console.log("Event listener")
        setIsOnline(false);
    })

    /**
     * this will run when App component unmounts, i.e when app is removed from DOM. 
     */
    return () =>{
        window.removeEventListener("online",handelOnline);
        window.removeEventListener("offline",handleOffline);
        console.log("unmount code...")
    }
    },[])

   
   

    return isOnline;
}

export default useOnline;