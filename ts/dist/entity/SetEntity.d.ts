import { MagicTheGatheringEntityBase } from '../MagicTheGatheringEntityBase';
import type { MagicTheGatheringSDK } from '../MagicTheGatheringSDK';
import type { Control } from '../types';
import type { SetType, SetListMatch } from '../MagicTheGatheringTypes';
declare class SetEntity extends MagicTheGatheringEntityBase<SetType> {
    constructor(client: MagicTheGatheringSDK, entopts: any);
    make(this: SetEntity): SetEntity;
    list(this: any, reqmatch?: SetListMatch, ctrl?: Control): Promise<SetEntity[]>;
}
export { SetEntity };
