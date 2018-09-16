'use strict';

let mysql = require('mysql2/promise');
let config = require('./config');
config.database.queryFormat = function (query, values) {
    if (!values) return query;
    return query.replace(/\:(\w+)/g, function (txt, key) {
        if (values.hasOwnProperty(key)) {
            return this.escape(values[key]);
        }
        return txt;
    }.bind(this));
};

var connect = mysql.createPool(config.database);

exports.execute = async function (sql, params) {
    if (!sql) {
        return;
    }

    let data = await connect.execute(sql, params);
    return data;
}

exports.query = async function (sql, params) {
    if (!sql) {
        return;
    }
    let data = await connect.query(sql, params);
    return data;
}
