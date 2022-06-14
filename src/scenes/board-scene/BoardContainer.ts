import RAPIER, { RigidBody } from "@dimforge/rapier2d";
import { GameVars } from "../../GameVars";
import { DebugGraphics } from "./DebugGraphics";

export class BoardContainer extends Phaser.GameObjects.Container {

    private rigidBody: RigidBody;
    private debugGraphics: DebugGraphics;

    private counter: number;

    constructor(scene: Phaser.Scene) {

        super(scene);

        this.counter = 0;

        this.setUpPhysics();

        this.debugGraphics = new DebugGraphics(this.scene);
        this.add(this.debugGraphics);
    }

    public update(): void {

        if (!GameVars.world) {
            return;
        }

        GameVars.world.step();

        this.debugGraphics.update();

        if (GameVars.prng.getRandom() > .975 && this.counter < 30) {
            this.spawnBox();
            this.counter ++;
        }

        if (GameVars.prng.getRandom() > .985 && this.counter > 15) {
            this.removeBody();
        }
    }

    private spawnBox(): void {

        let rigidBodyDesc = GameVars.RAPIER.RigidBodyDesc.dynamic()
            .setTranslation(0.0, 14.0);
            rigidBodyDesc.setRotation(360 * GameVars.prng.getRandom() * Math.PI / 180);
    
        const rigidBody = GameVars.world.createRigidBody(rigidBodyDesc);

        const width = .2 + .2 * GameVars.prng.getRandom();
        const height = .2 + .2 *  GameVars.prng.getRandom();

        let colliderDesc = GameVars.RAPIER.ColliderDesc.cuboid(width, height);
        let collider = GameVars.world.createCollider(colliderDesc, rigidBody);
    }

    private removeBody(): void {

        const allBodies = GameVars.world.bodies.getAll();

        const randomBody = Phaser.Utils.Array.GetRandom(allBodies);

        GameVars.world.removeRigidBody(randomBody);

        console.log("RANDOM BODY REMOVED");
    }

    private setUpPhysics() {

        import(
            /* webpackMode: "eager" */
            "@dimforge/rapier2d"
        ).then(RAPIER => {

            GameVars.RAPIER = RAPIER;

            // Use the RAPIER module here.
            let gravity = { x: 0.0, y: -9.81 };
            GameVars.world = new RAPIER.World(gravity);

            // Create the ground
            let groundColliderDesc = RAPIER.ColliderDesc.cuboid(10.0, 0.1);
            
            GameVars.world.createCollider(groundColliderDesc);

            // Create a dynamic rigid-body.
            let rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic()
                .setTranslation(0.0, 14.0);
                rigidBodyDesc.setRotation(30 * Math.PI / 180);
            this.rigidBody = GameVars.world.createRigidBody(rigidBodyDesc);

            // Create a cuboid collider attached to the dynamic rigidBody.
            let colliderDesc = RAPIER.ColliderDesc.cuboid(0.5, 0.5);
            let collider = GameVars.world.createCollider(colliderDesc, this.rigidBody);

            // Game loop. Replace by your own game loop system.
            // let gameLoop = () => {
            //     // Ste the simulation forward.  
            //     GameVars.world.step();

            //     // // Get and print the rigid-body's position.
            //     // let position = rigidBody.translation();
            //     // console.log("Rigid-body position: ", position.x, position.y);

            //     setTimeout(gameLoop, 16);
            // };

            // gameLoop();

            // console.log("bodies:", GameVars.world.bodies);
        });
    }

}
