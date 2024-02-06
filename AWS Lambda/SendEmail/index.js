import { Resend } from 'resend';

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
export const handler = async (event) => {
    const body = JSON.parse(event.body);
    console.log({ body });

    const API_KEY = 're_8m5HehWo_ERksZn6SjJrDZ8EHtCMb35Nx';

    try {
        const resend = new Resend(API_KEY);
        const data = await resend.emails.send({
            from: 'IoT Wise <no-reply@iotwise.co>',
            subject: body.subject,
            text: body.text,
            to: body.to
        });
        console.log({ data });

        return {
            statusCode: 200,
            headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "*" },
            body: JSON.stringify(data),
        };
    }
    catch (error) {
        // Catch errors
        console.error(error);
        return {
            statusCode: 500,
            headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "*" },
            body: JSON.stringify(error),
        };
    }

};
