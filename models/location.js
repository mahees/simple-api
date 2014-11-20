var mongoose = require('mongoose');

var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var LocationSchema = new Schema({
    lat : {
        type : Number,
        default : 0
    },
    lng : {
        type : Number,
        default : 0
    },
    meta : Schema.Types.Mixed
});

//LocationSchema.plugin(userPlugin, {});

LocationSchema.method({

});

LocationSchema.static({

});

module.exports = mongoose.model('Location', LocationSchema); 