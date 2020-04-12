import { Widget } from "../Widget";

export class Text extends Widget {

    constructor({ text }: { text: string }) {
        super();
        this.node.children = [text.toString()];
    }

}
