# User Guide For More OOP Errors

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

<!-- link list -->

[`AlreadyInUseError`]: #alreadyinuseerror
[`AuthenticationError`]: #authenticationerror
[`AuthenticationRequiredError`]: #authenticationrequirederror
[`ConnectionError`]: #connectionerror
[`IndexOutOfRangeError`]: #indexoutofrangeerror
[`InvalidDataError`]: #invaliddataerror
[`InvalidOperationError`]: #invalidoperationerror
[`NotFoundError`]: #notfounderror
[`NotImplementedError`]: #notimplementederror
[`NotPermittedError`]: #notpermittederror
[`NotSupportedError`]: #notsupportederror
[`OperationCanceledError`]: #operationcancelederror
[`OutOfMemoryError`]: #outofmemoryerror
[`StackOverflowError`]: #stackoverflowerror
[`TimeoutError`]: #timeouterror
[`UnauthorizedAccessError`]: #unauthorizedaccesserror
[`UnauthorizedError`]: #unauthorizederror

[`ArgumentError`]: #argumenterror
[`ArgumentNullError`]: #argumentnullerror
[`ArgumentOutOfRangeError`]: #argumentoutofrangeerror

[`DataError`]: #dataerror
[`TransactionError`]: #transactionerror

[`DirectoryNotFoundError`]: #directorynotfounderror
[`DriveNotFoundError`]: #drivenotfounderror
[`EndOfStreamError`]: #endofstreamerror
[`FileLoadError`]: #fileloaderror
[`FileNotFoundError`]: #filenotfounderror
[`IOError`]: #ioerror
[`PathTooLongError`]: #pathtoolongerror
[`SocketError`]: #socketerror

## AlreadyInUseError

Applicable when a resource is already in use, for example unique key constraints like a username.

```ts
new AlreadyInUseError(entityName, arg1?, arg2?, arg3?, ...args)
```

### Arguments

- `entityName` The entity that owns the protected resource.
- `arg1` A field or attribute that is already in use.
- `arg2` A field or attribute that is already in use.
- `arg3` A field or attribute that is already in use.
- `args` Fields or attributes that are already in use.

### Example

```ts
throw new AlreadyInUseError('user', 'username', 'password');
```

## AuthenticationError

Applicable when authentication fails for an authentication stream.

```ts
new AuthenticationError(message?, innerError?)
new AuthenticationError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is `IAuthenticationErrorOptions`.

```ts
interface IAuthenticationErrorOptions extends IErrorOptions {}
```

### Example

```ts
throw new AuthenticationError('Failed to authenticate');
```

## AuthenticationRequiredError

Applicable when an operation requires authentication.

```ts
new AuhenticationRequiredError(message?, innerError?)
new AuhenticationRequiredError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is `IAuthenticationRequiredErrorOptions`.

```ts
interface IAuthenticationRequiredErrorOptions extends IErrorOptions {}
```

### Example

```ts
throw new AuthenticationRequiredError('Please provide authentication');
```

## ConnectionError

Applicable when an error occurs on a connection.

```ts
new ConnectionError(message?, innerError?)
new ConnectionError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is `IConnectionErrorOptions`.

```ts
export interface IConnectionErrorOptions extends IErrorOptions {}
```

### Example

```ts
throw new ConnectionError('Database connection no longer available');
```

## IndexOutOfRangeError

Applicable when an attempt is made to access an element of an array or collection with an index that is outside its bounds.

```ts
new IndexOutOfRangeError(message?, innerError?)
new IndexOutOfRangeError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is `IIndexOutOfRangeErrorOptions`.

```ts
interface IIndexOutOfRangeErrorOptions extends IErrorOptions {}
```

### Example

```ts
throw new IndexOutOfRangeError('index out of range');
```

## InvalidDataError

Applicable when a function call or a method call is invalid for the object's current state.

```ts
new InvalidDataError(message?, innerError?)
new InvalidDataError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is `IInvalidDataErrorOptions`.

```ts
interface IInvalidDataErrorOptions extends IErrorOptions {}
```

### Example

```ts
throw new InvalidDataError('Invalid data format ...');
```

## InvalidOperationError

Applicable when a function call or a method call is invalid for the object's current state.

```ts
new InvalidOperationError(message?, innerError?)
new InvalidOperationError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is `IInvalidOperationErrorOptions`.

```ts
interface IInvalidOperationErrorOptions extends IErrorOptions {}
```

### Example

```ts
throw new InvalidOperationError('Invalid operation for ...');
```

## NotFoundError

Applicable when an attempt to retrieve data yielded no result.

