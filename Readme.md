# Parse Time

  Simple utility for converting human readable time strings

## Installation

  Install with [component(1)](http://component.io):

    $ component install esundahl/parse-time

## API

## parseTime(timeString, [, format]);

```javascript
var parseTime = require('parse-time');
parseTime('1min') // => 60
parseTime('1hr', 'minutes') // => 60
```

## License

  MIT
