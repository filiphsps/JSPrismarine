import WhiteCarpet, { CarpetColorType } from './WhiteCarpet.js';

export default class OrangeCarpet extends WhiteCarpet {
    public constructor() {
        super('minecraft:orange_carpet', CarpetColorType.Orange);
    }
}
