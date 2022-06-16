export class BaseScene extends Phaser.Scene {
    public screenLeft: number;
    public screenTop: number;
    public screenRight: number;
    public screenBottom: number;
    private _viewport: Phaser.GameObjects.Zone;


    public get Viewport() {
        return this._viewport;
    }

    constructor(config: string | Phaser.Types.Scenes.SettingsConfig) {
        super(config);
    }

    init() {
        console.log("init");

        const gameCenterX = this.scale.gameSize.width / 2;
        const gameCenterY = this.scale.gameSize.height / 2;
        this._viewport = this.add.zone(gameCenterX, gameCenterY, this.scale.gameSize.width, this.scale.gameSize.height);
        this._updateViewport();
    }

    update() {
        this._updateViewport();
    }

    _updateViewport() {
        this._viewport.setSize(
            this.scale.gameSize.width - this.scale.transformX(0) * 2,
            this.scale.gameSize.height - this.scale.transformY(0) * 2
        );
        this.screenLeft = this._viewport.getLeftCenter().x;
        this.screenRight = this._viewport.getRightCenter().x;
        this.screenTop = this._viewport.getTopCenter().y;
        this.screenBottom = this._viewport.getBottomCenter().y;
    }
}
