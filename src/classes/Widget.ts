
export interface State {
    [index: string]: any;
  }

export class Widget {

    protected element: HTMLElement;
    protected widgetState: State;
    protected stateChanged: boolean;

    constructor() {
        this.element = document.createElement('div');
        this.widgetState = {};
        this.stateChanged = false;
    }

    public stateUpdated(): void {}

    public render(): HTMLElement {
        return this.element;
    }

    public reRender(widget: Widget): void {
        if(widget.widgetState != this.widgetState) {
            this.widgetState = widget.widgetState;
            this.stateUpdated();
        }
    }

}
