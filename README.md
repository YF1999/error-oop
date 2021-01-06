# node-errors-es

More error classes for nodejs.

- Full typescript code
- Complete typescript declarations

## Install

`npm install node-errors-es` or `yarn add node-errors-es`.

## Errors
### Common Errors

- [AlreadyInUseError](#AlreadyInUseError)
- [ArgumentError](#ArgumentError)
    - [ArgumentNullError](#ArgumentNullError)
    - [ArgumentOutOfRangeError](#ArgumentOutOfRangeError)
- [AuthenticationError](#AuthenticationError)
    - [AuthenticationRequiredError](#AuthenticationRequiredError)
- [ConnectionError](#ConnectionError)
- [Error](#Error)
- [InvalidOperationError](#InvalidOperationError)
- [IOError](#IOError)
    - [DirectoryNotFoundError](#DirectoryNotFoundError)
    - [DriveNotFoundError](#DriveNotFoundError)
    - [EndOfStreamError](#EndOfStreamError)
    - [FileLoadError](#FileLoadError)
    - [FileNotFoundError](#FileNotFoundError)
    - [PathTooLongError](#PathTooLongError)
    - [SocketError](#SocketError)
- [NotFoundError](#NotFoundError)
- [NotImplementedError](#NotImplementedError)
- [NotPermittedError](#NotPermittedError)
- [NotSupportedError](#NotSupportedError)
- [OutOfMemoryError](#OutOfMemoryError)
- [RangeError](#RangeError)
- [ReferenceError](#ReferenceError)

## How To Use
### Common Errors
#### AlreadyInUseError

Applicable when a resource is already in use, for example unique key constraints like a username.

```ts
new AlreadyInUseError(entityName: string, arg1?: string, arg2?: string, arg3?: string, ...args: string[])
```

##### Arguments

- `entityName` - The entity that owns the protected resource.
- `arg1` - A field or attribute that is already in use.
- `arg2` - A field or attribute that is already in use.
- `arg3` - A field or attribute that is already in use.
- `args` - Fields or attributes that are already in use.

##### Example

```ts
import { AlreadyInUseError } from 'node-errros-es';
throw new AlreadyInUseError('user', 'username', 'password');
```
