import { __decorate, __extends, __param } from "tslib";
//import EWCCheckbox from '../dist/ext-checkbox.component.js';
//inputs: (new EWCCheckbox()).properties,
//import EWCCheckbox from '@sencha/ext-web-components-modern/dist/ext-checkbox.component.js';
import { EWCCheckbox } from '@sencha/ext-web-components-modern';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './runtime/angularbase';
var ExtCheckboxComponent = /** @class */ (function (_super) {
    __extends(ExtCheckboxComponent, _super);
    function ExtCheckboxComponent(eRef, hostComponent, vc) {
        var _this = _super.call(this, eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'alignSelf', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoFitErrors', 'axisLock', 'bind', 'bodyAlign', 'border', 'bottom', 'boxLabel', 'boxLabelAlign', 'bubbleDirty', 'centered', 'checked', 'cls', 'constrainAlign', 'contentEl', 'controller', 'data', 'dataType', 'defaultListenerScope', 'dirty', 'disabled', 'displayed', 'docked', 'draggable', 'undefined', 'error', 'errorMessage', 'errorTarget', 'errorTip', 'errorTpl', 'undefined', 'undefined', 'flex', 'floated', 'focusCls', 'fullscreen', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'html', 'id', 'inline', 'undefined', 'inputType', 'inputValue', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'label', 'labelAlign', 'labelCls', 'labelMaskTap', 'labelMinWidth', 'labelTextAlign', 'labelWidth', 'labelWrap', 'left', 'listeners', 'margin', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'padding', 'plugins', 'publishes', 'readOnly', 'record', 'reference', 'relative', 'renderTo', 'required', 'requiredMessage', 'right', 'ripple', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'sideError', 'stateful', 'statefulDefaults', 'stateId', 'style', 'tabIndex', 'tipError', 'titleError', 'toFrontOnShow', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'twoWayBindable', 'ui', 'underError', 'userCls', 'userSelectable', 'validateDisabled', 'validationMessage', 'validators', 'value', 'viewModel', 'weight', 'width', 'x', 'xtype', 'y', 'zIndex',], (new EWCCheckbox()).events, ['ready', 'added', 'beforebottomchange', 'beforecenteredchange', 'beforedisabledchange', 'beforedockedchange', 'beforeheightchange', 'beforehiddenchange', 'beforehide', 'beforeleftchange', 'beforemaxHeightchange', 'beforemaxWidthchange', 'beforeminHeightchange', 'beforeminWidthchange', 'beforeorientationchange', 'beforerightchange', 'beforescrollablechange', 'beforeshow', 'beforetofront', 'beforetopchange', 'beforewidthchange', 'blur', 'bottomchange', 'centeredchange', 'change', 'check', 'click', 'destroy', 'dirtychange', 'disabledchange', 'dockedchange', 'erased', 'errorchange', 'floatingchange', 'focus', 'focusenter', 'focusleave', 'fullscreen', 'heightchange', 'hiddenchange', 'hide', 'initialize', 'keyup', 'leftchange', 'maxHeightchange', 'maxWidthchange', 'minHeightchange', 'minWidthchange', 'mousedown', 'moved', 'orientationchange', 'painted', 'paste', 'positionedchange', 'removed', 'resize', 'rightchange', 'scrollablechange', 'show', 'tofront', 'topchange', 'uncheck', 'updatedata', 'widthchange',], vc) || this;
        _this.xtype = 'checkbox';
        return _this;
    }
    ExtCheckboxComponent_1 = ExtCheckboxComponent;
    ExtCheckboxComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtCheckboxComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtCheckboxComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtCheckboxComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtCheckboxComponent_1;
    ExtCheckboxComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
        { type: ViewContainerRef }
    ]; };
    ExtCheckboxComponent = ExtCheckboxComponent_1 = __decorate([
        Component({
            selector: 'ExtCheckbox',
            inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'alignSelf', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoFitErrors', 'axisLock', 'bind', 'bodyAlign', 'border', 'bottom', 'boxLabel', 'boxLabelAlign', 'bubbleDirty', 'centered', 'checked', 'cls', 'constrainAlign', 'contentEl', 'controller', 'data', 'dataType', 'defaultListenerScope', 'dirty', 'disabled', 'displayed', 'docked', 'draggable', 'undefined', 'error', 'errorMessage', 'errorTarget', 'errorTip', 'errorTpl', 'undefined', 'undefined', 'flex', 'floated', 'focusCls', 'fullscreen', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'html', 'id', 'inline', 'undefined', 'inputType', 'inputValue', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'label', 'labelAlign', 'labelCls', 'labelMaskTap', 'labelMinWidth', 'labelTextAlign', 'labelWidth', 'labelWrap', 'left', 'listeners', 'margin', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'padding', 'plugins', 'publishes', 'readOnly', 'record', 'reference', 'relative', 'renderTo', 'required', 'requiredMessage', 'right', 'ripple', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'sideError', 'stateful', 'statefulDefaults', 'stateId', 'style', 'tabIndex', 'tipError', 'titleError', 'toFrontOnShow', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'twoWayBindable', 'ui', 'underError', 'userCls', 'userSelectable', 'validateDisabled', 'validationMessage', 'validators', 'value', 'viewModel', 'weight', 'width', 'x', 'xtype', 'y', 'zIndex',],
            outputs: ['ready', 'added', 'beforebottomchange', 'beforecenteredchange', 'beforedisabledchange', 'beforedockedchange', 'beforeheightchange', 'beforehiddenchange', 'beforehide', 'beforeleftchange', 'beforemaxHeightchange', 'beforemaxWidthchange', 'beforeminHeightchange', 'beforeminWidthchange', 'beforeorientationchange', 'beforerightchange', 'beforescrollablechange', 'beforeshow', 'beforetofront', 'beforetopchange', 'beforewidthchange', 'blur', 'bottomchange', 'centeredchange', 'change', 'check', 'click', 'destroy', 'dirtychange', 'disabledchange', 'dockedchange', 'erased', 'errorchange', 'floatingchange', 'focus', 'focusenter', 'focusleave', 'fullscreen', 'heightchange', 'hiddenchange', 'hide', 'initialize', 'keyup', 'leftchange', 'maxHeightchange', 'maxWidthchange', 'minHeightchange', 'minWidthchange', 'mousedown', 'moved', 'orientationchange', 'painted', 'paste', 'positionedchange', 'removed', 'resize', 'rightchange', 'scrollablechange', 'show', 'tofront', 'topchange', 'uncheck', 'updatedata', 'widthchange',],
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtCheckboxComponent_1; }) }],
            template: '<ng-content></ng-content>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf())
    ], ExtCheckboxComponent);
    return ExtCheckboxComponent;
}(EngBase));
export { ExtCheckboxComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCCheckbox()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0Q2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLW1vZGVybi8iLCJzb3VyY2VzIjpbInNyYy9FeHRDaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsOERBQThEO0FBQzlELHlDQUF5QztBQUN6Qyw2RkFBNkY7QUFDN0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFDSCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFDUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBU2hEO0lBQTBDLHdDQUFPO0lBQzdDLDhCQUNJLElBQWdCLEVBQ2dCLGFBQXNCLEVBQ3RELEVBQW9CO1FBSHhCLFlBS0ksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYixDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsa0JBQWtCLEVBQUMsb0JBQW9CLEVBQUMsV0FBVyxFQUFDLGFBQWEsRUFBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsRUFBQyxXQUFXLEVBQUMsZ0JBQWdCLEVBQUMsZUFBZSxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLGVBQWUsRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsZ0JBQWdCLEVBQUMsV0FBVyxFQUFDLFlBQVksRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLHNCQUFzQixFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsV0FBVyxFQUFDLFFB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O1FBSU8sV0FBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLFdBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLFFBQVEsRUFBRSxDQUFBO09BSDFCLG9CQUFvQixDQWdDaEM7SUFBRCwyQkFBQztDQUFBLEFBaENELENBQTBDLE9BQU8sR0FnQ2hEO1NBaENZLG9CQUFvQjtBQW1DakMsNkJBQTZCO0FBQzdCLGlDQUFpQztBQUNqQyxpQ0FBaUM7QUFDakMsaUZBQWlGO0FBQ2pGLGFBQWE7QUFDYixvQkFBb0I7QUFDcEIsSUFBSTtBQUNKLHlDQUF5QztBQUV6Qyw4Q0FBOEM7QUFDOUMseUJBQXlCO0FBQ3pCLDJDQUEyQztBQUMzQyxvQ0FBb0M7QUFDcEMsSUFBSTtBQUNKLDRDQUE0QztBQUM1QyxtQkFBbUI7QUFDbkIsMkNBQTJDO0FBQzNDLEdBQUc7QUFDSCxrREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBFV0NDaGVja2JveCBmcm9tICcuLi9kaXN0L2V4dC1jaGVja2JveC5jb21wb25lbnQuanMnO1xuLy9pbnB1dHM6IChuZXcgRVdDQ2hlY2tib3goKSkucHJvcGVydGllcyxcbi8vaW1wb3J0IEVXQ0NoZWNrYm94IGZyb20gJ0BzZW5jaGEvZXh0LXdlYi1jb21wb25lbnRzLW1vZGVybi9kaXN0L2V4dC1jaGVja2JveC5jb21wb25lbnQuanMnO1xuaW1wb3J0IHsgRVdDQ2hlY2tib3ggfSBmcm9tICdAc2VuY2hhL2V4dC13ZWItY29tcG9uZW50cy1tb2Rlcm4nO1xuaW1wb3J0IHtcbiAgICBIb3N0LFxuICAgIE9wdGlvbmFsLFxuICAgIFNraXBTZWxmLFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIGZvcndhcmRSZWYsXG4gICAgVmlld0NvbnRhaW5lclJlZlxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vcnVudGltZS9hbmd1bGFyYmFzZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnRXh0Q2hlY2tib3gnLFxuICAgIGlucHV0czogWydhTWUnLCAnaGVhZGVyJywgJ3JlbmRlcmVyJywgJ2xhYmVsJywnZml0VG9QYXJlbnQnLCd0YWInLCdjb25maWcnLCdwbGF0Zm9ybUNvbmZpZycsJ2V4dG5hbWUnLCd2aWV3cG9ydCcsJ2FsaWduJywncGx1Z2lucycsJ3Jlc3BvbnNpdmVDb25maWcnLCdyZXNwb25zaXZlRm9ybXVsYXMnLCdhbGlnblNlbGYnLCdhbHdheXNPblRvcCcsJ2FyaWFBdHRyaWJ1dGVzJywnYXJpYURlc2NyaWJlZEJ5JywnYXJpYUxhYmVsJywnYXJpYUxhYmVsbGVkQnknLCdhdXRvRml0RXJyb3JzJywnYXhpc0xvY2snLCdiaW5kJywnYm9keUFsaWduJywnYm9yZGVyJywnYm90dG9tJywnYm94TGFiZWwnLCdib3hMYWJlbEFsaWduJywnYnViYmxlRGlydHknLCdjZW50ZXJlZCcsJ2NoZWNrZWQnLCdjbHMnLCdjb25zdHJhaW5BbGlnbicsJ2NvbnRlbnRFbCcsJ2NvbnRyb2xsZXInLCdkYXRhJywnZGF0YVR5cGUnLCdkZWZhdWx0TGlzdGVuZXJTY29wZScsJ2RpcnR5JywnZGlzYWJsZWQnLCdkaXNwbGF5ZWQnLCdkb2NrZWQnLCdkcmFnZ2FibGUnLCd1bmRlZmluZWQnLCdlcnJvcicsJ2Vycm9yTWVzc2FnZScsJ2Vycm9yVGFyZ2V0JywnZXJyb3JUaXAnLCdlcnJvclRwbCcsJ3VuZGVmaW5lZCcsJ3VuZGVmaW5lZCcsJ2ZsZXgnLCdmbG9hdGVkJywnZm9jdXNDbHMnLCdmdWxsc2NyZWVuJywnaGVpZ2h0JywnaGlkZGVuJywnaGlkZUFuaW1hdGlvbicsJ2hpZGVNb2RlJywnaGlkZU9uTWFza1RhcCcsJ2h0bWwnLCdpZCcsJ2lubGluZScsJ3VuZGVmaW5lZCcsJ2lucHV0VHlwZScsJ2lucHV0VmFsdWUnLCdpbnN0YW5jZUNscycsJ2l0ZW1JZCcsJ2tleU1hcCcsJ2tleU1hcEVuYWJsZWQnLCdrZXlNYXBUYXJnZXQnLCdsYWJlbCcsJ2xhYmVsQWxpZ24nLCdsYWJlbENscycsJ2xhYmVsTWFza1RhcCcsJ2xhYmVsTWluV2lkdGgnLCdsYWJlbFRleHRBbGlnbicsJ2xhYmVsV2lkdGgnLCdsYWJlbFdyYXAnLCdsZWZ0JywnbGlzdGVuZXJzJywnbWFyZ2luJywnbWF4SGVpZ2h0JywnbWF4V2lkdGgnLCdtaW5IZWlnaHQnLCdtaW5XaWR0aCcsJ21vZGFsJywnbW9kZWxWYWxpZGF0aW9uJywnbmFtZScsJ25hbWVhYmxlJywncGFkZGluZycsJ3BsdWdpbnMnLCdwdWJsaXNoZXMnLCdyZWFkT25seScsJ3JlY29yZCcsJ3JlZmVyZW5jZScsJ3JlbGF0aXZlJywncmVuZGVyVG8nLCdyZXF1aXJlZCcsJ3JlcXVpcmVkTWVzc2FnZScsJ3JpZ2h0JywncmlwcGxlJywnc2Nyb2xsYWJsZScsJ3Nlc3Npb24nLCdzaGFkb3cnLCdzaGFyZWFibGVOYW1lJywnc2hpbScsJ3Nob3dBbmltYXRpb24nLCdzaWRlRXJyb3InLCdzdGF0ZWZ1bCcsJ3N0YXRlZnVsRGVmYXVsdHMnLCdzdGF0ZUlkJywnc3R5bGUnLCd0YWJJbmRleCcsJ3RpcEVycm9yJywndGl0bGVFcnJvcicsJ3RvRnJvbnRPblNob3cnLCd0b29sdGlwJywndG9wJywndG91Y2hBY3Rpb24nLCd0cGwnLCd0cGxXcml0ZU1vZGUnLCd0cmFuc2xhdGFibGUnLCd0d29XYXlCaW5kYWJsZScsJ3VpJywndW5kZXJFcnJvcicsJ3VzZXJDbHMnLCd1c2VyU2VsZWN0YWJsZScsJ3ZhbGlkYXRlRGlzYWJsZWQnLCd2YWxpZGF0aW9uTWVzc2FnZScsJ3ZhbGlkYXRvcnMnLCd2YWx1ZScsJ3ZpZXdNb2RlbCcsJ3dlaWdodCcsJ3dpZHRoJywneCcsJ3h0eXBlJywneScsJ3pJbmRleCcsXSxcbiAgICBvdXRwdXRzOiBbJ3JlYWR5JywnYWRkZWQnLCdiZWZvcmVib3R0b21jaGFuZ2UnLCdiZWZvcmVjZW50ZXJlZGNoYW5nZScsJ2JlZm9yZWRpc2FibGVkY2hhbmdlJywnYmVmb3JlZG9ja2VkY2hhbmdlJywnYmVmb3JlaGVpZ2h0Y2hhbmdlJywnYmVmb3JlaGlkZGVuY2hhbmdlJywnYmVmb3JlaGlkZScsJ2JlZm9yZWxlZnRjaGFuZ2UnLCdiZWZvcmVtYXhIZWlnaHRjaGFuZ2UnLCdiZWZvcmVtYXhXaWR0aGNoYW5nZScsJ2JlZm9yZW1pbkhlaWdodGNoYW5nZScsJ2JlZm9yZW1pbldpZHRoY2hhbmdlJywnYmVmb3Jlb3JpZW50YXRpb25jaGFuZ2UnLCdiZWZvcmVyaWdodGNoYW5nZScsJ2JlZm9yZXNjcm9sbGFibGVjaGFuZ2UnLCdiZWZvcmVzaG93JywnYmVmb3JldG9mcm9udCcsJ2JlZm9yZXRvcGNoYW5nZScsJ2JlZm9yZXdpZHRoY2hhbmdlJywnYmx1cicsJ2JvdHRvbWNoYW5nZScsJ2NlbnRlcmVkY2hhbmdlJywnY2hhbmdlJywnY2hlY2snLCdjbGljaycsJ2Rlc3Ryb3knLCdkaXJ0eWNoYW5nZScsJ2Rpc2FibGVkY2hhbmdlJywnZG9ja2VkY2hhbmdlJywnZXJhc2VkJywnZXJyb3JjaGFuZ2UnLCdmbG9hdGluZ2NoYW5nZScsJ2ZvY3VzJywnZm9jdXNlbnRlcicsJ2ZvY3VzbGVhdmUnLCdmdWxsc2NyZWVuJywnaGVpZ2h0Y2hhbmdlJywnaGlkZGVuY2hhbmdlJywnaGlkZScsJ2luaXRpYWxpemUnLCdrZXl1cCcsJ2xlZnRjaGFuZ2UnLCdtYXhIZWlnaHRjaGFuZ2UnLCdtYXhXaWR0aGNoYW5nZScsJ21pbkhlaWdodGNoYW5nZScsJ21pbldpZHRoY2hhbmdlJywnbW91c2Vkb3duJywnbW92ZWQnLCdvcmllbnRhdGlvbmNoYW5nZScsJ3BhaW50ZWQnLCdwYXN0ZScsJ3Bvc2l0aW9uZWRjaGFuZ2UnLCdyZW1vdmVkJywncmVzaXplJywncmlnaHRjaGFuZ2UnLCdzY3JvbGxhYmxlY2hhbmdlJywnc2hvdycsJ3RvZnJvbnQnLCd0b3BjaGFuZ2UnLCd1bmNoZWNrJywndXBkYXRlZGF0YScsJ3dpZHRoY2hhbmdlJyxdLFxuICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRDaGVja2JveENvbXBvbmVudCl9XSxcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dENoZWNrYm94Q29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZSxcbiAgICAgICAgdmM6IFZpZXdDb250YWluZXJSZWZcbiAgICAgICAgKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBbJ2FNZScsICdoZWFkZXInLCAncmVuZGVyZXInLCAnbGFiZWwnLCdmaXRUb1BhcmVudCcsJ3RhYicsJ2NvbmZpZycsJ3BsYXRmb3JtQ29uZmlnJywnZXh0bmFtZScsJ3ZpZXdwb3J0JywnYWxpZ24nLCdwbHVnaW5zJywncmVzcG9uc2l2ZUNvbmZpZycsJ3Jlc3BvbnNpdmVGb3JtdWxhcycsJ2FsaWduU2VsZicsJ2Fsd2F5c09uVG9wJywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2F1dG9GaXRFcnJvcnMnLCdheGlzTG9jaycsJ2JpbmQnLCdib2R5QWxpZ24nLCdib3JkZXInLCdib3R0b20nLCdib3hMYWJlbCcsJ2JveExhYmVsQWxpZ24nLCdidWJibGVEaXJ0eScsJ2NlbnRlcmVkJywnY2hlY2tlZCcsJ2NscycsJ2NvbnN0cmFpbkFsaWduJywnY29udGVudEVsJywnY29udHJvbGxlcicsJ2RhdGEnLCdkYXRhVHlwZScsJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJywnZGlydHknLCdkaXNhYmxlZCcsJ2Rpc3BsYXllZCcsJ2RvY2tlZCcsJ2RyYWdnYWJsZScsJ3VuZGVmaW5lZCcsJ2Vycm9yJywnZXJyb3JNZXNzYWdlJywnZXJyb3JUYXJnZXQnLCdlcnJvclRpcCcsJ2Vycm9yVHBsJywndW5kZWZpbmVkJywndW5kZWZpbmVkJywnZmxleCcsJ2Zsb2F0ZWQnLCdmb2N1c0NscycsJ2Z1bGxzY3JlZW4nLCdoZWlnaHQnLCdoaWRkZW4nLCdoaWRlQW5pbWF0aW9uJywnaGlkZU1vZGUnLCdoaWRlT25NYXNrVGFwJywnaHRtbCcsJ2lkJywnaW5saW5lJywndW5kZWZpbmVkJywnaW5wdXRUeXBlJywnaW5wdXRWYWx1ZScsJ2luc3RhbmNlQ2xzJywnaXRlbUlkJywna2V5TWFwJywna2V5TWFwRW5hYmxlZCcsJ2tleU1hcFRhcmdldCcsJ2xhYmVsJywnbGFiZWxBbGlnbicsJ2xhYmVsQ2xzJywnbGFiZWxNYXNrVGFwJywnbGFiZWxNaW5XaWR0aCcsJ2xhYmVsVGV4dEFsaWduJywnbGFiZWxXaWR0aCcsJ2xhYmVsV3JhcCcsJ2xlZnQnLCdsaXN0ZW5lcnMnLCdtYXJnaW4nLCdtYXhIZWlnaHQnLCdtYXhXaWR0aCcsJ21pbkhlaWdodCcsJ21pbldpZHRoJywnbW9kYWwnLCdtb2RlbFZhbGlkYXRpb24nLCduYW1lJywnbmFtZWFibGUnLCdwYWRkaW5nJywncGx1Z2lucycsJ3B1Ymxpc2hlcycsJ3JlYWRPbmx5JywncmVjb3JkJywncmVmZXJlbmNlJywncmVsYXRpdmUnLCdyZW5kZXJUbycsJ3JlcXVpcmVkJywncmVxdWlyZWRNZXNzYWdlJywncmlnaHQnLCdyaXBwbGUnLCdzY3JvbGxhYmxlJywnc2Vzc2lvbicsJ3NoYWRvdycsJ3NoYXJlYWJsZU5hbWUnLCdzaGltJywnc2hvd0FuaW1hdGlvbicsJ3NpZGVFcnJvcicsJ3N0YXRlZnVsJywnc3RhdGVmdWxEZWZhdWx0cycsJ3N0YXRlSWQnLCdzdHlsZScsJ3RhYkluZGV4JywndGlwRXJyb3InLCd0aXRsZUVycm9yJywndG9Gcm9udE9uU2hvdycsJ3Rvb2x0aXAnLCd0b3AnLCd0b3VjaEFjdGlvbicsJ3RwbCcsJ3RwbFdyaXRlTW9kZScsJ3RyYW5zbGF0YWJsZScsJ3R3b1dheUJpbmRhYmxlJywndWknLCd1bmRlckVycm9yJywndXNlckNscycsJ3VzZXJTZWxlY3RhYmxlJywndmFsaWRhdGVEaXNhYmxlZCcsJ3ZhbGlkYXRpb25NZXNzYWdlJywndmFsaWRhdG9ycycsJ3ZhbHVlJywndmlld01vZGVsJywnd2VpZ2h0Jywnd2lkdGgnLCd4JywneHR5cGUnLCd5JywnekluZGV4JyxdLFxuICAgICAgICAgICAgKG5ldyBFV0NDaGVja2JveCgpKS5ldmVudHMsXG4gICAgICAgICAgICBbJ3JlYWR5JywnYWRkZWQnLCdiZWZvcmVib3R0b21jaGFuZ2UnLCdiZWZvcmVjZW50ZXJlZGNoYW5nZScsJ2JlZm9yZWRpc2FibGVkY2hhbmdlJywnYmVmb3JlZG9ja2VkY2hhbmdlJywnYmVmb3JlaGVpZ2h0Y2hhbmdlJywnYmVmb3JlaGlkZGVuY2hhbmdlJywnYmVmb3JlaGlkZScsJ2JlZm9yZWxlZnRjaGFuZ2UnLCdiZWZvcmVtYXhIZWlnaHRjaGFuZ2UnLCdiZWZvcmVtYXhXaWR0aGNoYW5nZScsJ2JlZm9yZW1pbkhlaWdodGNoYW5nZScsJ2JlZm9yZW1pbldpZHRoY2hhbmdlJywnYmVmb3Jlb3JpZW50YXRpb25jaGFuZ2UnLCdiZWZvcmVyaWdodGNoYW5nZScsJ2JlZm9yZXNjcm9sbGFibGVjaGFuZ2UnLCdiZWZvcmVzaG93JywnYmVmb3JldG9mcm9udCcsJ2JlZm9yZXRvcGNoYW5nZScsJ2JlZm9yZXdpZHRoY2hhbmdlJywnYmx1cicsJ2JvdHRvbWNoYW5nZScsJ2NlbnRlcmVkY2hhbmdlJywnY2hhbmdlJywnY2hlY2snLCdjbGljaycsJ2Rlc3Ryb3knLCdkaXJ0eWNoYW5nZScsJ2Rpc2FibGVkY2hhbmdlJywnZG9ja2VkY2hhbmdlJywnZXJhc2VkJywnZXJyb3JjaGFuZ2UnLCdmbG9hdGluZ2NoYW5nZScsJ2ZvY3VzJywnZm9jdXNlbnRlcicsJ2ZvY3VzbGVhdmUnLCdmdWxsc2NyZWVuJywnaGVpZ2h0Y2hhbmdlJywnaGlkZGVuY2hhbmdlJywnaGlkZScsJ2luaXRpYWxpemUnLCdrZXl1cCcsJ2xlZnRjaGFuZ2UnLCdtYXhIZWlnaHRjaGFuZ2UnLCdtYXhXaWR0aGNoYW5nZScsJ21pbkhlaWdodGNoYW5nZScsJ21pbldpZHRoY2hhbmdlJywnbW91c2Vkb3duJywnbW92ZWQnLCdvcmllbnRhdGlvbmNoYW5nZScsJ3BhaW50ZWQnLCdwYXN0ZScsJ3Bvc2l0aW9uZWRjaGFuZ2UnLCdyZW1vdmVkJywncmVzaXplJywncmlnaHRjaGFuZ2UnLCdzY3JvbGxhYmxlY2hhbmdlJywnc2hvdycsJ3RvZnJvbnQnLCd0b3BjaGFuZ2UnLCd1bmNoZWNrJywndXBkYXRlZGF0YScsJ3dpZHRoY2hhbmdlJyxdLFxuICAgICAgICAgICAgdmNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ2NoZWNrYm94J1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuXG5cbi8vIGZ1bmN0aW9uIHRvUGFzY2FsQ2FzZShzKSB7XG4vLyAgICAgcmV0dXJuIHMubWF0Y2goL1thLXpdKy9naSlcbi8vICAgICAgICAgLm1hcChmdW5jdGlvbiAod29yZCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpXG4vLyAgICAgICAgIH0pXG4vLyAgICAgICAgIC5qb2luKCcnKVxuLy8gfVxuLy8gdmFyIHBhc2NhbE5hbWUgPSB0b1Bhc2NhbENhc2UodGFnTmFtZSlcblxuLy92YXIgZXZlbnRzID0gKG5ldyBFV0NDaGVja2JveCgpKS5ldmVudG5hbWVzO1xuLy92YXIgZXZlbnRuYW1lc2FsbCA9IFtdO1xuLy9ldmVudHMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuLy8gICAgZXZlbnRuYW1lc2FsbC5wdXNoKGV2ZW50Lm5hbWUpXG4vL30pXG4vL2NvbnN0IGRpc3RpbmN0ID0gKHZhbHVlLCBpbmRleCwgc2VsZikgPT4ge1xuLy8gICAgLy9yZXR1cm4gdHJ1ZVxuLy8gICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xuLy99XG4vL3ZhciBldmVudG5hbWVzID0gZXZlbnRuYW1lc2FsbC5maWx0ZXIoZGlzdGluY3QpO1xuIl19