function dateDiff(d1, d2) {
  let d = Math.abs(d1 - d2) / 1000;
  const year = Math.floor(d / (365 * 24 * 3600));
  d -= year * 365 * 24 * 3600;
  const day = Math.floor(d / (24 * 3600));
  d -= day * 24 * 3600;
  const hour = Math.floor(d / 3600);
  d -= hour * 3600;
  const minute = Math.floor(d / 60);
  return { year, day, hour, minute };
}

function timeDiffString({ year, day, hour, minute }, past = false) {
  let timeDiff = "";
  if (year == 1) {
    if (past) timeDiff += "Last year ";
    else timeDiff += "Next year ";
    return timeDiff;
  } else if (year > 1) {
    timeDiff += year.toString() + " years ";
  } else {
    if (day == 1) {
      if (past) timeDiff += "Yesterday ";
      else timeDiff += "Tomorrow ";
      return timeDiff;
    } else if (day > 1) {
      timeDiff += day.toString() + " days ";
    } else {
      if (hour == 1) {
        timeDiff += hour.toString() + " hour ";
      } else if (day > 1) {
        timeDiff += hour.toString() + " hours ";
      } else {
        if (minute == 1) {
          timeDiff += minute.toString() + " minute ";
        } else if (day > 1) {
          timeDiff += minute.toString() + " minutes ";
        }
      }
    }
  }

  return timeDiff;
}

function getDateTime(date = new Date()) {
  const today = new Date();

  let timeStr = "";
  let hours = date.getHours();
  const ampm = hours >= 12 ? "pm" : "am";
  if (hours < 1) {
    hours = 12;
  } else if (hours > 12) {
    hours = hours % 12;
  }
  timeStr = `${hours.toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")} ${ampm}`;

  let dateStr = "";
  if (
    today.getFullYear() == date.getFullYear() &&
    today.getMonth() == date.getMonth()
  ) {
    const d1 = today.getDate();
    const d2 = date.getDate();
    if (d1 - d2 == 1) {
      dateStr += "Yesterday";
    } else if (d1 - d2 == 0) {
      dateStr += "Today";
    } else {
      dateStr = date.toLocaleDateString();
    }
  } else {
    dateStr = date.toLocaleDateString();
  }

  return `${dateStr} at ${timeStr}`;
}

/**
 * Human readable elapsed or remaining time (example: 3 minutes ago)
 * @param  {Date|Number|String} date A Date object, timestamp or string parsable with Date.parse()
 * @param  {Date|Number|String} [nowDate] A Date object, timestamp or string parsable with Date.parse()
 * @param  {Intl.RelativeTimeFormat} [trf] A Intl formater
 * @return {string} Human readable elapsed or remaining time
 * @author github.com/victornpb
 * @see https://stackoverflow.com/a/67338038/938822
 */
function fromNow(date, nowDate = Date.now(), rft = new Intl.RelativeTimeFormat(undefined, { numeric: "auto" })) {
  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const WEEK = 7 * DAY;
  const YEAR = 365 * DAY;
  const MONTH = YEAR / 12;
  const intervals = [
      { ge: YEAR, divisor: YEAR, unit: 'year' },
      { ge: MONTH, divisor: MONTH, unit: 'month' },
      { ge: WEEK, divisor: WEEK, unit: 'week' },
      { ge: DAY, divisor: DAY, unit: 'day' },
      { ge: HOUR, divisor: HOUR, unit: 'hour' },
      { ge: MINUTE, divisor: MINUTE, unit: 'minute' },
      { ge: 30 * SECOND, divisor: SECOND, unit: 'seconds' },
      { ge: 0, divisor: 1, text: 'just now' },
  ];
  const now = typeof nowDate === 'object' ? nowDate.getTime() : new Date(nowDate).getTime();
  const diff = now - (typeof date === 'object' ? date : new Date(date)).getTime();
  const diffAbs = Math.abs(diff);
  for (const interval of intervals) {
      if (diffAbs >= interval.ge) {
          const x = Math.round(Math.abs(diff) / interval.divisor);
          const isFuture = diff < 0;
          return interval.unit ? rft.format(isFuture ? x : -x, interval.unit) : interval.text;
      }
  }
}

export { dateDiff, getDateTime, timeDiffString, fromNow };
