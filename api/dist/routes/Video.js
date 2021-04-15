"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const videoSchema = new mongoose_1.Schema({
    desde: {
        type: String,
        required: true,
    },
    hasta: {
        type: String,
        required: true
    },
    tea: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true,
});
exports.default = mongoose_1.model('Video', videoSchema);
