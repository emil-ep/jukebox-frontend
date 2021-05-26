import React from 'react'
import axios from 'axios'

export const callPost = (url, header, body) => {
    axios
    .post(url, body)
    .then(function(response){
        console.log("Post api success")
        const postData = {
            responseCode: response.status,
            responseBody: response.data.body
        }
        return postData
    })
    .catch(function(error){
        console.log("Error calling post api: " + url)
        console.error(error)
        const errorData = {
            responseCode: error.status,
            responseBody: error.data.body
        }
        return errorData
    })
}