```ts
new NotFoundError(message?, innerError?)
new NotFoundError(message?, fileName?, innerError?)
new NotFoundError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `entityName` The entity which is not found.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is `INotFoundErrorOptions`.

```ts
interface INotFoundErrorOptions extends IErrorOptions {
    entityName?: string;
}
```

### Example

```ts
throw new NotFoundError('username not found', 'username');
```

## NotImplementedError

Applicable when a requested method or operation is not implemented.

```ts
new NotImplementedError(message?, innerError?)
new NotImplementedError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is `INotImplementedErrorOptions`.

```ts
interface INotImplementedErrorOptions extends IErrorOptions {}
```

### Example

```ts
throw new NotImplementedError('Method is not yet implemented');
```

## NotPermittedError

Applicable when an operation is not permitted.

```ts
new NotPermittedError(message?, innerError?)
new NotPermittedError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is `INotPermittedErrorOptions`.

```ts
interface INotPermittedErrorOptions extends IErrorOptions {}
```

### Example

```ts
throw new NotPermittedError('username cannot be changed once set');
```

## NotSupportedError

Applicable when an invoked method is not supported, or when there is an attempt to read, seek, or write to a stream that does not support the invoked functionality.

```ts
new NotSupportedError(message?, innerError?)
new NotSupportedError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is `INotSupportedErrorOptions`.

```ts
interface INotSupportedErrorOptions extends IErrorOptions {}
```
### Example

```ts
throw new NotSupportedError('Not support mp3 file yet');
```

## OperationCanceledError

Applicable when an operation was canceled.

```ts
new OperationCanceledError(message?, innerError?)
new OperationCanceledError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is `IOperationCanceledErrorOptions`.

```ts
interface IOperationCanceledErrorOptions extends IErrorOptions {}
```

### Example

```ts
throw new OperationCanceledError('fetching operation was canceled by users');
```

## OutOfMemoryError

Applicable when there is not enough memory to continue the execution of a program.

```ts
new OutOfMemoryError(message?, innerError?)
new OutOfMemoryError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is `IOutOfMemoryErrorOptions`.

```ts
interface IOutOfMemoryErrorOptions extends IErrorOptions {}
```

### Example

```ts
throw new OutOfMemoryError('Maximum mem size exceeded');
```

## StackOverflowError

Applicable when the execution stack overflows because it contains too many nested method calls.

```ts
new StackOverflowError(message?, innerError?)
new StackOverflowError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is `IStackOverflowErrorOptions`.

```ts
interface IStackOverflowErrorOptions extends IErrorOptions {}
```

### Example

```ts
throw new StackOverflowError('Stack overflow detected', innerError);
```

## TimeoutError

Applicable when the time allotted for a process or operation has expired.

```ts
new TimeoutError(message?, innerError?)
new TimeoutError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is `ITimeoutErrorOptions`.

```ts
interface ITimeoutErrorOptions extends IErrorOptions {}
```

### Example

```ts
throw new TimeoutError("Timeout exceeded '470ms'");
```

## UnauthorizedAccessError

Applicable when the operating system denies access because of an I/O error or a specific type of security error.

```ts
new UnauthorizedAccessError(message?, innerError?)
new UnauthorizedAccessError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is `IUnauthorizedAccessErrorOptions`.

```ts
interface IUnauthorizedAccessErrorOptions extends IErrorOptions {}
```

### Example

```ts
throw new UnauthorizedAccessError("Opening 'package.json' operation requires elevation (run as administrator)");
```

## UnauthorizedError

Applicable when the operating system denies access because of an I/O error or a specific type of security error.

```ts
new UnauthorizedError(message?, innerError?)
new UnauthorizedError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is `IUnauthorizedErrorOptions`.

```ts
interface IUnauthorizedErrorOptions extends IErrorOptions {}
```

### Example

```ts
throw new UnauthorizedError("Opening 'package.json' operation requires elevation (run as administrator)");
```

## ArgumentError

Applicable when one of the arguments provided to a function or method is not valid.

```ts
new ArgumentError(message?, innerError?)
new ArgumentError(message?, paramName?, innerError?)
new ArgumentError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `paramName` The name of the parameter that caused the current error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is `IArgumentErrorOptions`.

```ts
interface IArgumentErrorOptions extends IErrorOptions {
    /**
     * Do not append message suffix at the end of original message.
     */
    noMessageSuffix?: boolean;
    /**
     * The name of the parameter that caused the current error.
     */
    paramName?: string;
}
```

### Example

```ts
throw new ArgumentError('Wrong parameter in xxx method.', 'parameter');
```

## ArgumentNullError

Applicable when a null reference or undefined is passed to a function or a method that does not accept it as a valid argument.

```ts
new ArgumentNullError(message?, innerError?)
new ArgumentNullError(message?, paramName?, innerError?)
new ArgumentNullError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `paramName` The name of the parameter that caused the current error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is `IArgumentNullErrorOptions`.

```ts
interface IArgumentNullErrorOptions extends IArgumentErrorOptions {}
```

### Example

```ts
throw new ArgumentNullError('Argument xxx cannot be undefined or null.', 'parameter');
```

