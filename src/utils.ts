export function setNonEnumerable(obj: object, property: string): void {
    Reflect.defineProperty(obj, property, {
        configurable: true,
        enumerable: false,
        writable: true,
    });
}
