import { Widget } from "../Widget";
import { VirtualNode } from "../VirtualDOM";

export class DivElement extends Widget {

    private children: Array<Widget>;

    constructor({ children }: { children: Array<Widget> }) {
        super();
        this.children = children;
    }

    public getNode(): VirtualNode {
        this.node.children = [];
        this.children.forEach((child: Widget) => {
            if(Array.isArray(child)) {
                child.forEach((childChild: Widget) => {
                    this.node.children.push(childChild.getNode());
                });
            } else {
                this.node.children.push(child.getNode());
            }
        });
        return this.node;
    }

}
