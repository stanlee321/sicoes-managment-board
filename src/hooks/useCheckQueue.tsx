import { useState, useEffect } from 'react';

import API from '../API';

// Interface
interface IQueueSize {
    queue_size: number
}

const useCheckQueue = () => {
    
    const [ loadingQueue, setLoading ] = useState<boolean>(false)
    const [ errorQueue, setErrorQueue ] = useState<boolean>(false)

    const [queue, setQueue] = useState<IQueueSize>()

    async function fetchData() {
        try{
            setLoading(true)
            const data = await API.checkQueue()
            setQueue(data)
            setLoading(false)
        }catch(e) {
            setErrorQueue(true)
            setLoading(false)
        }
    }



    useEffect(()=>{
        fetchData()
    }, [])

    return {queue, fetchData, errorQueue, loadingQueue}

}

export default useCheckQueue