import axios from 'axios'
import { createErrorResponse } from '../utility/ResponseUtility'

export const callPost = (url, header, body) => new Promise ((resolve, reject) => {
     axios
       .post(url, body, { headers: header })
       .then(function (response) {
         const postData = {
           responseCode: response.status,
           responseBody: response.data.body,
         };
         resolve(postData);
       })
       .catch(function (error) {
         const errorData = createErrorResponse(error);
         resolve(errorData);
       });
});

export const callGet = (url, header) => new Promise ((resolve, reject) => {
    axios
      .get(url, { headers: header })
      .then(function (response) {
        const postData = {
          responseCode: response.status,
          responseBody: response.data.body,
        };
        resolve(postData);
      })
      .catch(function (error) {
        const errorData = createErrorResponse(error);
        resolve(errorData);
      });
});

export const callPatch = (url, header, body) => new Promise ((resolve, reject) => {
    axios
    .patch(url, body, { headers: header})
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
})