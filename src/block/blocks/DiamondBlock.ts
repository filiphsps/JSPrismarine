import Solid from '../Solid';
import { ItemTieredToolType } from '../../item/ItemTieredToolType';
import { BlockIdsType } from '../BlockIdsType';
import { BlockToolType } from '../BlockToolType';

export default class DiamondBlock extends Solid {
    constructor() {
        super({
            name: 'minecraft:diamond_block',
            id: BlockIdsType.DiamondBlock,
            hardness: 3
        });
    }

    public getToolType() {
        return BlockToolType.Pickaxe;
    }

    public getToolHarvestLevel() {
        return ItemTieredToolType.Iron;
    }

    public getBlastResistance() {
        return 6;
    }
}