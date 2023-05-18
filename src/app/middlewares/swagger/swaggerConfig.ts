 
import { Options, SwaggerDefinition } from 'swagger-jsdoc';

const swaggerDefinition: SwaggerDefinition = {

    info: {
        version: '1.0.0',
        title: 'API de profesores usando TS para La Universidad UPB',
        description: 'En esta API se pueden crear nuevos profesores para tener un listado de toda la universidad'
    },
    servers: [
        {
            url: 'http://Localhost:3000/api'
        }

    ]

};

const swaggerOptions: Options ={
    swaggerDefinition,
    apis: [
        './src/app/routes/*.ts',
        './src/app/controllers/*.ts',
        './src/domain/entities/*.ts'
    ]
};

export default swaggerOptions;