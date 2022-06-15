import RAPIER, { RigidBody } from "@dimforge/rapier2d";
import { GameConstants } from "../../GameConstants";
import { GameVars } from "../../GameVars";
import { BallActor } from "./actors/BallActor";
import { Walls } from "./actors/Walls";
import { DebugGraphics } from "./DebugGraphics";

export class BoardContainer extends Phaser.GameObjects.Container {

    private ballsContainer: Phaser.GameObjects.Container;
    private walls: Walls;
    private debugGraphics: DebugGraphics;
    private balls: BallActor[];

    constructor(scene: Phaser.Scene) {

        super(scene);

        this.x = GameConstants.GAME_WIDTH / 2;

        this.balls = [];

        this.setupWorld();

        this.ballsContainer = new Phaser.GameObjects.Container(this.scene);
        this.add(this.ballsContainer);

        this.walls = new Walls(this.scene);
        this.add(this.walls);

        this.debugGraphics = new DebugGraphics(this.scene);
        this.add(this.debugGraphics);
    }

    public update(): void {

        if (!GameVars.world) {
            return;
        }

        GameVars.world.step();

        if (this.debugGraphics) {
            this.debugGraphics.update();
        }

        for (let i = 0; i < this.balls.length; i ++) {
            const ball = this.balls[i];
            ball.update();
        }
    }

    public startGame(): void {

        for (let i = 0; i < 100; i ++) {

            const x = 2 - 4 * GameVars.prng.getRandom();
            const y = 10 + 4 * GameVars.prng.getRandom();

            this.spawnBall(x, y);
        }
    }

    private spawnBall(x: number, y: number): void {

        let rigidBodyDesc = GameVars.RAPIER.RigidBodyDesc.dynamic();
        rigidBodyDesc.setTranslation(x, y);

        const rigidBody = GameVars.world.createRigidBody(rigidBodyDesc);
        let colliderDesc = GameVars.RAPIER.ColliderDesc.ball(.25);
        colliderDesc.setRestitution(0.15);

        GameVars.world.createCollider(colliderDesc, rigidBody);

        const ball = new BallActor(this.scene, 1, rigidBody);
        this.ballsContainer.add(ball);

        this.balls.push(ball);
    }

    private removeBody(): void {

        const allBodies = GameVars.world.bodies.getAll();

        const randomBody = Phaser.Utils.Array.GetRandom(allBodies);

        GameVars.world.removeRigidBody(randomBody);
    }

    private setupWorld() {

        import(
            /* webpackMode: "eager" */
            "@dimforge/rapier2d"
        ).then(RAPIER => {

            GameVars.RAPIER = RAPIER;

            // Use the RAPIER module here.
            let gravity = { x: 0.0, y: -9.81 };
            GameVars.world = new RAPIER.World(gravity);

            // Create the ground
            const groundColliderDesc = RAPIER.ColliderDesc.cuboid(4.0, 0.1);
            GameVars.world.createCollider(groundColliderDesc);

            const leftWallColliderDesc = RAPIER.ColliderDesc.cuboid(0.1, 16);
            leftWallColliderDesc.setTranslation(-2.75, 0);
            GameVars.world.createCollider(leftWallColliderDesc);

            const rightWallColliderDesc = RAPIER.ColliderDesc.cuboid(0.1, 16);
            rightWallColliderDesc.setTranslation(2.75, 0);
            GameVars.world.createCollider(rightWallColliderDesc);

            this.startGame();
        });
    }

}
