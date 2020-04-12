import { Widget } from "../Widget";

export class Text extends Widget {

    constructor(text: string) {
        super();
        this.node.type = 'p';
        this.node.children = [text.toString()];
    }

}
