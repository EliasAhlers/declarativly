import { Widget } from "../Widget";

export class Text extends Widget {

    constructor(text: string, style?: any ) {
        super('p', { style });
        this.node.children = [text.toString()];
    }

}
