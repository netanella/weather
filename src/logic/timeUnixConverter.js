const moment = require('moment');

export const dayFromUnix = unixTime => { return moment.unix(unixTime).format("dddd"); };
export const dayShortFromUnix = unixTime => { return moment.unix(unixTime).format("ddd"); };
export const dateFromUnix = unixTime => { return moment.unix(unixTime).format('MMMM Do'); };
export const hourFromUnix = unixTime => { return moment.unix(unixTime).format('h A'); };