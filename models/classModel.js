const db = require("../db/config");

module.exports = {
    add: (data, callBack) => {
        db.query(
            `INSERT INTO classes(year, semester, date_created) values(?, ?, ?);`,
            [
                data.year,
                data.semester,
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
        db.query(`SELECT * FROM classes;`, [], (error, result) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, result);
        });
    },
    update: (data, callBack) => {
        db.query(
            `UPDATE classes SET year=?, semester=? WHERE id=?; `,
            [
                data.year,
                data.semester,
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
    deleted: (data, callBack) => {
        db.query(
            `DELETE from classes WHERE id=?;`,
            [
                data.id
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