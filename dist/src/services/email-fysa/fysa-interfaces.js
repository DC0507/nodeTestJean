"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IFYSAInputSchema = exports.IFYSASubscriberInputSchema = void 0;
const zod_1 = require("zod");
// Define the schema for IFYSASubscriberInput
exports.IFYSASubscriberInputSchema = zod_1.z.object({
    subscriptionId: zod_1.z.string().optional(),
    message: zod_1.z.string().optional(),
    articleIds: zod_1.z.array(zod_1.z.string()).optional(),
    actionIds: zod_1.z.array(zod_1.z.string()).optional(),
});
// Define the schema for IFYSAInput
exports.IFYSAInputSchema = zod_1.z.object({
    message: zod_1.z.string().optional(),
    entries: zod_1.z.array(exports.IFYSASubscriberInputSchema).optional(),
});
//# sourceMappingURL=fysa-interfaces.js.map