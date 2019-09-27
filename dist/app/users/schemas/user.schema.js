"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    name: { type: String, require: true },
    cpf: { type: String, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    phone: String,
    password: String,
    dataNascimento: Date
}, {
    collection: 'users',
    read: 'nearest'
});
//# sourceMappingURL=user.schema.js.map