import { BlockToolType } from '../../block/BlockToolType.js';
import { ItemIdsType } from '../ItemIdsType.js';
import { ItemTieredToolType } from '../ItemTieredToolType.js';
import TieredTool from '../TieredTool.js';

export default class GoldenAxe extends TieredTool {
    public constructor() {
        super(
            {
                name: 'minecraft:golden_axe',
                id: ItemIdsType.GoldenAxe
            },
            ItemTieredToolType.Gold
        );
    }

    public getMaxDurability() {
        return 33;
    }

    public getToolType() {
        return BlockToolType.Axe;
    }
}
