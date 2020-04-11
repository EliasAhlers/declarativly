
export interface State {
    [index: string]: any;
  }

export class Widget {

    protected element: HTMLElement;
    protected widgetState: State;

    constructor() {
        this.element = document.createElement('div');
        this.widgetState = {};
    }

    public stateUpdated(): void {}

    public render(): HTMLElement {
        return this.element;
    }

}
