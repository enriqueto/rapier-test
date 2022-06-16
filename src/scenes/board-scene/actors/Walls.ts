import RAPIER from "@dimforge/rapier2d";
import { GameConstants } from "../../../GameConstants";

export class Walls extends Phaser.GameObjects.Container {

    constructor(scene: Phaser.Scene) {

        super(scene);

        const color = 0x0022FF;

        let w = GameConstants.GAME_WIDTH;
        let h = 20;

        const ground = new Phaser.GameObjects.Graphics(this.scene);
        ground.fillStyle(color);
        ground.fillRect(0, 0, w, h);
        ground.x = -w / 2;
        ground.y = GameConstants.GAME_HEIGHT - h / 2;
        this.add(ground);

        w = 20;
        h = GameConstants.GAME_HEIGHT;

        const left = new Phaser.GameObjects.Graphics(this.scene);
        left.fillStyle(color);
        left.fillRect(0, 0, w, h);
        left.x = -275 - w / 2;
        left.y = 0;
        this.add(left);

        const right = new Phaser.GameObjects.Graphics(this.scene);
        right.fillStyle(color);
        right.fillRect(0, 0, w, h);
        right.x = 275 - w / 2;
        right.y = 0;
        this.add(right);

    }
}
