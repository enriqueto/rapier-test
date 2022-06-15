import { GameConstants } from "../../GameConstants";
import { GameVars } from "../../GameVars";

export class DebugGraphics extends Phaser.GameObjects.Graphics {

    private t: boolean;

    constructor(scene: Phaser.Scene) {
        
        super(scene);
    }

    public update(): void {
 
        this.clear();

        const buffers = GameVars.world.debugRender();
        let vtx = buffers.vertices;
        let cls = buffers.colors;

        const dy = GameConstants.GAME_HEIGHT;

        for (let i = 0; i < vtx.length / 4; i ++) {

            const r = Math.floor(cls[i * 8] * 256);
            const g = Math.floor(cls[i * 8 + 1] * 256);
            const b = Math.floor(cls[i * 8 + 2] * 256);

            let colorStr = Phaser.Display.Color.RGBToString(r, g, b);
            colorStr = colorStr.replace(/#/g, "0x");

            this.lineStyle(1, Number(colorStr), 1);

            const x1 = vtx[i * 4] * GameConstants.METERS_TO_PIXEL_RATIO;
            const y1 = -vtx[i * 4 + 1] * GameConstants.METERS_TO_PIXEL_RATIO + dy;
            const x2 = vtx[i * 4 + 2] * GameConstants.METERS_TO_PIXEL_RATIO;
            const y2 = -vtx[i * 4 + 3] * GameConstants.METERS_TO_PIXEL_RATIO + dy;

            this.lineBetween(x1, y1, x2, y2);

        }
    }
}
