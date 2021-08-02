# User Guide For Native Errors

- [`NativeError`], alias [`Error`]
- [`NativeRangeError`], alias [`RangeError`]
- [`NativeReferenceError`], alias [`ReferenceError`]
- [`NativeSyntaxError`], alias [`SyntaxError`]
- [`NativeTypeError`], alias [`TypeError`]
- [`NativeURIError`], alias [`URIError`]

<!-- link list -->

[`NativeError`]: #nativeerror
[`NativeRangeError`]: #nativerangeerror
[`NativeReferenceError`]: #nativereferenceerror
[`NativeSyntaxError`]: #nativesyntaxerror
[`NativeTypeError`]: #nativetypeerror
[`NativeURIError`]: #nativeurierror

[`Error`]: #nativeerror
[`RangeError`]: #nativerangeerror
[`ReferenceError`]: #nativereferenceerror
[`SyntaxError`]: #nativesyntaxerror
[`TypeError`]: #nativetypeerror
[`URIError`]: #nativeurierror

[`IErrorOptions`]: #ierroroptions

## IErrorOptions

```ts
interface IErrorOptions {
    /**
     * The error message that explains the reason for this error.
     */
    message?: string;
    /**
     * The error that is the cause of the current error. Stack trace will be appended.
     */
    innerError?: Error;
}
```

## NativeError

The `NativeError` (alias `Error`) is roughly the same as the native `Error` class. It additionally supports an innerError attribute.

```ts
new NativeError(message?, innerError?)
new NativeError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is [`IErrorOptions`].

### Example

```ts
throw new NativeError('any message');
```

Or use alias `Error`, but don't forget importing it:

```ts
import { Error } from 'error-oop';

throw new Error('any message');
```

Catch a error and rethrow it as inner error:

```ts
try {
    ...
} catch (err) {
    throw new NativeError('any message', err);
}
```

## NativeRangeError

Represents an error that occurs when a numeric variable or parameter is outside of its valid range.

The `NativeRangeError` (alias `RangeError`) is roughly the same as the native `RangeError` class. It additionally supports an innerError attribute.

```ts
new NativeRangeError(message?, innerError?)
new NativeRangeError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is [`IErrorOptions`].

### Example

```ts
throw new NativeRangeError(`Value must be between ${min} and ${max}`);
```

Or use `RangeError`, but don't forget importing it:

```ts
import { RangeError } from 'error-oop';

throw new RangeError(`Value must be between ${min} and ${max}`);
```

Catch a error and rethrow it as inner error:

```ts
try {
    ...
} catch (err) {
    throw new NativeRangeError('wrong value', err);
}
```

## NativeReferenceError

Represents an error when a non-existent variable is referenced.

The `NativeReferenceError` (alias `ReferenceError`) is roughly the same as the native `ReferenceError` class. It additionally supports an innerError attribute.

```ts
new NativeReferenceError(message?, innerError?)
new NativeReferenceError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is [`IErrorOptions`].

### Example

```ts
throw new NativeReferenceError('variable xxx is not defined');
```

Or use `ReferenceError`, but don't forget importing it:

```ts
import { ReferenceError } from 'error-oop';

throw new ReferenceError('variable xxx is not defined');
```

Catch a error and rethrow it as inner error:

```ts
try {
    ...
} catch (err) {
    throw new NativeReferenceError('value is not defined', err);
}
```

## NativeSyntaxError

Represents an error when trying to interpret syntactically invalid code.

The `NativeSyntaxError` (alias `SyntaxError`) is roughly the same as the native `SyntaxError` class. It additionally supports an innerError attribute.

```ts
new NativeSyntaxError(message?, innerError?)
new NativeSyntaxError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is [`IErrorOptions`].

### Example

```ts
throw new NativeSyntaxError("Unexpected token '('");
```

Or use `SyntaxError`, but don't forget importing it:

```ts
import { SyntaxError } from 'error-oop';

throw new SyntaxError("Unexpected token '('");
```

Catch a error and rethrow it as inner error:

```ts
try {
    ...
} catch (err) {
    throw new NativeSyntaxError('Unexpected token', err);
}
```

## NativeTypeError

Represents an error when a value is not of the expected type.

The `NativeTypeError` (alias `TypeError`) is roughly the same as the native `TypeError` class. It additionally supports an innerError attribute.

```ts
new NativeTypeError(message?, innerError?)
new NativeTypeError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is [`IErrorOptions`].

### Example

```ts
throw new NativeTypeError('callback must be a function');
```

Or use `TypeError`, but don't forget importing it:

```ts
import { TypeError } from 'error-oop';

throw new TypeError('callback must be a function');
```

Catch a error and rethrow it as inner error:

```ts
try {
    ...
} catch (err) {
    throw new NativeTypeError('callback must be a function', err);
}
```

## NativeURIError

Represents an error when a value is not of the expected type.

The `NativeURIError` (alias `URIError`) is roughly the same as the native `URIError` class. It additionally supports an innerError attribute.

```ts
new NativeURIError(message?, innerError?)
new NativeURIError(options?)
```

### Arguments

- `message` The error message that explains the reason for this error.
- `innerError` The error that is the cause of the current error. Stack trace will be appended.
- `options` The constructor options. The type of this argument is [`IErrorOptions`].

### Example

```ts
throw new NativeURIError('URI malformed');
```

Or use `URIError`, but don't forget importing it:

```ts
import { URIError } from 'error-oop';

throw new URIError('URI malformed');
```

Catch a error and rethrow it as inner error:

```ts
try {
    ...
} catch (err) {
    throw new NativeURIError('URI malformed', err);
}
```
