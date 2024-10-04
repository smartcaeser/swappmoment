"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromNow = fromNow;
exports.toNow = toNow;
const moment_1 = require("moment");
function fromNow(date) {
    return (0, moment_1.default)(date).fromNow();
}
function toNow(date) {
    return (0, moment_1.default)(date).toNow();
}
