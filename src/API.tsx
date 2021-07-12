import config from "./config";


const defaultConfig = {
    method : 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
}

const apiSettings = {
    checkServer: async () => {
        const endpoint =  config.API_URL + '';
        return await (await fetch(endpoint)).json();
    },
    checkQueue: async () => {
        const endpoint =  config.API_URL + config.CHECK_QUEUE_URL;
        return await (await fetch(endpoint)).json();
    },
    fetchParams :  async () => {
        const endpoint =  config.API_URL + `${config.FETCH_PARAMS_URL}`

        return await (await fetch(endpoint)).json();
    },

    createParams : async (start: number, end: number, batchSize:number) => {
    
        const endpoint =  config.API_URL + `${config.CREATE_PARAMS_URL}`
    
        const response = await (
            await fetch(endpoint, {
              ...defaultConfig,
              body: JSON.stringify({start_index: start,  end_index: end, batch_size: batchSize })
            })
          ).json();
        
        console.log(response)
        return response
    }
    
}


export default apiSettings;