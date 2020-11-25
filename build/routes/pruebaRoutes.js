"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pruebaRoutes = void 0;
const express_1 = require("express");
class PruebaRoutes {
    constructor() {
        // Definimos las funciones asociadas a las rutas
        this.getPrueba = (req, res) => {
            res.send('Estoy en la /p de la app (con o sin prefijo). Utilizando una función');
        };
        // Atención para que se pueda enviar un post con body hay que poner en server:
        // this.app.use(express.json()) // para que nuestro servidor entienda
        // los formatos json desde clientes
        this.postPrueba = (req, res) => {
            console.log(req.body);
            const { nombre, base, altura } = req.body;
            res.send('Estoy en post ' + nombre);
        };
        this._router = express_1.Router();
    }
    get router() {
        return this._router;
    }
    // Aplicamos a la variable de tipo Router métodos get con rutas y las funciones que realizan
    // https://expressjs.com/es/4x/api.html#router.METHOD
    // Para más tarde usarlas en el servidor
    misRutas() {
        this._router.get('/', (req, res) => res.send('Buenos días queridos alumnos'));
        this._router.get('/parametro/:valor1&:valor2', (req, res) => {
            const { valor1, valor2 } = req.params;
            console.log(req.params);
            res.send(`Me has enviado: ${valor1} y ${valor2}`);
        });
        this._router.get('/p', this.getPrueba);
        this._router.post('/p2', this.postPrueba);
    }
}
// Creamos el objeto 
const obj = new PruebaRoutes();
// ejecutamos la asociación rutas > funciones
obj.misRutas();
// Exportamos el parámetro de tipo Router con las rutas asignadas
// Para su uso en el servidor
exports.pruebaRoutes = obj.router;
