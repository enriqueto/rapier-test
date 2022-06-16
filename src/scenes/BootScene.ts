import { GameManager } from "../GameManager";
import { Game } from "../Game";
import { GameConstants } from "../GameConstants";
import { GameVars } from "../GameVars";
import { BaseScene } from "./BaseScene";

export class BootScene extends BaseScene {

    public static currentInstance: BootScene;

    constructor() {

        super("BootScene");
    }

    public preload(): void {
        //
    }

    public create(): void {
        BootScene.currentInstance = this;
        GameManager.setCurrentScene(this);

        this.scene.setVisible(false);

        if (GameVars.currentScene.sys.game.device.os.desktop) {
            GameManager.init();
        } else {

            if (window.innerWidth > window.innerHeight) {
                document.getElementById("orientation").style.display = "block";
                document.getElementById("content").style.display = "none";
            } else {
                GameManager.init();
            }
        }
    }
}
