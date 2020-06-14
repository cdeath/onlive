export function padStart(str = '', len = 0, char = '0') {
    return `${Array(Math.max(0, len - str.toString().length)).fill(char).join('')}${str}`;
} 