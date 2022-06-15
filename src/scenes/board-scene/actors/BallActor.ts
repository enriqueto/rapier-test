import RAPIER from "@dimforge/rapier2d";
import { GameConstants } from "../../../GameConstants";
import { BoardContainer } from "../BoardContainer";

export class BallActor extends Phaser.GameObjects.Container {

    public color: number;
    public rigidBody: RAPIER.RigidBody;

    private ballImg: Phaser.GameObjects.Image;

    constructor(scene: Phaser.Scene, color: number, rigidBody: RAPIER.RigidBody) {
        
        super(scene);

        this.color = color;
        this.rigidBody = rigidBody;

        this.ballImg = new Phaser.GameObjects.Image(this.scene, 0, 0, "texture_atlas_1", "ball_" + this.color);
        this.ballImg.setScale(.725);
        this.ballImg.setInteractive();
        this.ballImg.on("pointerdown", this.onDown, this);
        this.add(this.ballImg);
    }

    public update(): void {

        const p = this.rigidBody.translation();
        const r = this.rigidBody.rotation();

        this.x = p.x * GameConstants.METERS_TO_PIXEL_RATIO;
        this.y = - p.y * GameConstants.METERS_TO_PIXEL_RATIO + GameConstants.GAME_HEIGHT; 
        this.rotation = r;
    }

    private onDown(): void {

        BoardContainer.currentInstance.removeBall(this);
    }
}
