// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    @property
    jumpHeight: number = 0

    @property
    jumpDuration: number = 0

    @property
    maxMoveSpeed: number = 0

    @property
    accel: number = 0
    // LIFE-CYCLE CALLBACKS:

    runJumpAction() {
        //上升
        var jumpUp = cc.tween().by(this.jumpDuration, { y: this.jumpHeight }, { easing: 'sineOut' });
        // 下落
        var jumpDown = cc.tween().by(this.jumpDuration, { y: -this.jumpHeight }, { easing: 'sineIn' });

        // 创建一个缓动，按 jumpUp、jumpDown 的顺序执行动作
        var tween = cc.tween().sequence(jumpUp, jumpDown)
        // 不断重复
        return cc.tween().repeatForever(tween);
    };

    onLoad () {
        var jumpAction=this.runJumpAction();
        cc.tween(this.node).then(jumpAction).start()
    };

    start() {

    }

    // update (dt) {}
}
