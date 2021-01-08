# How To Use Native Errors Pro
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

## RangeError

Represents an error that occurs when a numeric variable or parameter is outside of its valid range. This is roughly the same as the native RangeError class. It additionally supports an innerError attribute.

```ts
new RangeError(message?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new RangeError(`Value must be between ${min} and ${max}`);
```

## ReferenceError

Represents an error when a non-existent variable is referenced. This is roughly the same as the native ReferenceError class. It additionally supports an innerError attribute.

```ts
new ReferenceError(message?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new ReferenceError('variable xxx is not defined');
```

## SyntaxError

Represents an error when trying to interpret syntactically invalid code. This is roughly the same as the native SyntaxError class. It additionally supports an innerError attribute.

```ts
new SyntaxError(message?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new SyntaxError("Unexpected token '('");
```

## TypeError

Represents an error when a value is not of the expected type. This is roughly the same as the native TypeError class. It additionally supports an innerError attribute.

```ts
new TypeError(message?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new TypeError("callback must be a function");
```

## URIError

Represents an error when a value is not of the expected type. This is roughly the same as the native URIError class. It additionally supports an innerError attribute.

```ts
new URIError(message?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new URIError("URI malformed");
```
