var mongoose = require('mongoose');

var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var LocationSchema = new Schema({
    title : {
        type : String,
        default : '',
        required : true
    },
    lat : {
        type : Number,
        default : 0
    },
    lng : {
        type : Number,
        default : 0
    },
    meta : Schema.Types.Mixed,
    formId : {
        type : Number,
        default : 0
    }
});

//LocationSchema.plugin(userPlugin, {});

LocationSchema.method({

});

LocationSchema.static({

});

module.exports = mongoose.model('Location', LocationSchema);
