import { VirtualNode } from "./VirtualDOM";

export class Widget {

    protected node: VirtualNode;

    constructor() {
        this.node = {
            type: 'div',
            props: {},
            children: [],
        };
    }

    public getNode(): VirtualNode {
        return this.node;
    }

    public repeat(amount: number): Array<Widget> {
        return new Array(amount).fill(this);
    }

    public if(check: boolean): Array<Widget> {
        return check ? [this] : [];
    }

}
