import { LogLevel, InvocationContext } from '@azure/functions';

function safeStringify(obj: any): string {
  try {
    return JSON.stringify(obj, Object.getOwnPropertyNames(obj), 2); // Pretty-print with 2-space indentation
  } catch (error) {
    return `[Circular Object]: ${error}`;
  }
}

export class Logger {
  private logTrace: string[] = [];

  constructor(
    private readonly functionName: string = 'unknown',
    private readonly invocationContext?: InvocationContext,
  ) {}

  private writeLog(level: LogLevel, ...optionalParams: any[]) {
    const message = `[${
      this.functionName
    }] [${level.toUpperCase()}] ${optionalParams.join(' ')}`;

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
    } else {
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
  log(...optionalParams: any[]) {
    this.writeLog('information', ...optionalParams);
  }

  warn(...optionalParams: any[]) {
    this.writeLog('warning', ...optionalParams);
  }

  debug(...optionalParams: any[]) {
    this.writeLog('debug', ...optionalParams);
  }

  info(...optionalParams: any[]) {
    this.writeLog('information', ...optionalParams);
  }

  error(...optionalParams: any[]) {
    const errors = optionalParams.map(
      (param) =>
        typeof param === 'object' && param !== null
          ? safeStringify(param)
          : param, // Leave non-objects as they are
    );
    this.writeLog('error', ...errors);
  }

  critical(...optionalParams: any[]) {
    const errors = optionalParams.map(
      (param) =>
        typeof param === 'object' && param !== null
          ? safeStringify(param)
          : param, // Leave non-objects as they are
    );
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
