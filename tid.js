/**
 * tid.js -- a tiny and stupidly simple relative time ago library
 * MIT License (c) 2016 Sondre Nilsen
 * Version: 1.2.0
 * https://tid.eons.io
 **/
(function tid() {
  // All the units, their time and the result
  var unit,
    time = {
      second: 60,
      minute: 60,
      hour: 24,
      day: 7,
      week: 4.35,
      month: 12,
      year: 12
    },
    result;

  // Black fucking magic
  function formatTime(date) {
    val = 0 | date;

    for (unit in time) {
      result = val % time[unit];
      if (!(val = 0 | (val / time[unit]))) {
        return result + " " + (result - 1 ? unit + "s" : unit) + " ago";
      }
    }
  }

  // Loop over every <time> element and replace the content of it with the time
  // since the content was posted
  var elements = document.getElementsByTagName("time");
  for (let el of elements) {
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
