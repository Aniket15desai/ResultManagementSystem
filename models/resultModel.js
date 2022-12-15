const db = require("../db/config");

module.exports = {
  add: (data, callBack) => {
    db.query(
      `INSERT INTO results(student_id, marks_percentage, class_id, date_created) values(?, ?, ?, ?);`,
      [data.studentId, data.marksPercentage, data.classId, data.dateCreated],
      (error, result) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, result);
      }
    );
  },
  addItems: (data, resultId, callBack) => {
    db.query(
      `INSERT INTO result_items(result_id, subject_id, mark, date_created) values(?, ?, ?, ?);`,
      [resultId, data.subjectId, data.mark, data.dateCreated],
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
      `SELECT r.*,concat(s.firstname,' ',s.middlename,' ',s.lastname) as name,s.student_code,concat(c.year,'-',c.semester) as class, (select count(result_id) from result_items where r.id = result_id) as subjects FROM results r inner join classes c on c.id = r.class_id inner join students s on s.id = r.student_id order by s.student_code asc;`,
      [],
      (error, result) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, result);
      }
    );
  },
  getStudent: (callBack) => {
    db.query(
      `SELECT s.*,concat(c.year,'-',c.semester) as class,concat(firstname,' ',middlename,' ',lastname) as name FROM students s inner join classes c on c.id = s.class_id order by s.student_code asc;`,
      [],
      (error, result) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, result);
      }
    );
  },
  getResultById: (data, callBack) => {
    db.query(
      `SELECT r.*,concat(s.firstname,' ',s.middlename,' ',s.lastname) as name,s.student_code,concat(c.year,'-',c.semester) as class FROM results r inner join classes c on c.id = r.class_id inner join students s on s.id = r.student_id where r.id = ?`,
      [
        data.id
      ],
      (error, result) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, result);
      }
    );
  },
  getSubjectItem: (data, callBack) => {
    db.query(
      `SELECT r.*,s.subject_code,s.subject,s.id as sid FROM result_items r inner join subjects s on s.id = r.subject_id where result_id = ? order by s.subject_code asc`,
      [
        data.id
      ],
      (error, result) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, result);
      }
    );
  },
  viewResult: (data, callBack) => {
    db.query(
      `SELECT r.*,s.subject_code,s.subject FROM result_items r inner join subjects s on s.id = r.subject_id where result_id = ?  order by s.subject_code asc`,
      [
        data.id
      ],
      (error, result) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, result);
      }
    )
  },
  viewResultStudent: (data, callBack) => {
    db.query(
      `SELECT r.*,concat(s.firstname,' ',s.middlename,' ',s.lastname) as name,s.student_code,concat(c.year,'-',c.semester) as class,s.gender FROM results r inner join classes c on c.id = r.class_id inner join students s on s.id = r.student_id where r.id = ?`,
      [
        data.id
      ],
      (error, result) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, result);
      }
    )
  }
};
