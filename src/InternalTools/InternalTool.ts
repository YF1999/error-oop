import { IErrorOptions, IErrorOptionsKeys } from '../Native';

export class InternalErrorTool {
    private static _parseErrorArguments<T extends IErrorOptions, Order extends IErrorOptionsKeys<T>>(
        order: Order,
        ..._args: [] | [T] | [string, ...unknown[]]
    ) {
        if (typeof _args[0] === 'object') {
            return _args[0];
        }

        const last = _args[_args.length - 1];
        const innerError = last instanceof Error ? (last as Error) : undefined;

        const args =
            innerError === undefined
                ? (_args as [string?, ...unknown[]])
                : (_args.slice(0, -1) as [string?, ...unknown[]]);

        const len = Math.min(order.length, args.length - 1);

        const options: IErrorOptions & Record<string, unknown> = { message: args[0], innerError };
        for (let i = 0; i < len; i++) {
            options[order[i]] = args[i + 1];
        }
        return options as T;
    }

    /**
     * message: string?[, arg1: T1?[, arg2: T2?[, ..., argn: Tn?]]], innerError: Error?
     */
    public static parseErrorArguments<T extends IErrorOptions, Order extends IErrorOptionsKeys<T>>(
        order: Order,
        ...args: [] | [T] | [string, ...unknown[]] // ...args: IErrorArguments<T, Order>
    ) {
        return InternalErrorTool._parseErrorArguments(order, ...args);
    }
}
