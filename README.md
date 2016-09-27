# Tid.js
[![npm version](https://badge.fury.io/js/tid.js.svg)](https://badge.fury.io/js/tid.js)

`tid.js` is a tiny and stupidly simple library to display how long ago something
was posted online. It's forked from [`timeago.js`][timeago] which in turn is
forked from [`jquery-timeago`][jquery-timeago].

Differences from the originals include:

- No need for jQuery (same as [`timeago.js`][timeago])
- No support for locale of any kind, it's all English
- No configuration whatsoever, add it to your site and you're done
- Super tiny size (~440 bytes minified/~350 bytes gzipped)

## Usage

Download the `tid.min.js` script and add it to your webpage and make sure your
`time` elements contains a `datetime` attribute that is parseable by JavaScript
(i.e. it must be either ISO8601 or RFC2822 formatted) and it will automatically
display the relative time since it was posted. It's just that stupidly simple.

## Installation

Add `<script src="tid.min.js"></script>`

## Name

`Tid` is simply `time` in Norwegian. And since naming is a Hard Problem in
programming I kept it very simple. :)

## License
MIT © Sondre Nilsen

[timeago]: https://github.com/hustcc/timeago.js
[jquery-timeago]: https://github.com/rmm5t/jquery-timeago
