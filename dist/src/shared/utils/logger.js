"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
function safeStringify(obj) {
    try {
        return JSON.stringify(obj, Object.getOwnPropertyNames(obj), 2); // Pretty-print with 2-space indentation
    }
    catch (error) {
        return `[Circular Object]: ${error}`;
    }
}
class Logger {
    constructor(functionName = 'unknown', invocationContext) {
        this.functionName = functionName;
        this.invocationContext = invocationContext;
        this.logTrace = [];
    }
    writeLog(level, ...optionalParams) {
        const message = `[${this.functionName}] [${level.toUpperCase()}] ${optionalParams.join(' ')}`;
        // Store log in history
        this.logTrace.push(message);
        // Use InvocationContext if available
        if (this.invocationContext) {
            switch (level) {
                case 'trace':
                    this.invocationContext.trace(...optionalParams);
                    break;
                case 'debug':
                    this.invocationContext.debug(...optionalParams);
                    break;
                case 'information':
                    this.invocationContext.info(...optionalParams);
                    break;
                case 'warning':
                    this.invocationContext.warn(...optionalParams);
                    break;
                case 'error':
                case 'critical':
                    this.invocationContext.error(...optionalParams);
                    break;
                default:
                    this.invocationContext.log('info', ...optionalParams);
            }
        }
        else {
            // Fallback to console logging
            switch (level) {
                case 'trace':
                case 'debug':
                    console.debug(message);
                    break;
                case 'information':
                    console.info(message);
                    break;
                case 'warning':
                    console.warn(message);
                    break;
                case 'error':
                case 'critical':
                    console.error(message);
                    break;
                default:
                    console.log(message);
            }
        }
    }
    // Direct methods for logging
    log(...optionalParams) {
        this.writeLog('information', ...optionalParams);
    }
    warn(...optionalParams) {
        this.writeLog('warning', ...optionalParams);
    }
    debug(...optionalParams) {
        this.writeLog('debug', ...optionalParams);
    }
    info(...optionalParams) {
        this.writeLog('information', ...optionalParams);
    }
    error(...optionalParams) {
        const errors = optionalParams.map((param) => typeof param === 'object' && param !== null
            ? safeStringify(param)
            : param);
        this.writeLog('error', ...errors);
    }
    critical(...optionalParams) {
        const errors = optionalParams.map((param) => typeof param === 'object' && param !== null
            ? safeStringify(param)
            : param);
        this.writeLog('critical', ...errors);
    }
    // Retrieve stored logs
    getLogTrace(joinWith = '\n') {
        return this.logTrace.join(joinWith);
    }
    getLogTraceArray() {
        return this.logTrace;
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map