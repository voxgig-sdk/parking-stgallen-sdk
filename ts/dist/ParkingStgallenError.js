"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingStgallenError = void 0;
class ParkingStgallenError extends Error {
    isParkingStgallenError = true;
    sdk = 'ParkingStgallen';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.ParkingStgallenError = ParkingStgallenError;
//# sourceMappingURL=ParkingStgallenError.js.map