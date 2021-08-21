# CHANGELOG
## error-oop v0.6.0 (2021-08-21)
### Breaking Changes

- The types of following properties are changed:
    - `NativeError.innerError`:                 `Error | undefined` -> `Error | null`
    - `NativeRangeError.innerError`:            `Error | undefined` -> `Error | null`
    - `NativeReferenceError.innerError`:        `Error | undefined` -> `Error | null`
    - `NativeSyntaxError.innerError`:           `Error | undefined` -> `Error | null`
    - `NativeTypeError.innerError`:             `Error | undefined` -> `Error | null`
    - `NativeURIError.innerError`:              `Error | undefined` -> `Error | null`
    - `ArgumentError.paramName`:                `string | undefined` -> `string | null`
    - `ArgumentOutOfRangeError.actualValue`:    `unknown | undefined` -> `unknown`
    - `FileLoadError.fileName`:                 `string | undefined` -> `string | null`
    - `FileNotFoundError.fileName`:             `string | undefined` -> `string | null`
    - `NotFoundError.entityName`:               `string | undefined` -> `string | null`

## error-oop v0.5.0 (2021-08-17)
### Features

- Add new error `InvalidDataError`
- Add enum `ErrorName`
- Add method `ErrorTool.is()`, you can use this method to determine whether an error is an instance of the specified error class if you don't want to use `a instanceof b`

### Changes

- Delete unused interface `IAlreadyInUseErrorOptions`

## error-oop v0.4.0 (2021-08-02)

Version `v0.3.0` is used by mistake, so bump version to `v0.4.0`.

### Features

- Add new constructor overloading with argument object `options` to all error classes
- You will no need to (and you cannot) inherit the abstract classes to make your own custom errors, now you can just inherit the Error series classes

```ts
class YourCustomError1 extends NativeError {}
class YourCustomError2 extends ArgumentError {}
class YourCustomError3 extends IndexOutOfRangeError {}
```

### Changes

- The type of argument `actualValue` in `ArgumentOutOfRangeError` is changed to `unknown`

### Breaking Changes

- Rename this package to `error-oop`
- The wrappered native errors are changed:
    - `ErrorPro`            -> `NativeError`
    - `RangeErrorPro`       -> `NativeRangeError`
    - `ReferenceErrorPro`   -> `NativeReferenceError`
    - `SyntaxErrorPro`      -> `NativeSyntaxError`
    - `TypeErrorPro`        -> `NativeTypeError`
    - `URIErrorPro`         -> `NativeURIError`
    - Aliases `Error`, `RangeError`, `ReferenceError`, `SyntaxError`, `TypeError` and `URIError` are still provided
- The value returned from property name of wrappered native errors are changed:
    - `Error`           -> `NativeError`
    - `RangeError`      -> `NativeRangeError`
    - `ReferenceError`  -> `NativeReferenceError`
    - `SyntaxError`     -> `NativeSyntaxError`
    - `TypeError`       -> `NativeTypeError`
    - `URIError`        -> `NativeURIError`
- Make field `_innerError` to be private field `#innerError`
- All abstract classes are deleted
    - No argument `options` any more
    - No callback `generateMessage` any more

## node-errors-pro v0.2.0 (2020-01-10)
### Features

- Support more usefull errors:
    - IndexOutOfRangeError
    - OperationCanceledError
    - UnauthorizedAccessError
    - UnauthorizedError

## node-errors-pro v0.1.0 (2021-01-08)
### Features

- Support native errors pro:
    - ErrorPro
    - RangeErrorPro
    - ReferenceErrorPro
    - SyntaxErrorPro
    - TypeErrorPro
    - URIErrorPro

- Support some more usefull errors:
    - AlreadyInUseError
    - ArgumentError
    - ArgumentNullError
    - ArgumentOutOfRangeError
    - AuthenticationError
    - AuthenticationRequiredError
    - ConnectionError
    - InvalidOperationError
    - NotFoundError
    - NotImplementedError
    - NotPermittedError
    - NotSupportedError
    - OutOfMemoryError
    - StackOverflowError
    - TimeoutError
    - Data
        - DataError
        - TransactionError
    - IO
        - IOError
        - DirectoryNotFoundError
        - DriveNotFoundError
        - EndOfStreamError
        - FileLoadError
        - FileNotFoundError
        - PathTooLongError
        - SocketError

- Support create custom errors by inheriting the existing errors
