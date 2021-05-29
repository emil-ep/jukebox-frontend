import axios from 'axios'
import { createErrorResponse } from '../utility/ResponseUtility'

export const callPost = (url, header, body) => new Promise ((resolve, reject) => {
     axios
    .post(url, body)
    .then(function(response){
        console.log("Post api success")
        const postData = {
            responseCode: response.status,
            responseBody: response.data.body
        }
        resolve(postData)
    })
    .catch(function(error){
        console.log("Error calling post api: " + url)
        const errorData = createErrorResponse(error)
        resolve(errorData)
    })
});