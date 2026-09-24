"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagicTheGatheringError = void 0;
class MagicTheGatheringError extends Error {
    isMagicTheGatheringError = true;
    sdk = 'MagicTheGathering';
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
exports.MagicTheGatheringError = MagicTheGatheringError;
//# sourceMappingURL=MagicTheGatheringError.js.map