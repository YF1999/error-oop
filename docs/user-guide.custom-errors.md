# User Guide For Custom Errors

It's really easy to create your own custom errors by inheriting the Error series classes.

```ts
class YourCustomError1 extends NativeError {}
class YourCustomError2 extends ArgumentError {}
class YourCustomError3 extends IndexOutOfRangeError {}
```
