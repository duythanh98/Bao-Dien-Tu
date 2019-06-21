var db = require('../utils/db');

module.exports = {
  all: () => {
    return db.load('select * from users');
  },
  authblog: ID => {
    
    return db.load(`select * from users  where IDuser = '${ID}' and DATEDIFF(TimeSub,CURRENT_DATE()) >= 0
  `)},

  single: id => {
    return db.load(`select * from users where IDuser = ${id}`);
  },
  
  singleByUserName: userName => {
    return db.load(`select * from users where Username = '${userName}'`);
  },

  add: entity => {
    return db.add('users', entity);
  },

  update: entity => {
    var id = entity.IDuser;
    delete entity.IDuser;
    return db.update('users', 'IDuser', entity, id);
  },

  delete: id => {
    return db.delete('users', 'IDuser', id);
  },

  addate: (name,date) => {
    return db.load(`insert into adddate (Username,EXP) values("${name}", "${date}")`);
  },
};
