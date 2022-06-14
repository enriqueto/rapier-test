import { GameConstants } from "../../GameConstants";
import { GameManager } from "../../GameManager";
import { HUD } from "./HUD";
import { GUI } from "./GUI";
import { BoardManager } from "./BoardManager";
import { BoardContainer } from "./BoardContainer";

export class BoardScene extends Phaser.Scene {

    public static currentInstance: BoardScene;

    private gui: GUI;
    private hud: HUD;
    private boardContainer: BoardContainer;
    
    constructor() {

        super("BoardScene");
        
        BoardScene.currentInstance = this;
    }

    public create(): void {

        GameManager.setCurrentScene(this);

        BoardManager.init();

        const tmpBackground = this.add.graphics();
        tmpBackground.fillStyle(0x999966);
        tmpBackground.fillRect(0, 0, GameConstants.GAME_WIDTH, GameConstants.GAME_HEIGHT);

        this.boardContainer = new BoardContainer(this);
        this.add.existing(this.boardContainer);

        this.hud = new HUD(this);
        this.add.existing(this.hud);

        this.gui = new GUI(this);
        this.add.existing(this.gui);
    }

    public update(): void {

        this.boardContainer.update();
    }
}
