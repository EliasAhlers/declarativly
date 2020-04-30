import { VirtualNode } from "../VirtualDOM";
import { Widget } from "../Widget";

export interface PropsData {
    [index: string]: any
}

export class HTMLWidget extends Widget {

    private children: Array<Widget>;

    constructor(tag: string, { children, props, style }: { children?: Array<Widget|Array<Widget>>, props?: PropsData, style?: any }) {
        super(tag, {children, props, style});
        this.children = this.node.children;
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