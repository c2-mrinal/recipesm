// export const numFormatter = (num, unit = 100000) => {
//     // var setting=localStorage.getItem('UserSettings')!='None'?JSON.parse(localStorage.getItem('UserSettings')):100000;
//     var unitVal = unit;
//     if (isNaN(num)) return num;
//     // return parseFloat(parseFloat(Math.sign(num) * ((Math.abs(num) / unitVal))).toFixed(2));
//     return parseFloat(Math.round((parseFloat(parseFloat(Math.sign(num) * ((Math.abs(num) / unitVal))).toFixed(2))) * Math.pow(10, 2)) /Math.pow(10,2)).toFixed(2);
// };
// export const excerptString = (str, count, more = '...') => {
//     return str.length > count ? str.substring(0, count) + more : str;
// }
// export const capitalize = (str) => {
//     return str.charAt(0).toUpperCase() + str.slice(1)
// }
export const titleCase = (str) => {
    if (typeof str != 'string') return str;
    str = str.toLowerCase().split(/[\s_]+/);
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}