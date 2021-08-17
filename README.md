# error-oop

More oop error classes for nodejs.

- Full suite of node.js Error classes.
- Append stack traces from other generated Errors
- Full typescript code, provide typescript declarations
- Support CommonJS and ESModule, support tree shaking

## Install

`npm install error-oop` or `yarn add error-oop`.

## Errors

Click to know how to use them.

### Wrappered Native Errors

- [`NativeError`], alias [`Error`]
- [`NativeRangeError`], alias [`RangeError`]
- [`NativeReferenceError`], alias [`ReferenceError`]
- [`NativeSyntaxError`], alias [`SyntaxError`]
- [`NativeTypeError`], alias [`TypeError`]
- [`NativeURIError`], alias [`URIError`]

### More Useful Errors

- [`AlreadyInUseError`]
- [`AuthenticationError`]
- [`AuthenticationRequiredError`]
- [`ConnectionError`]
- [`IndexOutOfRangeError`]
- [`InvalidDataError`]
- [`InvalidOperationError`]
- [`NotFoundError`]
- [`NotImplementedError`]
- [`NotPermittedError`]
- [`NotSupportedError`]
- [`OperationCanceledError`]
- [`OutOfMemoryError`]
- [`StackOverflowError`]
- [`TimeoutError`]
- [`UnauthorizedAccessError`]
- [`UnauthorizedError`]
- Argument
    - [`ArgumentError`]
    - [`ArgumentNullError`]
    - [`ArgumentOutOfRangeError`]
- Data
    - [`DataError`]
    - [`TransactionError`]
- IO
    - [`DirectoryNotFoundError`]
    - [`DriveNotFoundError`]
    - [`EndOfStreamError`]
    - [`FileLoadError`]
    - [`FileNotFoundError`]
    - [`IOError`]
    - [`PathTooLongError`]
    - [`SocketError`]

If you want to create your own custom errors, please see [User Guide For Custom Errors].

### Errors to Support

- ValidationError
- Data
    - SQLError

<!-- link list -->

[`NativeError`]: ./docs/user-guide.native-errors.md#nativeerror
[`NativeRangeError`]: ./docs/user-guide.native-errors.md#nativerangeerror
[`NativeReferenceError`]: ./docs/user-guide.native-errors.md#nativereferenceerror
[`NativeSyntaxError`]: ./docs/user-guide.native-errors.md#nativesyntaxerror
[`NativeTypeError`]: ./docs/user-guide.native-errors.md#nativetypeerror
[`NativeURIError`]: ./docs/user-guide.native-errors.md#nativeurierror

[`Error`]: ./docs/user-guide.native-errors.md#nativeerror
[`RangeError`]: ./docs/user-guide.native-errors.md#nativerangeerror
[`ReferenceError`]: ./docs/user-guide.native-errors.md#nativereferenceerror
[`SyntaxError`]: ./docs/user-guide.native-errors.md#nativesyntaxerror
[`TypeError`]: ./docs/user-guide.native-errors.md#nativetypeerror
[`URIError`]: ./docs/user-guide.native-errors.md#nativeurierror

[`AlreadyInUseError`]: ./docs/user-guide.more-oop-errors.md#alreadyinuseerror
[`AuthenticationError`]: ./docs/user-guide.more-oop-errors.md#authenticationerror
[`AuthenticationRequiredError`]: ./docs/user-guide.more-oop-errors.md#authenticationrequirederror
[`ConnectionError`]: ./docs/user-guide.more-oop-errors.md#connectionerror
[`IndexOutOfRangeError`]: ./docs/user-guide.more-oop-errors.md#indexoutofrangeerror
[`InvalidDataError`]: ./docs/user-guide.more-oop-errors.md#invaliddataerror
[`InvalidOperationError`]: ./docs/user-guide.more-oop-errors.md#invalidoperationerror
[`NotFoundError`]: ./docs/user-guide.more-oop-errors.md#notfounderror
[`NotImplementedError`]: ./docs/user-guide.more-oop-errors.md#notimplementederror
[`NotPermittedError`]: ./docs/user-guide.more-oop-errors.md#notpermittederror
[`NotSupportedError`]: ./docs/user-guide.more-oop-errors.md#notsupportederror
[`OperationCanceledError`]: ./docs/user-guide.more-oop-errors.md#operationcancelederror
[`OutOfMemoryError`]: ./docs/user-guide.more-oop-errors.md#outofmemoryerror
[`StackOverflowError`]: ./docs/user-guide.more-oop-errors.md#stackoverflowerror
[`TimeoutError`]: ./docs/user-guide.more-oop-errors.md#timeouterror
[`UnauthorizedAccessError`]: ./docs/user-guide.more-oop-errors.md#unauthorizedaccesserror
[`UnauthorizedError`]: ./docs/user-guide.more-oop-errors.md#unauthorizederror

[`ArgumentError`]: ./docs/user-guide.more-oop-errors.md#argumenterror
[`ArgumentNullError`]: ./docs/user-guide.more-oop-errors.md#argumentnullerror
[`ArgumentOutOfRangeError`]: ./docs/user-guide.more-oop-errors.md#argumentoutofrangeerror

[`DataError`]: ./docs/user-guide.more-oop-errors.md#dataerror
[`TransactionError`]: ./docs/user-guide.more-oop-errors.md#transactionerror

[`DirectoryNotFoundError`]: ./docs/user-guide.more-oop-errors.md#directorynotfounderror
[`DriveNotFoundError`]: ./docs/user-guide.more-oop-errors.md#drivenotfounderror
[`EndOfStreamError`]: ./docs/user-guide.more-oop-errors.md#endofstreamerror
[`FileLoadError`]: ./docs/user-guide.more-oop-errors.md#fileloaderror
[`FileNotFoundError`]: ./docs/user-guide.more-oop-errors.md#filenotfounderror
[`IOError`]: ./docs/user-guide.more-oop-errors.md#ioerror
[`PathTooLongError`]: ./docs/user-guide.more-oop-errors.md#pathtoolongerror
[`SocketError`]: ./docs/user-guide.more-oop-errors.md#socketerror

[User Guide For Custom Errors]: ./docs/user-guide.custom-errors.md
