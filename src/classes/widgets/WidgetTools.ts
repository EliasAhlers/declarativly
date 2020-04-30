import { Widget } from "../Widget";

export class WidgetTools {

    public static custom(callback: Function): Array<Widget> {
        let children: Array<Widget|string> = ['IGNORE_THIS'], returnVal: Array<Widget> = callback(children);

        if(returnVal)
            return returnVal;

        if(children.indexOf('IGNORE_THIS') > -1 && children.length == 1) {
            throw new Error('WidgetTools.for ERR: Did you reset the array instead of mutating(pushing elements) it without returning an array?');
        }
        children.splice(children.indexOf('IGNORE_THIS'), 1);
        return children as Array<Widget>;
    }

}
