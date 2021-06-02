
export const createErrorResponse = (error) => {
    let errorData
    if(typeof(error.response) === 'undefined'){
        const responseBody = {
            body: "Server not found"
        }
        errorData = {
            responseCode: 404,
            responseBody: responseBody
        }
    }else{
      errorData = {
        responseCode: error.response.status,
        responseBody: error.response.data,
      };
    }
    return errorData
}