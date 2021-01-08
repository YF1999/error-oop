# How To Use Native Errors Pro

- [ErrorPro (or Error)](#ErrorPro)
- [RangeErrorPro (or RangeError)](#RangeErrorPro)
- [ReferenceErrorPro (or ReferenceError)](#ReferenceErrorPro)
- [SyntaxErrorPro (or SyntaxError)](#SyntaxErrorPro)
- [TypeErrorPro (or TypeError)](#TypeErrorPro)
- [URIErrorPro (or URIError)](#URIErrorPro)

## ErrorPro

The `ErrorPro`, also named `Error`, is roughly the same as the native `Error` class. It additionally supports an innerError attribute.

```ts
new ErrorPro(message?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new ErrorPro('any message', innerError);
```

Or use `Error`, but don't forget importing it:

```ts
import { Error } from 'node-errors-pro';

throw new Error('any message', innerError);
```

## RangeErrorPro

Represents an error that occurs when a numeric variable or parameter is outside of its valid range.

The `RangeErrorPro`, also named `RangeError`, is roughly the same as the native `RangeError` class. It additionally supports an innerError attribute.

```ts
new RangeErrorPro(message?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new RangeErrorPro(`Value must be between ${min} and ${max}`);
```

Or use `RangeError`, but don't forget importing it:

```ts
import { RangeError } from 'node-errors-pro';

throw new RangeError(`Value must be between ${min} and ${max}`);
```

## ReferenceErrorPro

Represents an error when a non-existent variable is referenced.

The `ReferenceErrorPro`, also named `ReferenceError`, is roughly the same as the native `ReferenceError` class. It additionally supports an innerError attribute.

```ts
new ReferenceErrorPro(message?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new ReferenceErrorPro('variable xxx is not defined');
```

Or use `ReferenceError`, but don't forget importing it:

```ts
import { ReferenceError } from 'node-errors-pro';

throw new ReferenceError('variable xxx is not defined');
```

## SyntaxErrorPro

Represents an error when trying to interpret syntactically invalid code.

The `SyntaxErrorPro`, also named `SyntaxError`, is roughly the same as the native `SyntaxError` class. It additionally supports an innerError attribute.

```ts
new SyntaxErrorPro(message?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new SyntaxErrorPro("Unexpected token '('");
```

Or use `SyntaxError`, but don't forget importing it:

```ts
import { SyntaxError } from 'node-errors-pro';

throw new SyntaxError("Unexpected token '('");
```

## TypeErrorPro

Represents an error when a value is not of the expected type.

The `TypeErrorPro`, also named `TypeError`, is roughly the same as the native `TypeError` class. It additionally supports an innerError attribute.

```ts
new TypeErrorPro(message?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new TypeErrorPro("callback must be a function");
```

Or use `TypeError`, but don't forget importing it:

```ts
import { TypeError } from 'node-errors-pro';

throw new TypeError("callback must be a function");
```

## URIErrorPro

Represents an error when a value is not of the expected type.

The `URIErrorPro`, also named `URIError`, is roughly the same as the native `URIError` class. It additionally supports an innerError attribute.

```ts
new URIErrorPro(message?, innerError?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.

### Example

```ts
throw new URIErrorPro("URI malformed");
```

Or use `URIError`, but don't forget importing it:

```ts
import { URIError } from 'node-errors-pro';

throw new URIError("URI malformed");
```
