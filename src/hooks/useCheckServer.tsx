import { useState, useEffect } from 'react';

import API from '../API';

// Interface


const useCheckServer = () => {
    
    const [ loadingServer, setLoading ] = useState<boolean>(false)
    const [ errorServer, setError ] = useState<boolean>(false)

    async function fetchData() {
        try{
            setLoading(true)
            const data = await API.checkServer()
            console.log(data)
            setLoading(false)
        }catch(e) {
            setError(true)
            setLoading(false)
        }
    }



    useEffect(()=>{
        fetchData()
    }, [])

    return {loadingServer, errorServer}

}

export default useCheckServer