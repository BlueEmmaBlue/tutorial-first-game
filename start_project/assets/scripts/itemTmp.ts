// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class itemTmp extends cc.Component {
    @property("number")
    id: number=0;
    @property(cc.Sprite)
    itemName: cc.Sprite = null;
    @property(cc.Sprite)
    icon: cc.Sprite = null;

    // LIFE-CYCLE CALLBACKS:

    init(data) {
        this.icon.spriteFrame = data.iconSF;
        this.itemName.spriteFrame = data.nameSF;
    }

    // onLoad () {}

    // start() {

    // }

    // update (dt) {}
}
