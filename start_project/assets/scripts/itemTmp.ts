// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class itemTmp extends cc.Component {



    @property
    id: number = 0;
    @property(cc.Sprite)
    icon: cc.Sprite = null;
    @property(cc.Label)
    itemName: cc.Label = null;
    @property(cc.Label)
    itemPrice: cc.Label = null;

    // LIFE-CYCLE CALLBACKS:

    init(data) {
        this.id = data.id;
        this.icon.spriteFrame = data.iconSF;
        this.itemName.string = data.itemName;
        this.itemPrice.string = data.itemPrice;
    }


    // onLoad () {}

    start() {

    }

    // update (dt) {}
}
