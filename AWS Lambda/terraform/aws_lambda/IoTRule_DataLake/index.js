import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import dotenv from 'dotenv'; dotenv.config()

const s3Client = new S3Client({});
const client = process.env.CLIENT

export const handler = async (event) => {

    try {
        await s3Client.send(new PutObjectCommand({
            Bucket: `telelamp.${client}.datalake`,
            Key: Date.now().toString(),
            Body: JSON.stringify(event),
        }));

        return {
            statusCode: 200,
            body: JSON.stringify('Mensaje guardado en S3 correctamente'),
        };
    }
    catch (err) {
        console.error('Error al guardar el mensaje en S3:', err);
        return {
            statusCode: 500,
            body: JSON.stringify('Error al guardar el mensaje en S3.'),
        };
    }
};
