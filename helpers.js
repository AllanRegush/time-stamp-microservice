exports.convertDate = date => {
    const regexFindDash = /-/;
    if (regexFindDash.test(date)) {
        return date;
    } 
    return parseInt(date);
}