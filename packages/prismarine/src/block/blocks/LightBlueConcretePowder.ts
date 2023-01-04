import WhiteConcretePowder, { ConcretePowderColorType } from './WhiteConcretePowder.js';

export default class lightBlueConcrete extends WhiteConcretePowder {
    public constructor() {
        super('minecraft:light_blue_concrete_powder', ConcretePowderColorType.LightBlue);
    }
}
