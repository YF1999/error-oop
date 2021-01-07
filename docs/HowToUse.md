# How To Use
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

## Error

This is roughly the same as the native Error class. It additionally supports an innerError attribute.

```ts
new Error(message?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
import { Error } from 'node-errros-es';

throw new Error('any message', innerError);
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

### Arguments

### Example

## FileNotFoundError

### Arguments

### Example

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

## NotFoundError

### Arguments

### Example

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

## RangeError

### Arguments

### Example

## ReferenceError

### Arguments

### Example
