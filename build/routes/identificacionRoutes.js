"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.identificacionRoutes = void 0;
const express_1 = require("express");
const database_1 = require("../database/database");
class IdentificacionRoutes {
    constructor() {
        this.getId = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { password } = req.params;
            const { user } = req.params;
            setBD(true, user, password); // true BD Local; false BD Atlas
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                res.send(mensaje);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
                console.log(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this._router = express_1.Router();
    }
    get router() {
        return this._router;
    }
    misRutas() {
        this._router.get('/:user&:password', this.getId);
    }
}
const setBD = (local, userAtlas, passAtlas) => __awaiter(void 0, void 0, void 0, function* () {
    const bdLocal = 'geometria';
    const conexionLocal = `mongodb://locadlhost/${bdLocal}`;
    if (local) {
        database_1.db.cadenaConexion = conexionLocal;
    }
    else {
        const bdAtlas = 'prueba';
        const conexionAtlas = `mongodb+srv://${userAtlas}:${passAtlas}@cluster0.viyli.mongodb.net/${bdAtlas}?retryWrites=true&w=majority`;
        database_1.db.cadenaConexion = conexionAtlas;
    }
});
const obj = new IdentificacionRoutes();
obj.misRutas();
exports.identificacionRoutes = obj.router;
