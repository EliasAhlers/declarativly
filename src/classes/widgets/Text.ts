import { Widget } from "../Widget";

export class Text extends Widget {
    
    constructor(private text:string) {
        super();
    }

    public renderHTML(): string {
        return '<p>' + this.text + '</p>';
    }

}
