import { IErrorOptions } from './Types';

export type IErrorOptionsKeys<T extends IErrorOptions> = ReadonlyArray<Extract<keyof T, string>>;

type PickRest<T extends IErrorOptions, List extends unknown[]> = List extends [unknown, ...infer R]
    ? R extends IErrorOptionsKeys<T>
        ? R
        : never
    : never;

type ArgsIteration<
    Prev extends unknown[],
    T extends IErrorOptions,
    Order extends IErrorOptionsKeys<T>,
> = Order extends [infer R, ...string[]]
    ? R extends keyof T
        ? [string, ...Prev, Required<T>[R], Error?] | ArgsIteration<[...Prev, Required<T>[R]], T, PickRest<T, Order>>
        : never
    : never;

export type IErrorArguments<T extends IErrorOptions, Order extends IErrorOptionsKeys<T> = []> =
    | []
    | [T]
    | [string, Error?]
    | ArgsIteration<[], T, Order>;
