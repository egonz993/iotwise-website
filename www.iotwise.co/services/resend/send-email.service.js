const HTTP_REQUEST_POST = async (url, body) => {
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }

    const response = await fetch(url, params)
    const data = await response.json()

    return data
}


export const SendEmail = async (options) => {
    HTTP_REQUEST_POST("https://nk1lme3nxd.execute-api.us-east-1.amazonaws.com/email", options)
}