const db = require("../db/config");

module.exports = {
    get: (callBack) => {
        db.query(`SELECT * FROM users;`, [], (error, result) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, result);
        });
    },

    update: (data, callBack) => {
        db.query(
            `UPDATE users SET firstname=?, lastname=?, username=?, password=? WHERE id=?; `,
            [data.firstname, data.lastname, data.username, data.password, data.id],
            (error, results) => {
              if (error) {
                return callBack(error);
              }
              return callBack(null, results[0]);
            }
        );
    }
}