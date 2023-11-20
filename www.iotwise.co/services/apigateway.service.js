const APIGateway = {}

/** query
 * 
 * Execute a query in a database using the API Gateway
 * 
 * @param {string} database     database name
 * @param {string} query        query to execute
 * @returns 
 */
APIGateway.query = async (database, query) => {

    if (database.length === 0) return false

    const url = process.env.REACT_APP_APIGATEWAY_URL
    const body = {
        database,
        query
    };
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    };

    try {
        let response = await fetch(url, options);
        let result = await response.json();
        return result;
    } catch (error) {
        console.log(error)
        return { error: true, message: error.message }
    }
}


/** quickInsert
 * 
 * Insert a single row into a table in a database using the API Gateway
 * 
 * @param {string} database     database name
 * @param {string} table        table name
 * @param {object} values       values to insert as object
 * @returns 
 */
APIGateway.quickInsert = async (database, table, values) => {

    const url = process.env.REACT_APP_APIGATEWAY_URL;
    const body = {
        database,
        table,
        values
    };
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    };

    try {
        let response = await fetch(url, options);
        let result = await response.json();
        return result;
    } catch (error) {
        console.log('\nerror', body.values.deveui)
        return { error: true, message: error.message }
    }
}

export { APIGateway }