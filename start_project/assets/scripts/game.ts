// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class game extends cc.Component {


    @property({
        type: cc.Prefab
    })
    starPrefab: cc.Prefab=null;

    @property
    maxStarDuration: number = 0;
    @property
    minStarDuration: number = 0;

    @property
    groundX: number = 0;
    @property
    groundY: number = 0;
    @property
    score: number = 0;


    @property({
        type: cc.Node
    })
    ground: cc.Node=null;
    @property({
        type:cc.Node
    })
    player: cc.Node=null;
    // LIFE-CYCLE CALLBACKS:
    @property({
        type:cc.Label
    })
    scoreDisplay:cc.Label=null;
    timer: number=0;
    starDuration: number=0;

    onLoad () {
        this.groundY = this.ground.y + this.ground.height/2;
        this.timer = 0;
        this.starDuration = 0;
        // 生成一个新的星星
        this.spawnNewStar();
        this.score = 0;
    };

    spawnNewStar() {
        // 使用给定的模板在场景中生成一个新节点
        var newStar = cc.instantiate(this.starPrefab);
        // 将新增的节点添加到 Canvas 节点下面
        this.node.addChild(newStar);
        // 为星星设置一个随机位置
        newStar.setPosition(this.getNewStarPosition());
        newStar.getComponent('Star').game = this;
        this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
        this.timer = 0;
    };

    getNewStarPosition() {
        var randX = 0;
        // 根据地平面位置和主角跳跃高度，随机得到一个星星的 y 坐标
        var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50;
        // 根据屏幕宽度，随机得到一个星星 x 坐标
        var maxX = this.node.width/2;
        randX = (Math.random() - 0.5) * 2 * maxX;
        // 返回星星坐标
        return cc.v2(randX, randY);
    };

    gainScore() {
        this.score += 1;
        // 更新 scoreDisplay Label 的文字
        this.scoreDisplay.string = 'Score: ' + this.score;
    };

    gameOver () {
        // 停止 Player 节点的跳跃动作
        this.player.stopAllActions(); 

        // 重新加载场景 game
        cc.director.loadScene('game');
    };

    start() {

    }

    update (dt) {
        if (this.timer > this.starDuration) {
            this.gameOver();
            return;
        }

        this.timer += dt;
    }
}
