# How To Use More Useful Errors

- [AlreadyInUseError](#AlreadyInUseError)
- [ArgumentError](#ArgumentError)
- [ArgumentNullError](#ArgumentNullError)
- [ArgumentOutOfRangeError](#ArgumentOutOfRangeError)
- [AuthenticationError](#AuthenticationError)
- [AuthenticationRequiredError](#AuthenticationRequiredError)
- [ConnectionError](#ConnectionError)
- [InvalidOperationError](#InvalidOperationError)
- [NotFoundError](#NotFoundError)
- [NotImplementedError](#NotImplementedError)
- [NotPermittedError](#NotPermittedError)
- [NotSupportedError](#NotSupportedError)
- [OutOfMemoryError](#OutOfMemoryError)
- [StackOverflowError](#StackOverflowError)
- [TimeoutError](#TimeoutError)
- Data
    - [DataError](#DataError)
    - [TransactionError](#TransactionError)
- IO
    - [DirectoryNotFoundError](#DirectoryNotFoundError)
    - [DriveNotFoundError](#DriveNotFoundError)
    - [EndOfStreamError](#EndOfStreamError)
    - [FileLoadError](#FileLoadError)
    - [FileNotFoundError](#FileNotFoundError)
    - [IOError](#IOError)
    - [PathTooLongError](#PathTooLongError)
    - [SocketError](#SocketError)

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

## ArgumentError

Applicable when one of the arguments provided to a function or method is not valid.

```ts
new ArgumentError(message?, innerError?)
new ArgumentError(message?, paramName?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `paramName` The name of the parameter that caused the current error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new ArgumentError('Wrong parameter in xxx method.', 'parameter');
```

## ArgumentNullError

Applicable when a null reference or undefined is passed to a function or a method that does not accept it as a valid argument.

```ts
new ArgumentNullError(message?, innerError?)
new ArgumentNullError(message?, paramName?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `paramName` The name of the parameter that caused the current error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

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
```

### Arguments

- `message` The error message that explains the reason for this error.
- `paramName` The name of the parameter that caused the current error.
- `actualValue` The value of the argument that causes this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new ArgumentOutOfRangeError("Argument 'order' must be a positive number.", 'order', order);
```

## AuthenticationError

Applicable when authentication fails for an authentication stream.

```ts
new AuthenticationError(message?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new AuthenticationError('Failed to authenticate');
```

## AuthenticationRequiredError

Applicable when an operation requires authentication.

```ts
new AuhenticationRequiredError(message?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new AuthenticationRequiredError('Please provide authentication');
```

## ConnectionError

Applicable when an error occurs on a connection.

```ts
new ConnectionError(message?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new ConnectionError('Database connection no longer available');
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new TransactionError('Transaction already complete');
```

## InvalidOperationError

Applicable when a function call or a method call is invalid for the object's current state.

```ts
new InvalidOperationError(message?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new InvalidOperationError('Invalid operation for ...');
```

## NotFoundError

Applicable when an attempt to retrieve data yielded no result.

```ts
new NotFoundError(message?, innerError?)
new NotFoundError(message?, fileName?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `entityName` The entity which is not found.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new NotFoundError('username not found', 'username');
```

## NotImplementedError

Applicable when a requested method or operation is not implemented.

```ts
new NotImplementedError(message?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new NotImplementedError('Method is not yet implemented');
```

## NotPermittedError

Applicable when an operation is not permitted.

```ts
new NotPermittedError(message?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new NotPermittedError('username cannot be changed once set');
```

## NotSupportedError

Applicable when an invoked method is not supported, or when there is an attempt to read, seek, or write to a stream that does not support the invoked functionality.

```ts
new NotSupportedError(message?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new NotSupportedError('Not support mp3 file yet');
```

## OutOfMemoryError

Applicable when there is not enough memory to continue the execution of a program.

```ts
new OutOfMemoryError(message?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new OutOfMemoryError('Maximum mem size exceeded');
```

## StackOverflowError

Applicable when the execution stack overflows because it contains too many nested method calls.

```ts
new StackOverflowError(message?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new StackOverflowError('Stack overflow detected', innerError);
```

## TimeoutError

Applicable when the time allotted for a process or operation has expired.

```ts
new TimeoutError(message?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new TimeoutError("Timeout exceeded '470ms'");
```

## DataError

Applicable when an error occurs on or with an external data source.

```ts
new DataError(message?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new DataError('Too many rows returned from database');
```

## TransactionError

Applicable when attempt to do work on a transaction that cannot accept new work.

```ts
new TransactionError(message?, innerError?)
```

## IOError

Applicable when an I/O error occurs.

```ts
new IOError(message?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new IOError('Could not open file');
```

## DirectoryNotFoundError

Applicable when part of a file or directory cannot be found.

```ts
new DirectoryNotFoundError(message?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new DirectoryNotFoundError('any message');
```

## DriveNotFoundError

Applicable when trying to access a drive or share that is not available.

```ts
new DriveNotFoundError(message?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new DriveNotFoundError('E');
```

## EndOfStreamError

Applicable when reading is attempted past the end of a stream.

```ts
new EndOfStreamError(message?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new EndOfStreamError('EOS while reading header');
```

## FileLoadError

Applicable when a managed assembly is found but cannot be loaded.

```ts
new FileLoadError(message?, innerError?)
new FileLoadError(message?, fileName?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `fileName` A String containing the name of the file that was not loaded.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new FileLoadError('Failed to load package.json', 'package.json');
```

## FileNotFoundError

Applicable when an attempt to access a file that does not exist on disk fails.

```ts
new FileNotFoundError(message?, innerError?)
new FileNotFoundError(message?, fileName?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `fileName` The full name of the file with the invalid image.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new FileNotFoundError('Cannot find file package.json', 'package.json');
```

## PathTooLongError

Applicable when a path or fully qualified file name is longer than the system-defined maximum length.

```ts
new PathTooLongError(message?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new PathTooLongError('Path too long');
```

## SocketError

Applicable when an error occurs on a socket.

```ts
new SocketError(message?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new SocketError('Socket no longer available');
```
