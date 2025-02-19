"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const validate_jwt_token_1 = require("../utils/validate-jwt-token");
const authMiddleware = async (context, req) => {
    const token = req.headers.get('authorization');
    if (!token) {
        throw new Error('Access token is missing');
    }
    const identities = await (0, validate_jwt_token_1.validateJWTToken)(token);
    context.extraInputs.set('user', identities[0]);
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=auth.js.map