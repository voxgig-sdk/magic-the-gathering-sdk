import { CardEntity } from './entity/CardEntity';
import { SetEntity } from './entity/SetEntity';
export type * from './MagicTheGatheringTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { MagicTheGatheringEntityBase } from './MagicTheGatheringEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class MagicTheGatheringSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Card(entopts?: Record<string, any>): CardEntity;
    Set(entopts?: Record<string, any>): SetEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): MagicTheGatheringSDK;
    tester(testopts?: any, sdkopts?: any): MagicTheGatheringSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof MagicTheGatheringSDK;
export { stdutil, config, BaseFeature, MagicTheGatheringEntityBase, MagicTheGatheringSDK, SDK, };
