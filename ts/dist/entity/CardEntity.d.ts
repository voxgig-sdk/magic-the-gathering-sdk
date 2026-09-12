import { MagicTheGatheringEntityBase } from '../MagicTheGatheringEntityBase';
import type { MagicTheGatheringSDK } from '../MagicTheGatheringSDK';
import type { Control } from '../types';
import type { Card, CardLoadMatch, CardListMatch } from '../MagicTheGatheringTypes';
declare class CardEntity extends MagicTheGatheringEntityBase<Card> {
    constructor(client: MagicTheGatheringSDK, entopts: any);
    make(this: CardEntity): CardEntity;
    load(this: any, reqmatch?: CardLoadMatch, ctrl?: Control): Promise<CardEntity>;
    list(this: any, reqmatch?: CardListMatch, ctrl?: Control): Promise<CardEntity[]>;
}
export { CardEntity };
