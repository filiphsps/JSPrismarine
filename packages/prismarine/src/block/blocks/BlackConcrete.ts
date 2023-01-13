import WhiteConcrete, { ConcreteColorType } from './WhiteConcrete.js';

export default class BlackConcrete extends WhiteConcrete {
    public constructor() {
        super('minecraft:black_concrete', ConcreteColorType.Black);
    }
}
