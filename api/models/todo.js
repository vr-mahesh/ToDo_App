'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for todo object.
 */
let TodoSchema = new Schema({
    /**
     * Title of the todo.
     */
    title: {
        type: String
    },
    description: {
        type: String
    },
    dueDate: {
        type: String
    },
    time: {
        type: String
    },
    completed: {
        type: String
    }
}, {
    versionKey: false
});
// Duplicate the id field as mongoose returns _id field instead of id.
TodoSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
TodoSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('todos', TodoSchema);