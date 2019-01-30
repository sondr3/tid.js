/**
 * tid.js -- a tiny and stupidly simple relative time ago library
 * MIT License (c) 2016 Sondre Nilsen
 * Version: 1.1.0
 * https://tid.eons.io
 **/
(function tid() {
  // Create an array of all the measurements we'll use to display
  var measure = ["second", "minute", "hour", "day", "week", "month", "year"];
  var timeArray = [60, 60, 24, 7, 365 / 7 / 12, 12];
  var timeArrayLen = 6;

  // Black fucking magic
  function formatTime(diff) {
    var i = 0;
    diff = Math.abs(diff);

    for (; diff >= timeArray[i] && i < timeArrayLen; i++) {
      diff /= timeArray[i];
    }

    diff = parseInt(diff, 10);
    i *= 2;

    if (diff > (i === 0 ? 9 : 1)) {
      i += 1;
    }

    var unit = measure[parseInt(i / 2, 10)];
    if (diff > 1) {
      unit += "s";
    }

    return diff + " " + unit + " ago";
  }

  // Loop over every <time> element and replace the content of it with the time
  // since the content was posted
  var elements = document.getElementsByTagName("time");
  for (var i = 0; i < elements.length; i++) {
    var el = elements[i];
    // Make some pretty stupid assumptions about the input, it should be a
    // parsable date format for JavaScript, i.e. ISO8601 or RFC2822 and therefore
    // not require any special tinkering
    var date = Date.parse(el.getAttribute("datetime"));
    // Get the time difference in seconds since whatever content was posted
    // online and format it so it can be output to our site
    var output = formatTime((new Date() - date) / 1000);

    if (output) {
      el.textContent = output;
    }
  }
})();
