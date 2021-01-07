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

### Arguments

### Example

## DriveNotFoundError

### Arguments

### Example

## EndOfStreamError

### Arguments

### Example

## FileLoadError

### Arguments

### Example

## FileNotFoundError

### Arguments

### Example

## PathTooLongError

### Arguments

### Example

## SocketError

### Arguments

### Example

## NotFoundError

### Arguments

### Example

## NotImplementedError

### Arguments

### Example

## NotPermittedError

### Arguments

### Example

## NotSupportedError

### Arguments

### Example

## OutOfMemoryError

### Arguments

### Example

## RangeError

### Arguments

### Example

## ReferenceError

### Arguments

### Example
