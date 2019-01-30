<a name="1.2.0"></a>

## 1.2.0

> 2019-01-30

Updated the algorithm used to calculate the date, which resulted in an even
smaller file than before! It's now down to ~336 bytes of minified size. Also
updated the tooling to be more modern, styling is enforced with Prettier and
code style with ESlint, while minification is with Terser.

- [[`bd70dad4e2`](https://github.com/sondr3/tid.js/commit/bd70dad4e2)] - Update script to be even smaller!
- [[`62e2d92093`](https://github.com/sondr3/tid.js/commit/62e2d92093)] - Ignore VSCode folder
- [[`e8804fb4a8`](https://github.com/sondr3/tid.js/commit/e8804fb4a8)] - Add bundling and update JS version for ESlint
- [[`ee76e5b62a`](https://github.com/sondr3/tid.js/commit/ee76e5b62a)] - Add lockfile
- [[`db41441336`](https://github.com/sondr3/tid.js/commit/db41441336)] - Add terser for minifying, update scripts and minified file
- [[`d277087809`](https://github.com/sondr3/tid.js/commit/d277087809)] - Add Prettier and ESlint, remove xo, format file
- [[`baadc84256`](https://github.com/sondr3/tid.js/commit/baadc84256)] - Add homepage to package.json
- [[`07d4b09d88`](https://github.com/sondr3/tid.js/commit/07d4b09d88)] - Merge branch 'simplify'
- [[`a15e1bf30a`](https://github.com/sondr3/tid.js/commit/a15e1bf30a)] - Update size in README

<a name="1.1.0"></a>

## 1.1.0

> 2016-09-27

Simplified the file quite a bit, removed a few redundant functions that only
returned things that we could directly parse instead, mostly because of the
assumptions we made about the structure of `time` elements.

Also added `optimize-js` to make the startup time of `tid.js` faster due to how
browsers implement IIFE.

- [[`30192a4bc3`](https://github.com/sondr3/tid.js/commit/30192a4bc3)] - Update version in package.json
- [[`46dfeb60f8`](https://github.com/sondr3/tid.js/commit/46dfeb60f8)] - Add minified version of new version
- [[`e7bfa904aa`](https://github.com/sondr3/tid.js/commit/e7bfa904aa)] - Add optimize-js to make script even faster
- [[`6999936a8a`](https://github.com/sondr3/tid.js/commit/6999936a8a)] - Rename arrays for timekeeping
- [[`9b1ef21c1e`](https://github.com/sondr3/tid.js/commit/9b1ef21c1e)] - Simplify the file even more

<a name="1.0.0"></a>

## 1.0.0

> 2016-09-24

Initial release of `tid.js`, which is a tiny fork of
[`timeago.js`](https://github.com/hustcc/timeago.js) where nearly all it's
features are removed and what's left is a stupidly simple little library to
display the relative time of <time> elements.

#### Changelog:

- [[`db9da9e779`](https://github.com/sondr3/tid.js/commit/db9da9e779)] - Fix "wrong" repository link
- [[`d9a222de44`](https://github.com/sondr3/tid.js/commit/d9a222de44)] - Forgot to rename the filename in the README
- [[`f97b29fbe5`](https://github.com/sondr3/tid.js/commit/f97b29fbe5)] - Add NPM badge to README
- [[`36a86d81ec`](https://github.com/sondr3/tid.js/commit/36a86d81ec)] - Update package.json for release on NPM
- [[`4506eebab4`](https://github.com/sondr3/tid.js/commit/4506eebab4)] - Update comments
- [[`1a01222638`](https://github.com/sondr3/tid.js/commit/1a01222638)] - Forgot to update minify command for new file names
- [[`04e23ccbc6`](https://github.com/sondr3/tid.js/commit/04e23ccbc6)] - Add information about the name of tid
- [[`5511d805b0`](https://github.com/sondr3/tid.js/commit/5511d805b0)] - Rename from generic index.js to tid.js
- [[`818f76dbba`](https://github.com/sondr3/tid.js/commit/818f76dbba)] - Fix links and add license to README
- [[`2d1da46cd5`](https://github.com/sondr3/tid.js/commit/2d1da46cd5)] - Add minified version
- [[`d6c3aed123`](https://github.com/sondr3/tid.js/commit/d6c3aed123)] - Update sizes in README
- [[`db867e5f26`](https://github.com/sondr3/tid.js/commit/db867e5f26)] - Fix various style issues
- [[`0b17d2f0b5`](https://github.com/sondr3/tid.js/commit/0b17d2f0b5)] - Update README
- [[`c1045b18d5`](https://github.com/sondr3/tid.js/commit/c1045b18d5)] - Remove and rewrite most of the file
- [[`3cdc9ad879`](https://github.com/sondr3/tid.js/commit/3cdc9ad879)] - In the beginning there was darkness
