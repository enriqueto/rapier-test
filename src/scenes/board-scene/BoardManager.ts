import { GameVars } from "../../GameVars";
import { PRNG } from "../../utils/PRNG";

export class BoardManager {

    public static init(): void {
        
        GameVars.world = null;
        GameVars.prng = new PRNG(43);
    }

    public static undo(): void {
        //
    }
}
