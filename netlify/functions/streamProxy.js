const axios = require('axios');

exports.handler = async function(event, context) {
    try {
        const response = await axios.get('http://usa15.ciudaddigital.com.uy:8040/FederalFM', {
            responseType: 'arraybuffer' // para manejar datos binarios
        });

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'audio/mpeg',
            },
            body: response.data.toString('base64'),
            isBase64Encoded: true
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: 'Error fetching the stream.'
        };
    }
};