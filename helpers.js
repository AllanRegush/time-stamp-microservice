const convertDate = date => {
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

exports.handleDateString = dateString => {
    let date;
    if (dateString.length === 0) {
    
        date = new Date();
    
    } else {
        
        dateString = convertDate(dateString);
        date = new Date(dateString);
    }

    return date;
};

exports.convertDate = convertDate;