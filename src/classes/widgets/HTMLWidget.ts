import { VirtualNode } from "../VirtualDOM";
import { Widget } from "../Widget";

export class HTMLWidget extends Widget {

    private children: Array<Widget>;

    constructor(tag: string, { children }: { children: Array<Widget> }) {
        super();
        this.node.type = tag;
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