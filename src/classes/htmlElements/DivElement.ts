import { Widget } from "../Widget";
import { VirtualNode } from "../VirtualDOM";

export class DivElement extends Widget {

    private children: Array<Widget>;

    constructor({ children }: { children: Array<Widget> }) {
        super();
        this.children = children;
    }

    public getNode(): VirtualNode {
        this.node.children = this.children.map((child: Widget) => child.getNode());
        return this.node;
    }

}
