import { VirtualNode } from "./VirtualDOM";

export class Widget {

    protected node: VirtualNode;

    constructor() {
        this.node = {
            type: 'div',
            props: [],
            children: [],
            events: {}
        };
    }

    public getNode(): VirtualNode {
        return this.node;
    }

    public repeat(amount: number): Array<Widget> {
        let arr: Array<Widget> = [];
        for (let i = 0; i < amount; i++) {            
            arr.push(this);
        }
        return arr;
    }

    public if(check: boolean): Array<Widget> {
        return check ? [this] : [];
    }

}
