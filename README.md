# regexall
jQuery extension with standards regex.

# Why?
In each project must use regular expressions to validate data and each project has different data, but in the future it will need some regular expressions that already did, but you won't remember where is that code.
That is why the regexall extension, leave to remake the code and stop repeat code.

# Quick start

Include regexall js in your html after include jQuery library
```html
<script src="regexall.js"></script>
```
then run
```js
$.regexall('email', 'myemail@gmail.com');
```

# Examples
validate email
```js
$.regexall('email', 'myemail@gmail.com');
```
validate number
```js
$.regexall('number', '1');
```

validate decimal
```js
$.regexall('decimal', '1.202');
```

validate ip
```js
$.regexall('ip', '192.168.0.1');
```

validate domain
```js
$.regexall('domain', 'http://krakeincode.com');
```

validate html tag
```js
$.regexall('htmlTag', '<mytag/>');
```
