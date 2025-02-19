"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJWTToken = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const jwks_rsa_1 = __importDefault(require("jwks-rsa"));
const util = __importStar(require("util"));
const dotenv_1 = __importDefault(require("dotenv"));
const config_service_1 = require("../config/config.service");
dotenv_1.default.config();
const validateJWTToken = async (authToken) => {
    if (!authToken)
        throw new Error('Token missing');
    try {
        const token = authToken.replace('Bearer ', '');
        const decoded = jwt.decode(token, { complete: true });
        if (decoded === null) {
            throw new Error('Invalid token, could not be decoded');
        }
        //const payload = decoded.payload;
        const header = decoded.header;
        const kid = header.kid;
        // validate this token against azure key provider for B2C
        const jwksUri = `https://${config_service_1.configService.getValue('AZURE_B2C_DOMAIN')}/${config_service_1.configService.getValue('AZURE_TENANT_NAME')}.onmicrosoft.com/${config_service_1.configService.getValue('AZURE_POLICY_NAME')}/discovery/v2.0/keys`;
        const jwkClient = (0, jwks_rsa_1.default)({ jwksUri });
        const asyncGetSigningKeyFunction = util.promisify(jwkClient.getSigningKey);
        const key = await asyncGetSigningKeyFunction(kid);
        const cert = key.getPublicKey();
        const asyncVerify = util.promisify((token, cert, cb) => jwt.verify(token, cert, (err, ...results) => cb(err, results)));
        const results = (await asyncVerify(token, cert));
        return results;
    }
    catch (e) {
        console.log(e);
        throw new Error('Could not validate token: ' + e);
    }
};
exports.validateJWTToken = validateJWTToken;
//# sourceMappingURL=validate-jwt-token.js.map