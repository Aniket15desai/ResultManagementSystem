const db = require("../db/config");

module.exports = {
  add: (data, callBack) => {
    db.query(
      `INSERT INTO students(student_code, firstname, middlename, lastname, gender, course, address, class_id, date_created) values(?, ?, ?, ?, ?, ?, ?, ?, ?);`,
      [
        data.studentCode,
        data.firstName,
        data.middleName,
        data.lastName,
        data.gender,
        data.course,
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
    db.query(
      `SELECT s.*, firstname, middlename, lastname, concat(c.year,' / ',c.semester) as class,concat(firstname,' ',middlename,' ',lastname) as name FROM students s inner join classes c on c.id = s.class_id order by student_code asc;`,
      [],
      (error, result) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, result);
      }
    );
  },

  update: (data, callBack) => {
    db.query(
      `UPDATE students set student_code=?, firstname=?, middlename=?, lastname=?, gender=?, course=?, address=?, class_id=? where id=?`,
      [
        data.studentCode,
        data.firstName,
        data.middleName,
        data.lastName,
        data.gender,
        data.course,
        data.address,
        data.class_id,
        data.id,
      ],
      (error, result) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, result);
      }
    );
  },

  deleteSid: (data, callBack) => {
    db.query(`DELETE from students where id=?`, [data.id], (error, result) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, result);
    });
  },
};