## ArgumentOutOfRangeError

Applicable when the value of an argument is outside the allowable range of values as defined by the invoked function or method.

```ts
new ArgumentOutOfRangeError(message?, innerError?)
new ArgumentOutOfRangeError(message?, paramName?, innerError?)
new ArgumentOutOfRangeError(message?, paramName?, actualValue?, innerError?)
new ArgumentOutOfRangeError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `paramName` The name of the parameter that caused the current error.
- `actualValue` The value of the argument that causes this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is `IArgumentOutOfRangeErrorOptions`.

```ts
interface IArgumentOutOfRangeErrorOptions extends IArgumentErrorOptions {
    /**
     * The value of the argument that causes this error.
     */
    actualValue?: unknown;
}
```

### Example

```ts
throw new ArgumentOutOfRangeError("Argument 'order' must be a positive number.", 'order', order);
```

## DataError

Applicable when an error occurs on or with an external data source.

```ts
new DataError(message?, innerError?)
new DataError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is `IDataErrorOptions`.

```ts
interface IDataErrorOptions extends IErrorOptions {}
```

### Example

```ts
throw new DataError('Too many rows returned from database');
```

## TransactionError

Applicable when attempt to do work on a transaction that cannot accept new work.

```ts
new TransactionError(message?, innerError?)
new TransactionError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is `ITransactionErrorOptions`.

```ts
interface ITransactionErrorOptions extends IErrorOptions {}
```

### Example

```ts
throw new TransactionError('Transaction already complete');
```

## IOError

Applicable when an I/O error occurs.

```ts
new IOError(message?, innerError?)
new IOError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is `IIOErrorOptions`.

```ts
interface IIOErrorOptions extends IErrorOptions {}
```

### Example

```ts
throw new IOError('Could not open file');
```

## DirectoryNotFoundError

Applicable when part of a file or directory cannot be found.

```ts
new DirectoryNotFoundError(message?, innerError?)
new DirectoryNotFoundError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is `IDirectoryNotFoundErrorOptions`.

```ts
interface IDirectoryNotFoundErrorOptions extends IIOErrorOptions {}
```

### Example

```ts
throw new DirectoryNotFoundError('any message');
```

## DriveNotFoundError

Applicable when trying to access a drive or share that is not available.

```ts
new DriveNotFoundError(message?, innerError?)
new DriveNotFoundError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is `IDriveNotFoundErrorOptions`.

```ts
interface IDriveNotFoundErrorOptions extends IIOErrorOptions {}
```

### Example

```ts
throw new DriveNotFoundError('E');
```

## EndOfStreamError

Applicable when reading is attempted past the end of a stream.

```ts
new EndOfStreamError(message?, innerError?)
new EndOfStreamError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is `IEndOfStreamErrorOptions`.

```ts
interface IEndOfStreamErrorOptions extends IIOErrorOptions {}
```

### Example

```ts
throw new EndOfStreamError('EOS while reading header');
```

## FileLoadError

Applicable when a managed assembly is found but cannot be loaded.

```ts
new FileLoadError(message?, innerError?)
new FileLoadError(message?, fileName?, innerError?)
new FileLoadError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `fileName` A String containing the name of the file that was not loaded.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is `IFileLoadErrorOptions`.

```ts
interface IFileLoadErrorOptions extends IIOErrorOptions {
    /**
     * A String containing the name of the file that was not loaded.
     */
    fileName?: string;
}
```

### Example

```ts
throw new FileLoadError('Failed to load package.json', 'package.json');
```

## FileNotFoundError

Applicable when an attempt to access a file that does not exist on disk fails.

```ts
new FileNotFoundError(message?, innerError?)
new FileNotFoundError(message?, fileName?, innerError?)
new FileNotFoundError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `fileName` The full name of the file with the invalid image.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is `IFileNotFoundErrorOptions`.

```ts
interface IFileNotFoundErrorOptions extends IIOErrorOptions {
    /**
     * The full name of the file with the invalid image.
     */
    fileName?: string;
}
```

### Example

```ts
throw new FileNotFoundError('Cannot find file package.json', 'package.json');
```

## PathTooLongError

Applicable when a path or fully qualified file name is longer than the system-defined maximum length.

```ts
new PathTooLongError(message?, innerError?)
new PathTooLongError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is `IPathTooLongErrorOptions`.

```ts
export interface IPathTooLongErrorOptions extends IIOErrorOptions {}
```

### Example

```ts
throw new PathTooLongError('Path too long');
```

## SocketError

Applicable when an error occurs on a socket.

```ts
new SocketError(message?, innerError?)
new SocketError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is `ISocketErrorOptions`.

```ts
interface ISocketErrorOptions extends IIOErrorOptions {}
```

### Example

```ts
throw new SocketError('Socket no longer available');
```
