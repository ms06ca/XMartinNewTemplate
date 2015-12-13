/*
 * API layer
 */
var mongodb = require('mongodb'),
    MongoClient = mongodb.MongoClient,
    Server = mongodb.Server,
    host = process.env.Host || '127.0.0.1',
    port = 27017,
    mongoClient = new MongoClient(new Server(host, port), {
        native_parser: true
    }),
    ObjectId = mongodb.ObjectID;

exports.findById = function (req, res) {
    'use strict';
    var id = req.params.id;
    console.log('findById: ' + id);
    mongoClient.open(function (err, mongoClient) {
        if (!err) {
            var db = mongoClient.db("ero");
            db.collection('videos', function (err, collection) {
                if (!err) {
                    collection.findOne({
                        _id: new ObjectId(id),
                        enabled: true
                    }, function (err, item) {
                        if (!err) {
                            res.jsonp(item);
                        }
                        mongoClient.close();
                    });
                }
            });
        }
    });
};

exports.findByName = function (req, res) {
    'use strict';
    var name = req.params.name;
    console.log('findByName: ' + name);
    mongoClient.open(function (err, mongoClient) {
        if (!err) {
            var db = mongoClient.db("ero");
            db.collection('videos', function (err, collection) {
                if (!err) {
                    collection.findOne({
                        name: name,
                        enabled: true
                    }, function (err, item) {
                        if (!err) {
                            res.jsonp(item);
                        }
                        mongoClient.close();
                    });
                }
            });
        }
    });
};

exports.findByCat = function (req, res) {
    'use strict';
    var cat = req.params.cat;
    console.log('findByCat: ' + cat);
    mongoClient.open(function (err, mongoClient) {
        if (!err) {
            var db = mongoClient.db("ero");
            db.collection('videos', function (err, collection) {
                if (!err) {
                    collection.findOne({
                        cat: cat,
                        enabled: true
                    }, function (err, item) {
                        if (!err) {
                            res.jsonp(item);
                        }
                        mongoClient.close();
                    });
                }
            });
        }
    });
};

exports.findAll = function (req, res) {
    'use strict';
    mongoClient.open(function (err, mongoClient) {
        if (!err) {
            var db = mongoClient.db("ero");
            db.collection('videos', function (err, collection) {
                if (!err) {
                    console.log(typeof(collection.find) === 'function');
                    collection.find({
                        enabled: true
                    }).toArray(function (err, items) {
                        if (!err) {
                            res.jsonp(items);
                        }
                        mongoClient.close();
                    });
                }
            });
        }
    });
};
