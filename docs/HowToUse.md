# How To Use
## AlreadyInUseError

Applicable when a resource is already in use, for example unique key constraints like a username.

```ts
new AlreadyInUseError(entityName[, arg1, arg2, arg3, ...args])
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
new ArgumentError()
new ArgumentError(message[, innerError])
new ArgumentError(message[, paramName, innerError])
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
new ArgumentNullError()
new ArgumentNullError(message[, innerError])
new ArgumentNullError(message[, paramName, innerError])
```

### Arguments

- `message` The error message that explains the reason for this error.
- `paramName` The name of the parameter that caused the current error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new ArgumentNullError('Parameter xxx cannot be undefined or null.', 'parameter');
```

## ArgumentOutOfRangeError

Applicable when the value of an argument is outside the allowable range of values as defined by the invoked function or method.

```ts
new ArgumentOutOfRangeError()
new ArgumentOutOfRangeError(message[, innerError])
new ArgumentOutOfRangeError(message[, paramName, innerError])
new ArgumentOutOfRangeError(message[, paramName, actualValue, innerError])
```

### Arguments

- `message` The error message that explains the reason for this error.
- `paramName` The name of the parameter that caused the current error.
- `actualValue` The value of the argument that causes this exception.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new ArgumentOutOfRangeError("Argument 'order' must be a positive number.", 'order', order);
```
