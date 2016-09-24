(function tid() {
  // Create an array of all the measurements we'll use to display
  var measure = 'second,minute,hour,day,week,month,year'.split(',');
  var SEC_ARRAY = [60, 60, 24, 7, 365 / 7 / 12, 12];
  var SEC_ARRAY_LEN = 6;

  // Formats the time ago into either plural or singular
  function formatAgo(number, index) {
    var unit = measure[parseInt(index / 2, 10)];
    if (number > 1) {
      unit += 's';
    }
    return number + ' ' + unit + ' ago';
  }

  // Make some pretty stupid assumptions about the input, it should be a
  // parsable date format for JavaScript, i.e. ISO8601 or RFC2822 and therefore
  // not require any special tinkering
  function toDate(input) {
    return new Date(input);
  }

  function formatDiff(diff) {
    var i = 0;
    diff = Math.abs(diff);

    for (; diff >= SEC_ARRAY[i] && i < SEC_ARRAY_LEN; i++) {
      diff /= SEC_ARRAY[i];
    }

    diff = parseInt(diff, 10);
    i *= 2;

    if (diff > (i === 0 ? 9 : 1)) {
      i += 1;
    }
    return formatAgo(diff, i);
  }

  function diffSec(date, nowDate) {
    nowDate = nowDate ? toDate(nowDate) : new Date();
    return (nowDate - toDate(date)) / 1000;
  }

  // Loop over every <time> element in your and replace the content of if with
  // the relative time since the content was posted
  var elements = document.getElementsByTagName('time');
  for (var i = 0; i < elements.length; i++) {
    var el = elements[i];
    var date = el.getAttribute('datetime');
    var output = formatDiff(diffSec(date, new Date()));

    if (output) {
      el.textContent = output;
    }
  }
})();
