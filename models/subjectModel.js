const db = require("../db/config");

module.exports = {
    add: (data, callBack) => {
        db.query(
            `INSERT INTO subjects(subject_code, subject, description, date_created) values(?, ?, ?, ?);`,
            [
                data.subject_code,
                data.subject,
                data.description,
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
        db.query(`SELECT * FROM subjects;`, [], (error, result) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, result);
        });
    },
    update: (data, callBack) => {
        db.query(
            `UPDATE classes SET subject_code=?, subject=?, description=? WHERE id=?; `,
            [
                data.subject_code,
                data.subject,
                data.description,
                data.id
            ],
            (error, results) => {
              if (error) {
                return callBack(error);
              }
              return callBack(null, results[0]);
            }
        );
    },
    deleteById: (data, callBack) => {
        db.query(
            `DELETE FROM subjects WHERE id = ?;`,
            [
                data.id,
            ],
            (error, results) => {
                if (error) {
                  return callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    }
}