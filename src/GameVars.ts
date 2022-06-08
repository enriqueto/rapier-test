export class GameVars {

    public static scaleY: number;
    public static gameData: GameData;
    public static currentScene: Phaser.Scene;
    public static initialised: boolean;
  
    public static formatNumber(value: number): string {

        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}
