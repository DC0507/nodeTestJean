"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const inversify_1 = require("inversify");
const jarvis_common_1 = require("jarvis-common");
const config_service_1 = require("../config/config.service");
let EmailService = class EmailService extends jarvis_common_1.EmailCoreService {
    constructor() {
        super({
            defaultFrom: config_service_1.configService.getValue('PORTAL_FROM_EMAIL'),
            defaultTo: config_service_1.configService.getValue('PORTAL_TO_EMAIL'),
            apiKey: config_service_1.configService.getValue('MAILJET_API_KEY'),
            apiSecret: config_service_1.configService.getValue('MAILJET_API_SECRET'),
            releaseEmails: config_service_1.configService.getValue('RELEASE_EMAILS') === 'true',
        });
    }
    sendHTMLEmailInternal(subject, htmlBody) {
        return super.sendHTMLEmail(this.defaultTo, subject, htmlBody);
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], EmailService);
//# sourceMappingURL=email.service.js.map