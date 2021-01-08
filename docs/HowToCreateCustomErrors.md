# How To Create Custom Errors

Each error this package provides is inherited from an abstract error class, for example, `ArgumentError` is inherited from `AbstractArgumentError`.

## Create an simple error

If `paramName` provided when constructing `ArgumentError`, the `paramName` will be appended to the `message` property.

```ts
const err = new ArgumentError('Argument xxx must be a number', 'xxx');
console.log(err.message);

// outputs "Argument xxx must be a number (Parameter 'xxx')"
```

You may want to avoid this behavior to get the original message. Just create a new error class inheriting the `AbstractArgumentError`:

```ts
class CustomArgumentError extends AbstractArgumentError {
    constructor(message: string = '', paramName?: string, innerError?: Error) {
        super({ message, paramName, innerError }, {});
    }
}
```

## Create an complex error

TODO
