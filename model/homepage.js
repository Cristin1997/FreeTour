const db = require("./../config/db");

exports.getAllLineList = async function () {
    let sql = `SELECT * FROM line`;
    let data = await db.query(sql);
    return data[0]
};

exports.getTravelList = async function () {
    let sql = `SELECT * FROM travel`;
    let data = await db.query(sql);
    return data[0]
};