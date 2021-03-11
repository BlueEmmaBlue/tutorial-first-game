// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import game from './game';
const {ccclass, property} = cc._decorator;
@ccclass
export default class star extends cc.Component {


    @property
    pickRadius: number=0;
    @property
    game: game;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {}

    getPlayerDistance () {
        // 根据 Player 节点位置判断距离
        var playerPos = this.game.player.getPosition();
        // 根据两点位置计算两点之间距离
        var tmpPosition=cc.v2(this.node.position);
        var dist = tmpPosition.sub(playerPos).mag();
        return dist;
    };

    onPicked(){
        // 当星星被收集时，调用 Game 脚本中的接口，生成一个新的星星
        this.game.spawnNewStar();

        this.game.gainScore();
        // 然后销毁当前星星节点
        this.node.destroy();
    };

    start () {

    }

    update (dt) {
        if (this.getPlayerDistance() < this.pickRadius) {
            // 调用收集行为
            this.onPicked();
            return;
        }
        var opacityRatio = 1 - this.game.timer/this.game.starDuration;
        var minOpacity = 50;
        this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
    }
}
