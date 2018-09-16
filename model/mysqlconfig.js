var mysql = require("mysql");
var config = {
    host: '127.0.0.1',
    user: 'root',
    password: '670413',
    database: 'test',
    port: 3306
};
var pool = mysql.createPool(config);
exports.query = function (sql, params, callback) {
    pool.getConnection(function (err, conn) {
        if (err) {
            return console.log("连接数据库失败!" + err.message);
        }
        conn.query(sql, params, function (err, data) {
            if (err) {
                return console.log("查询失败" + sql + err);
            }
            callback(data);
            conn.release();
        })
    })
};