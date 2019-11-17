// TODO AR: design controller
const helpers = require('../helpers');

exports.getStamp = (req, res) => {
    const { date_string } = req.params;
    const payload = {
        date: helpers.convertDate(date_string)
    }
    res.json(payload);
} 