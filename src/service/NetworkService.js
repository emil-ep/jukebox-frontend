import axios from 'axios'
import { createErrorResponse } from '../utility/ResponseUtility'

export const callPost = (url, header, body) => new Promise ((resolve, reject) => {
     axios
    .post(url, body)
    .then(function(response){
        const postData = {
            responseCode: response.status,
            responseBody: response.data.body
        }
        resolve(postData)
    })
    .catch(function(error){
        const errorData = createErrorResponse(error)
        resolve(errorData)
    })
});