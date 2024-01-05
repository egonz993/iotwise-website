const APIGatewayService = {}


APIGatewayService.lorawan = async (command, options) => {

    const url = process.env.REACT_APP_APIGATEWAY_URL + "/lorawan";
    const params = {
        method: "POST",
        body: JSON.stringify({command, options})
    };

    try {
        let response = await fetch(url, params);
        let result = await response.json();
        return result;
    } catch (error) {
        return { error: true, message: error.message }
    }
}

export { APIGatewayService }