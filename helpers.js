exports.convertDate = date => {
    const regexFindDash = /-/;
    if (regexFindDash.test(date)) {
        return date;
    } 
    return parseInt(date);
}

exports.isValidDate = date => {
    if ( isNaN(date) ) {
        return false;
    }
    return true;
}