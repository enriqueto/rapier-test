import RAPIER from "@dimforge/rapier2d";
import { PRNG } from "./utils/PRNG";

export class GameVars {

    public static scaleY: number;
    public static gameData: GameData;
    public static currentScene: Phaser.Scene;
    public static initialised: boolean;

    public static prng: PRNG;

    public static RAPIER: any;
    public static world: RAPIER.World;
  
    public static formatNumber(value: number): string {

        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}
