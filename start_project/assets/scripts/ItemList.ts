// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


const { ccclass, property } = cc._decorator;

@ccclass
export class xx1 {
    @property()
    id: number = 0;
    @property()
    itemName: string = '';
    @property()
    itemPrice: number = 0;
    @property(cc.SpriteFrame)
    iconSF: cc.SpriteFrame = null;
}


@ccclass
export default class ItemList extends cc.Component {

    @property(xx1)
    items: xx1[] = null;

    @property(cc.Prefab)
    itemPrefab: cc.Prefab = null;


    onLoad() {
        for (var i = 0; i < this.items.length; ++i) {
            var item = cc.instantiate(this.itemPrefab);
            var data = this.items[i];
            this.node.addChild(item);
            console.log(data);
            item.getComponent('ItemTmp').init({
                id: data.id,
                itemName: data.itemName,
                itemPrice: data.itemPrice,
                iconSF: data.iconSF
            });
        }
    }

    start() {
        console.log(this.items.length);
    }

    // update (dt) {}
}
