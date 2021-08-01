import { IArgumentErrorOptions } from '../ArgumentError';
import { IIOErrorOptions } from '../IO/IOError';
import { IErrorOptions, IStandardArguments } from '../Native';

export const ErrorTool = {
    parseStandardArguments<T extends IErrorOptions>(...args: IStandardArguments<T>): IErrorOptions {
        let options: IErrorOptions = {};

        if (args.length === 1) {
            if (typeof args[0] === 'object') {
                [options] = args;
            } else {
                [options.message] = args;
            }
        } else if (args.length === 2) {
            [options.message, options.innerError] = args;
        }

        return options;
    },

    parseArgumentArguments<T extends IArgumentErrorOptions>(
        ...args: [] | [T] | [string, Error?] | [string, string, Error?] | [string, string, unknown, Error?]
    ): IErrorOptions & {
        paramName?: string;
        actualValue?: unknown;
        noMessageSuffix?: boolean;
    } {
        let options: IErrorOptions & { paramName?: string; actualValue?: unknown; noMessageSuffix?: boolean } = {};

        if (args.length === 1) {
            if (typeof args[0] === 'object') {
                options = args[0];
            } else {
                options.message = args[0];
            }
        } else if (args.length === 2) {
            if (typeof args[1] === 'object') {
                [options.message, options.innerError] = args;
            } else {
                [options.message, options.paramName] = args;
            }
        } else if (args.length === 3) {
            if (args[2] instanceof Error) {
                [options.message, options.paramName, options.innerError] = args;
            } else {
                [options.message, options.paramName, options.actualValue] = args;
            }
        } else if (args.length === 4) {
            [options.message, options.paramName, options.actualValue, options.innerError] = args;
        }

        return options;
    },

    parseEntityArguments<T extends IIOErrorOptions>(
        ...args: [] | [T] | [string, Error?] | [string, string, Error?]
    ): IIOErrorOptions & { entityName?: string } {
        let options: IIOErrorOptions & { entityName?: string } = {};

        if (args.length === 1) {
            if (typeof args[0] === 'object') {
                options = args[0];
            } else {
                options.message = args[0];
            }
        } else if (args.length === 2) {
            if (typeof args[1] === 'object') {
                [options.message, options.innerError] = args;
            } else {
                [options.message, options.entityName] = args;
            }
        } else if (args.length === 3) {
            [options.message, options.entityName, options.innerError] = args;
        }

        return options;
    },

    parseFileArguments<T extends IIOErrorOptions>(
        ...args: [] | [T] | [string, Error?] | [string, string, Error?]
    ): IIOErrorOptions & { fileName?: string } {
        let options: IIOErrorOptions & { fileName?: string } = {};

        if (args.length === 1) {
            if (typeof args[0] === 'object') {
                options = args[0];
            } else {
                options.message = args[0];
            }
        } else if (args.length === 2) {
            if (typeof args[1] === 'object') {
                [options.message, options.innerError] = args;
            } else {
                [options.message, options.fileName] = args;
            }
        } else if (args.length === 3) {
            [options.message, options.fileName, options.innerError] = args;
        }

        return options;
    },
};
