// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


const { ccclass, property } = cc._decorator;

@ccclass("xx1")
export class xx1 {
    @property(cc.SpriteFrame)
    iconSF: cc.SpriteFrame = undefined;
    @property(cc.SpriteFrame)
    nameSF: cc.SpriteFrame = undefined;
}


@ccclass
export default class ItemList extends cc.Component {

    @property(xx1)
    items: xx1[] = [];

    @property(cc.Prefab)
    itemPrefab: cc.Prefab = null;


    onLoad() {
        console.log('111',this.items.length);
        for (var i = 0; i < this.items.length; ++i) {
            var item = cc.instantiate(this.itemPrefab);
            var data = this.items[i];
            this.node.addChild(item);
            console.log(data);
            item.getComponent('itemTmp').init({
                nameSF:data.nameSF,
                iconSF: data.iconSF
            });
            console.log('item',item);
        }
    }

    start() {
        console.log(this.items.length);
    }

    // update (dt) {}
}
