import axios from 'axios';
import { logError } from '../helper';

/** Get api call method */
export const getCall = async (apiUrl) => {
    try {
        const config = {headers : { "content-type": "application/octet-stream" } };
        const response = await axios.get(apiUrl, config);
        if (response.status === 200) { 
            return response?.data;
        } else {
            return logError(`[Helpers Ajax] [Get Call] ${apiUrl} => `, response.status);
        }
     } catch (error) {
        return logError(`[Helpers Ajax] [Get Call] ${apiUrl} => `, error.message);
     }
}