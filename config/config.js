let config = {
    database: {
        host: '127.0.0.1',
        user: 'root',
        password: '670413',
        database: 'test',
        port: 3306,
        multipleStatements: true
    }
};

module.exports = Object.assign(config, process.env.NODE_ENV && require('./' + process.env.NODE_ENV + '.js'));