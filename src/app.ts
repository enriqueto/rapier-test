import "phaser";

import("@dimforge/rapier2d");

import { Game } from "./Game";
import { GameConstants } from "./GameConstants";
import { BootScene } from "./scenes/BootScene";
import { PreloadScene } from "./scenes/PreloadScene";
import { BoardScene } from "./scenes/board-scene/BoardScene";
import { GameVars } from "./GameVars";
import { GameManager } from "./GameManager";

let game: Game;

window.onload = () => {
    
    const gameConfig = {

        version: GameConstants.VERSION,
        type: Phaser.AUTO,
        backgroundColor: "CCCCCC",
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            parent: "content",
            width: GameConstants.GAME_WIDTH,
            height: GameConstants.GAME_HEIGHT
        },

        scene:  [
                    BootScene, 
                    PreloadScene, 
                    BoardScene
                ]
    };

    // If compilation error here, compare Phaser definitions file of working copy (phaser.d.ts, line 48040 on 27-05-2019)
    // Also make sure to delete all *.ts files in node_modules/trailz folder
    game = new Game(gameConfig);

    window.focus();
    resize();
    window.addEventListener("resize", resize, false);
    window.addEventListener("orientationchange", checkOriention, false);
};

function resize(): void {

    const canvas = document.querySelector("canvas");
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const windowRatio = windowWidth / windowHeight;

    const gameWidth: any = game.config.width;
    const gameHeight: any = game.config.height;

    const gameRatio = gameWidth / gameHeight;
    
    if (windowRatio < gameRatio) {
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    } else {
        canvas.style.width = (windowHeight * gameRatio) + "px";
        canvas.style.height = windowHeight + "px";
    }
}

function checkOriention(): void {

    const w = window.innerWidth;
    const h = window.innerHeight;

    if (h < w) {

        if (!GameVars.initialised) {
            
            setTimeout(function() { 
                GameManager.init(); 
            }, 300);
        }

        document.getElementById("orientation").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        document.getElementById("orientation").style.display = "block";
        document.getElementById("content").style.display = "none";
    }
}
