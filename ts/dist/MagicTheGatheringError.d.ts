import { Context } from './Context';
declare class MagicTheGatheringError extends Error {
    isMagicTheGatheringError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { MagicTheGatheringError };
