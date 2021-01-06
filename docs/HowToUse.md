# How To Use
## AlreadyInUseError

Applicable when a resource is already in use, for example unique key constraints like a username.

```ts
new AlreadyInUseError(entityName: string, arg1?: string, arg2?: string, arg3?: string, ...args: string[])
```

### Arguments

- `entityName` - The entity that owns the protected resource.
- `arg1` - A field or attribute that is already in use.
- `arg2` - A field or attribute that is already in use.
- `arg3` - A field or attribute that is already in use.
- `args` - Fields or attributes that are already in use.

### Example

```ts
import { AlreadyInUseError } from 'node-errros-es';
throw new AlreadyInUseError('user', 'username', 'password');
```
