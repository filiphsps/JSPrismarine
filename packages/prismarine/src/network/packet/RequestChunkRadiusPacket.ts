import DataPacket from './DataPacket.js';
import Identifiers from '../Identifiers.js';

export default class RequestChunkRadiusPacket extends DataPacket {
    public static NetID = Identifiers.RequestChunkRadiusPacket;

    public radius!: number;
    public maxRadius!: number;

    public encodePayload() {
        this.writeVarInt(this.radius);
        this.writeByte(this.maxRadius);
    }

    public decodePayload() {
        this.radius = this.readVarInt();
        this.maxRadius = this.readByte();
    }
}
