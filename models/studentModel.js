const db = require("../db/config");

module.exports = {
    add: (data, callBack) => {
        db.query(
            `INSERT INTO students(student_code, firstname, middlename, lastname, gender, address, class_id, date_created) values(?, ?, ?, ?, ?, ?, ?);`,
            [
                data.studentCode,
                data.firstName,
                data.middleName,
                data.lastName,
                data.gender,
                data.address,
                data.class_id,
                data.dateCreated,
            ],
            (error, result) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, result);
            }
        );
    },
    get: (callBack) => {
        db.query(`SELECT * FROM students;`, [], (error, result) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, result);
        });
    }
}