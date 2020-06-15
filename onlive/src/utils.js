// utils by @cdeath

// what typeof should be
export function typeOf(prop, type = '') {
    const str = Object.prototype.toString.call(prop).slice(8, -1).toLowerCase();
    return type ? str === type.toLowerCase() : str;
}

// minimalistic one-liner version of https://www.npmjs.com/package/classnames
export function classNames(...rest) {
    return [...new Set(rest.filter(c => !!c).map(c => typeOf(c, 'object') ? Object.keys(c).filter(k => !!c[k]).join(' ') : c.toString()).filter(c => !!c))].join(' ');
}

// inpired by https://lodash.com/docs/#padStart
export function padStart(str = '', len = 0, char = '0') {
    return `${Array(Math.max(0, len - str.toString().length)).fill(char).join('')}${str}`;
}

export function monthName(month = 0) {
    return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][month];
}