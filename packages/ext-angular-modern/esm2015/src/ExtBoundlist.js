var ExtBoundlistComponent_1;
import * as tslib_1 from "tslib";
//import EWCBoundlist from '../dist/ext-boundlist.component.js';
//inputs: (new EWCBoundlist()).properties,
import EWCBoundlist from '@sencha/ext-web-components-modern/dist/ext-boundlist.component.js';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './angularbase';
let ExtBoundlistComponent = ExtBoundlistComponent_1 = class ExtBoundlistComponent extends EngBase {
    constructor(eRef, hostComponent, vc) {
        super(eRef, hostComponent, ['header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeChildTabIndex', 'activeItem', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'associatedData', 'autoDestroy', 'autoSize', 'axisLock', 'bind', 'bodyCls', 'border', 'bottom', 'bufferSize', 'cardSwitchAnimation', 'centered', 'cls', 'collapseDefaults', 'collapsible', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'deferEmptyText', 'deselectOnContainerClick', 'disabled', 'disableSelection', 'disclosureProperty', 'displayed', 'docked', 'draggable', 'emptyItemText', 'emptyState', 'emptyText', 'emptyTextDefaults', 'emptyTextProperty', 'undefined', 'undefined', 'undefined', 'undefined', 'flex', 'floated', 'focusableContainer', 'focusCls', 'fullscreen', 'grouped', 'groupFooter', 'groupHeader', 'grouping', 'groupPlaceholder', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'horizontalOverflow', 'html', 'id', 'inactiveChildTabIndex', 'indexBar', 'infinite', 'inline', 'innerCls', 'innerCtHeight', 'innerWidth', 'instanceCls', 'itemButtonMode', 'itemCls', 'itemConfig', 'itemContentCls', 'itemDataMap', 'itemId', 'itemInnerCls', 'itemRipple', 'items', 'itemsFocusable', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'left', 'listeners', 'loadingHeight', 'loadingText', 'maintainChildNodes', 'manageBorders', 'margin', 'markDirty', 'masked', 'maxHeight', 'maxItemCache', 'maxWidth', 'minHeight', 'minimumBufferDistance', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'nameHolder', 'onItemDisclosure', 'padding', 'pinFooters', 'pinHeaders', 'pinnedFooter', 'pinnedFooterHeight', 'pinnedHeader', 'pinnedHeaderHeight', 'plugins', 'pressedDelay', 'preventSelectionOnDisclose', 'preventSelectionOnTool', 'publishes', 'record', 'reference', 'referenceHolder', 'relative', 'renderTo', 'resetFocusPosition', 'right', 'ripple', 'rowLines', 'scrollable', 'scrollDock', 'scrollToTopOnRefresh', 'selectable', 'selection', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'stateful', 'statefulDefaults', 'stateId', 'store', 'striped', 'style', 'tabIndex', 'toFrontOnShow', 'tooltip', 'top', 'topRenderedIndex', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'triggerCtEvent', 'triggerEvent', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'undefined', 'variableHeights', 'verticalOverflow', 'viewModel', 'visibleHeight', 'visibleLeft', 'visibleTop', 'visibleWidth', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex',], (new EWCBoundlist()).events, ['ready', 'activate', 'activeItemchange', 'add', 'added', 'beforeactiveItemchange', 'beforebottomchange', 'beforecenteredchange', 'beforedisabledchange', 'beforedockedchange', 'beforegroupcollapse', 'beforegroupexpand', 'beforeheightchange', 'beforehiddenchange', 'beforehide', 'beforeleftchange', 'beforemaxHeightchange', 'beforemaxWidthchange', 'beforeminHeightchange', 'beforeminWidthchange', 'beforeorientationchange', 'beforerightchange', 'beforescrollablechange', 'beforeshow', 'beforestorechange', 'beforetofront', 'beforetopchange', 'beforewidthchange', 'blur', 'bottomchange', 'centeredchange', 'childdoubletap', 'childlongpress', 'childmouseenter', 'childmouseleave', 'childsingletap', 'childtap', 'childtaphold', 'childtouchcancel', 'childtouchend', 'childtouchmove', 'childtouchstart', 'deactivate', 'deselect', 'destroy', 'disabledchange', 'disclose', 'dockedchange', 'erased', 'floatingchange', 'focus', 'focusenter', 'focusleave', 'fullscreen', 'groupcollapse', 'groupexpand', 'heightchange', 'hiddenchange', 'hide', 'initialize', 'itemaction', 'itemdoubletap', 'itemlongpress', 'itemmouseenter', 'itemmouseleave', 'itemsingletap', 'itemswipe', 'itemtap', 'itemtaphold', 'itemtouchcancel', 'itemtouchend', 'itemtouchmove', 'itemtouchstart', 'leftchange', 'maxHeightchange', 'maxWidthchange', 'minHeightchange', 'minWidthchange', 'move', 'moved', 'navigate', 'orientationchange', 'painted', 'positionedchange', 'refresh', 'remove', 'removed', 'renderedchange', 'resize', 'rightchange', 'scrollablechange', 'select', 'show', 'storechange', 'tofront', 'topchange', 'updatedata', 'widthchange',], vc);
        this.xtype = 'boundlist';
    }
    ngOnInit() {
        this.baseOnInit();
    }
    ngAfterViewInit() {
        this.baseAfterViewInit();
    }
    ngOnChanges(changes) {
        this.baseOnChanges(changes);
    }
    ngOnDestroy() {
        this.baseOnDestroy();
    }
};
ExtBoundlistComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
    { type: ViewContainerRef }
];
ExtBoundlistComponent = ExtBoundlistComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'ExtBoundlist',
        inputs: ['header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeChildTabIndex', 'activeItem', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'associatedData', 'autoDestroy', 'autoSize', 'axisLock', 'bind', 'bodyCls', 'border', 'bottom', 'bufferSize', 'cardSwitchAnimation', 'centered', 'cls', 'collapseDefaults', 'collapsible', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'deferEmptyText', 'deselectOnContainerClick', 'disabled', 'disableSelection', 'disclosureProperty', 'displayed', 'docked', 'draggable', 'emptyItemText', 'emptyState', 'emptyText', 'emptyTextDefaults', 'emptyTextProperty', 'undefined', 'undefined', 'undefined', 'undefined', 'flex', 'floated', 'focusableContainer', 'focusCls', 'fullscreen', 'grouped', 'groupFooter', 'groupHeader', 'grouping', 'groupPlaceholder', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'horizontalOverflow', 'html', 'id', 'inactiveChildTabIndex', 'indexBar', 'infinite', 'inline', 'innerCls', 'innerCtHeight', 'innerWidth', 'instanceCls', 'itemButtonMode', 'itemCls', 'itemConfig', 'itemContentCls', 'itemDataMap', 'itemId', 'itemInnerCls', 'itemRipple', 'items', 'itemsFocusable', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'left', 'listeners', 'loadingHeight', 'loadingText', 'maintainChildNodes', 'manageBorders', 'margin', 'markDirty', 'masked', 'maxHeight', 'maxItemCache', 'maxWidth', 'minHeight', 'minimumBufferDistance', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'nameHolder', 'onItemDisclosure', 'padding', 'pinFooters', 'pinHeaders', 'pinnedFooter', 'pinnedFooterHeight', 'pinnedHeader', 'pinnedHeaderHeight', 'plugins', 'pressedDelay', 'preventSelectionOnDisclose', 'preventSelectionOnTool', 'publishes', 'record', 'reference', 'referenceHolder', 'relative', 'renderTo', 'resetFocusPosition', 'right', 'ripple', 'rowLines', 'scrollable', 'scrollDock', 'scrollToTopOnRefresh', 'selectable', 'selection', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'stateful', 'statefulDefaults', 'stateId', 'store', 'striped', 'style', 'tabIndex', 'toFrontOnShow', 'tooltip', 'top', 'topRenderedIndex', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'triggerCtEvent', 'triggerEvent', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'undefined', 'variableHeights', 'verticalOverflow', 'viewModel', 'visibleHeight', 'visibleLeft', 'visibleTop', 'visibleWidth', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex',],
        outputs: ['ready', 'activate', 'activeItemchange', 'add', 'added', 'beforeactiveItemchange', 'beforebottomchange', 'beforecenteredchange', 'beforedisabledchange', 'beforedockedchange', 'beforegroupcollapse', 'beforegroupexpand', 'beforeheightchange', 'beforehiddenchange', 'beforehide', 'beforeleftchange', 'beforemaxHeightchange', 'beforemaxWidthchange', 'beforeminHeightchange', 'beforeminWidthchange', 'beforeorientationchange', 'beforerightchange', 'beforescrollablechange', 'beforeshow', 'beforestorechange', 'beforetofront', 'beforetopchange', 'beforewidthchange', 'blur', 'bottomchange', 'centeredchange', 'childdoubletap', 'childlongpress', 'childmouseenter', 'childmouseleave', 'childsingletap', 'childtap', 'childtaphold', 'childtouchcancel', 'childtouchend', 'childtouchmove', 'childtouchstart', 'deactivate', 'deselect', 'destroy', 'disabledchange', 'disclose', 'dockedchange', 'erased', 'floatingchange', 'focus', 'focusenter', 'focusleave', 'fullscreen', 'groupcollapse', 'groupexpand', 'heightchange', 'hiddenchange', 'hide', 'initialize', 'itemaction', 'itemdoubletap', 'itemlongpress', 'itemmouseenter', 'itemmouseleave', 'itemsingletap', 'itemswipe', 'itemtap', 'itemtaphold', 'itemtouchcancel', 'itemtouchend', 'itemtouchmove', 'itemtouchstart', 'leftchange', 'maxHeightchange', 'maxWidthchange', 'minHeightchange', 'minWidthchange', 'move', 'moved', 'navigate', 'orientationchange', 'painted', 'positionedchange', 'refresh', 'remove', 'removed', 'renderedchange', 'resize', 'rightchange', 'scrollablechange', 'select', 'show', 'storechange', 'tofront', 'topchange', 'updatedata', 'widthchange',],
        providers: [{ provide: EngBase, useExisting: forwardRef(() => ExtBoundlistComponent_1) }],
        template: '<ng-content></ng-content>'
    }),
    tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf())
], ExtBoundlistComponent);
export { ExtBoundlistComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCBoundlist()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0Qm91bmRsaXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1tb2Rlcm4vIiwic291cmNlcyI6WyJzcmMvRXh0Qm91bmRsaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0VBQWdFO0FBQ2hFLDBDQUEwQztBQUMxQyxPQUFPLFlBQVksTUFBTSxtRUFBbUUsQ0FBQztBQUM3RixPQUFPLEVBQ0gsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBQ1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTeEMsSUFBYSxxQkFBcUIsNkJBQWxDLE1BQWEscUJBQXNCLFNBQVEsT0FBTztJQUM5QyxZQUNJLElBQWdCLEVBQ2dCLGFBQXNCLEVBQ3RELEVBQW9CO1FBRXBCLEtBQUssQ0FDRCxJQUFJLEVBQ0osYUFBYSxFQUNiLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLGtCQUFrQixFQUFDLG9CQUFvQixFQUFDLHFCQUFxQixFQUFDLFlBQVksRUFBQyxXQUFXLEVBQUMsK0JBQStCLEVBQUMsYUFBYSxFQUFDLGdCQUFnQixFQUFDLGlCQUFpQixFQUFDLFdBQVcsRUFBQyxnQkFBZ0IsRUFBQyxnQkFBZ0IsRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsWUFBWSxFQUFDLHFCQUFxQixFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUMsa0JBQWtCLEVBQUMsYUFBYSxFQUFDLGdCQUFnQixFQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUMsWUFBWSxFQUFD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RUFBRSxDQUFDLHVCQUFxQixDQUFDLEVBQUMsQ0FBQztRQUNyRixRQUFRLEVBQUUsMkJBQTJCO0tBQ3hDLENBQUM7SUFJTyxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7R0FIMUIscUJBQXFCLENBZ0NqQztTQWhDWSxxQkFBcUI7QUFtQ2xDLDZCQUE2QjtBQUM3QixpQ0FBaUM7QUFDakMsaUNBQWlDO0FBQ2pDLGlGQUFpRjtBQUNqRixhQUFhO0FBQ2Isb0JBQW9CO0FBQ3BCLElBQUk7QUFDSix5Q0FBeUM7QUFFekMsK0NBQStDO0FBQy9DLHlCQUF5QjtBQUN6QiwyQ0FBMkM7QUFDM0Msb0NBQW9DO0FBQ3BDLElBQUk7QUFDSiw0Q0FBNEM7QUFDNUMsbUJBQW1CO0FBQ25CLDJDQUEyQztBQUMzQyxHQUFHO0FBQ0gsa0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgRVdDQm91bmRsaXN0IGZyb20gJy4uL2Rpc3QvZXh0LWJvdW5kbGlzdC5jb21wb25lbnQuanMnO1xuLy9pbnB1dHM6IChuZXcgRVdDQm91bmRsaXN0KCkpLnByb3BlcnRpZXMsXG5pbXBvcnQgRVdDQm91bmRsaXN0IGZyb20gJ0BzZW5jaGEvZXh0LXdlYi1jb21wb25lbnRzLW1vZGVybi9kaXN0L2V4dC1ib3VuZGxpc3QuY29tcG9uZW50LmpzJztcbmltcG9ydCB7XG4gICAgSG9zdCxcbiAgICBPcHRpb25hbCxcbiAgICBTa2lwU2VsZixcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBmb3J3YXJkUmVmLFxuICAgIFZpZXdDb250YWluZXJSZWZcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2FuZ3VsYXJiYXNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdFeHRCb3VuZGxpc3QnLFxuICAgIGlucHV0czogWydoZWFkZXInLCAncmVuZGVyZXInLCAnbGFiZWwnLCdmaXRUb1BhcmVudCcsJ3RhYicsJ2NvbmZpZycsJ3BsYXRmb3JtQ29uZmlnJywnZXh0bmFtZScsJ3ZpZXdwb3J0JywnYWxpZ24nLCdwbHVnaW5zJywncmVzcG9uc2l2ZUNvbmZpZycsJ3Jlc3BvbnNpdmVGb3JtdWxhcycsJ2FjdGl2ZUNoaWxkVGFiSW5kZXgnLCdhY3RpdmVJdGVtJywnYWxpZ25TZWxmJywnYWxsb3dGb2N1c2luZ0Rpc2FibGVkQ2hpbGRyZW4nLCdhbHdheXNPblRvcCcsJ2FyaWFBdHRyaWJ1dGVzJywnYXJpYURlc2NyaWJlZEJ5JywnYXJpYUxhYmVsJywnYXJpYUxhYmVsbGVkQnknLCdhc3NvY2lhdGVkRGF0YScsJ2F1dG9EZXN0cm95JywnYXV0b1NpemUnLCdheGlzTG9jaycsJ2JpbmQnLCdib2R5Q2xzJywnYm9yZGVyJywnYm90dG9tJywnYnVmZmVyU2l6ZScsJ2NhcmRTd2l0Y2hBbmltYXRpb24nLCdjZW50ZXJlZCcsJ2NscycsJ2NvbGxhcHNlRGVmYXVsdHMnLCdjb2xsYXBzaWJsZScsJ2NvbnN0cmFpbkFsaWduJywnY29udGVudEVsJywnY29udHJvbCcsJ2NvbnRyb2xsZXInLCdkYXRhJywnZGVmYXVsdEZvY3VzJywnZGVmYXVsdExpc3RlbmVyU2NvcGUnLCdkZWZhdWx0cycsJ2RlZmF1bHRUeXBlJywnZGVmZXJFbXB0eVRleHQnLCdkZXNlbGVjdE9uQ29udGFpbmVyQ2xpY2snLCdkaXNhYmxlZCcsJ2Rpc2FibGVTZWxlY3Rpb24nLCdkaXNjbG9zdXJlUHJvcGVydHknLCdkaXNwbGF5ZWQnLCdkb2NrZWQnLCdkcmFnZ2FibGUnLCdlbXB0eUl0ZW1UZXh0JywnZW1wdHlTdGF0ZScsJ2VtcHR5VGV4dCcsJ2VtcHR5VGV4dERlZmF1bHRzJywnZW1wdHlUZXh0UHJvcGVydHknLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCdmbGV4JywnZmxvYXRlZCcsJ2ZvY3VzYWJsZUNvbnRhaW5lcicsJ2ZvY3VzQ2xzJywnZnVsbHNjcmVlbicsJ2dyb3VwZWQnLCdncm91cEZvb3RlcicsJ2dyb3VwSGVhZGVyJywnZ3JvdXBpbmcnLCdncm91cFBsYWNlaG9sZGVyJywnaGVpZ2h0JywnaGlkZGVuJywnaGlkZUFuaW1hdGlvbicsJ2hpZGVNb2RlJywnaGlkZU9uTWFza1RhcCcsJ2hvcml6b250YWxPdmVyZmxvdycsJ2h0bWwnLCdpZCcsJ2luYWN0aXZlQ2hpbGRUYWJJbmRleCcsJ2luZGV4QmFyJywnaW5maW5pdGUnLCdpbmxpbmUnLCdpbm5lckNscycsJ2lubmVyQ3RIZWlnaHQnLCdpbm5lcldpZHRoJywnaW5zdGFuY2VDbHMnLCdpdGVtQnV0dG9uTW9kZScsJ2l0ZW1DbHMnLCdpdGVtQ29uZmlnJywnaXRlbUNvbnRlbnRDbHMnLCdpdGVtRGF0YU1hcCcsJ2l0ZW1JZCcsJ2l0ZW1Jbm5lckNscycsJ2l0ZW1SaXBwbGUnLCdpdGVtcycsJ2l0ZW1zRm9jdXNhYmxlJywnaXRlbVRwbCcsJ2tleU1hcCcsJ2tleU1hcEVuYWJsZWQnLCdrZXlNYXBUYXJnZXQnLCdsYXlvdXQnLCdsZWZ0JywnbGlzdGVuZXJzJywnbG9hZGluZ0hlaWdodCcsJ2xvYWRpbmdUZXh0JywnbWFpbnRhaW5DaGlsZE5vZGVzJywnbWFuYWdlQm9yZGVycycsJ21hcmdpbicsJ21hcmtEaXJ0eScsJ21hc2tlZCcsJ21heEhlaWdodCcsJ21heEl0ZW1DYWNoZScsJ21heFdpZHRoJywnbWluSGVpZ2h0JywnbWluaW11bUJ1ZmZlckRpc3RhbmNlJywnbWluV2lkdGgnLCdtb2RhbCcsJ21vZGVsVmFsaWRhdGlvbicsJ25hbWUnLCduYW1lYWJsZScsJ25hbWVIb2xkZXInLCdvbkl0ZW1EaXNjbG9zdXJlJywncGFkZGluZycsJ3BpbkZvb3RlcnMnLCdwaW5IZWFkZXJzJywncGlubmVkRm9vdGVyJywncGlubmVkRm9vdGVySGVpZ2h0JywncGlubmVkSGVhZGVyJywncGlubmVkSGVhZGVySGVpZ2h0JywncGx1Z2lucycsJ3ByZXNzZWREZWxheScsJ3ByZXZlbnRTZWxlY3Rpb25PbkRpc2Nsb3NlJywncHJldmVudFNlbGVjdGlvbk9uVG9vbCcsJ3B1Ymxpc2hlcycsJ3JlY29yZCcsJ3JlZmVyZW5jZScsJ3JlZmVyZW5jZUhvbGRlcicsJ3JlbGF0aXZlJywncmVuZGVyVG8nLCdyZXNldEZvY3VzUG9zaXRpb24nLCdyaWdodCcsJ3JpcHBsZScsJ3Jvd0xpbmVzJywnc2Nyb2xsYWJsZScsJ3Njcm9sbERvY2snLCdzY3JvbGxUb1RvcE9uUmVmcmVzaCcsJ3NlbGVjdGFibGUnLCdzZWxlY3Rpb24nLCdzZXNzaW9uJywnc2hhZG93Jywnc2hhcmVhYmxlTmFtZScsJ3NoaW0nLCdzaG93QW5pbWF0aW9uJywnc3RhdGVmdWwnLCdzdGF0ZWZ1bERlZmF1bHRzJywnc3RhdGVJZCcsJ3N0b3JlJywnc3RyaXBlZCcsJ3N0eWxlJywndGFiSW5kZXgnLCd0b0Zyb250T25TaG93JywndG9vbHRpcCcsJ3RvcCcsJ3RvcFJlbmRlcmVkSW5kZXgnLCd0b3VjaEFjdGlvbicsJ3RwbCcsJ3RwbFdyaXRlTW9kZScsJ3RyYW5zbGF0YWJsZScsJ3RyaWdnZXJDdEV2ZW50JywndHJpZ2dlckV2ZW50JywndHdvV2F5QmluZGFibGUnLCd1aScsJ3VzZXJDbHMnLCd1c2VyU2VsZWN0YWJsZScsJ3VuZGVmaW5lZCcsJ3ZhcmlhYmxlSGVpZ2h0cycsJ3ZlcnRpY2FsT3ZlcmZsb3cnLCd2aWV3TW9kZWwnLCd2aXNpYmxlSGVpZ2h0JywndmlzaWJsZUxlZnQnLCd2aXNpYmxlVG9wJywndmlzaWJsZVdpZHRoJywnd2VpZ2h0Jywnd2VpZ2h0ZWQnLCd3aWR0aCcsJ3gnLCd4dHlwZScsJ3knLCd6SW5kZXgnLF0sXG4gICAgb3V0cHV0czogWydyZWFkeScsJ2FjdGl2YXRlJywnYWN0aXZlSXRlbWNoYW5nZScsJ2FkZCcsJ2FkZGVkJywnYmVmb3JlYWN0aXZlSXRlbWNoYW5nZScsJ2JlZm9yZWJvdHRvbWNoYW5nZScsJ2JlZm9yZWNlbnRlcmVkY2hhbmdlJywnYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLCdiZWZvcmVkb2NrZWRjaGFuZ2UnLCdiZWZvcmVncm91cGNvbGxhcHNlJywnYmVmb3JlZ3JvdXBleHBhbmQnLCdiZWZvcmVoZWlnaHRjaGFuZ2UnLCdiZWZvcmVoaWRkZW5jaGFuZ2UnLCdiZWZvcmVoaWRlJywnYmVmb3JlbGVmdGNoYW5nZScsJ2JlZm9yZW1heEhlaWdodGNoYW5nZScsJ2JlZm9yZW1heFdpZHRoY2hhbmdlJywnYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJywnYmVmb3JlbWluV2lkdGhjaGFuZ2UnLCdiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScsJ2JlZm9yZXJpZ2h0Y2hhbmdlJywnYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScsJ2JlZm9yZXNob3cnLCdiZWZvcmVzdG9yZWNoYW5nZScsJ2JlZm9yZXRvZnJvbnQnLCdiZWZvcmV0b3BjaGFuZ2UnLCdiZWZvcmV3aWR0aGNoYW5nZScsJ2JsdXInLCdib3R0b21jaGFuZ2UnLCdjZW50ZXJlZGNoYW5nZScsJ2NoaWxkZG91YmxldGFwJywnY2hpbGRsb25ncHJlc3MnLCdjaGlsZG1vdXNlZW50ZXInLCdjaGlsZG1vdXNlbGVhdmUnLCdjaGlsZHNpbmdsZXRhcCcsJ2NoaWxkdGFwJywnY2hpbGR0YXBob2xkJywnY2hpbGR0b3VjaGNhbmNlbCcsJ2NoaWxkdG91Y2hlbmQnLCdjaGlsZHRvdWNobW92ZScsJ2NoaWxkdG91Y2hzdGFydCcsJ2RlYWN0aXZhdGUnLCdkZXNlbGVjdCcsJ2Rlc3Ryb3knLCdkaXNhYmxlZGNoYW5nZScsJ2Rpc2Nsb3NlJywnZG9ja2VkY2hhbmdlJywnZXJhc2VkJywnZmxvYXRpbmdjaGFuZ2UnLCdmb2N1cycsJ2ZvY3VzZW50ZXInLCdmb2N1c2xlYXZlJywnZnVsbHNjcmVlbicsJ2dyb3VwY29sbGFwc2UnLCdncm91cGV4cGFuZCcsJ2hlaWdodGNoYW5nZScsJ2hpZGRlbmNoYW5nZScsJ2hpZGUnLCdpbml0aWFsaXplJywnaXRlbWFjdGlvbicsJ2l0ZW1kb3VibGV0YXAnLCdpdGVtbG9uZ3ByZXNzJywnaXRlbW1vdXNlZW50ZXInLCdpdGVtbW91c2VsZWF2ZScsJ2l0ZW1zaW5nbGV0YXAnLCdpdGVtc3dpcGUnLCdpdGVtdGFwJywnaXRlbXRhcGhvbGQnLCdpdGVtdG91Y2hjYW5jZWwnLCdpdGVtdG91Y2hlbmQnLCdpdGVtdG91Y2htb3ZlJywnaXRlbXRvdWNoc3RhcnQnLCdsZWZ0Y2hhbmdlJywnbWF4SGVpZ2h0Y2hhbmdlJywnbWF4V2lkdGhjaGFuZ2UnLCdtaW5IZWlnaHRjaGFuZ2UnLCdtaW5XaWR0aGNoYW5nZScsJ21vdmUnLCdtb3ZlZCcsJ25hdmlnYXRlJywnb3JpZW50YXRpb25jaGFuZ2UnLCdwYWludGVkJywncG9zaXRpb25lZGNoYW5nZScsJ3JlZnJlc2gnLCdyZW1vdmUnLCdyZW1vdmVkJywncmVuZGVyZWRjaGFuZ2UnLCdyZXNpemUnLCdyaWdodGNoYW5nZScsJ3Njcm9sbGFibGVjaGFuZ2UnLCdzZWxlY3QnLCdzaG93Jywnc3RvcmVjaGFuZ2UnLCd0b2Zyb250JywndG9wY2hhbmdlJywndXBkYXRlZGF0YScsJ3dpZHRoY2hhbmdlJyxdLFxuICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRCb3VuZGxpc3RDb21wb25lbnQpfV0sXG4gICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRCb3VuZGxpc3RDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlLFxuICAgICAgICB2YzogVmlld0NvbnRhaW5lclJlZlxuICAgICAgICApIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIFsnaGVhZGVyJywgJ3JlbmRlcmVyJywgJ2xhYmVsJywnZml0VG9QYXJlbnQnLCd0YWInLCdjb25maWcnLCdwbGF0Zm9ybUNvbmZpZycsJ2V4dG5hbWUnLCd2aWV3cG9ydCcsJ2FsaWduJywncGx1Z2lucycsJ3Jlc3BvbnNpdmVDb25maWcnLCdyZXNwb25zaXZlRm9ybXVsYXMnLCdhY3RpdmVDaGlsZFRhYkluZGV4JywnYWN0aXZlSXRlbScsJ2FsaWduU2VsZicsJ2FsbG93Rm9jdXNpbmdEaXNhYmxlZENoaWxkcmVuJywnYWx3YXlzT25Ub3AnLCdhcmlhQXR0cmlidXRlcycsJ2FyaWFEZXNjcmliZWRCeScsJ2FyaWFMYWJlbCcsJ2FyaWFMYWJlbGxlZEJ5JywnYXNzb2NpYXRlZERhdGEnLCdhdXRvRGVzdHJveScsJ2F1dG9TaXplJywnYXhpc0xvY2snLCdiaW5kJywnYm9keUNscycsJ2JvcmRlcicsJ2JvdHRvbScsJ2J1ZmZlclNpemUnLCdjYXJkU3dpdGNoQW5pbWF0aW9uJywnY2VudGVyZWQnLCdjbHMnLCdjb2xsYXBzZURlZmF1bHRzJywnY29sbGFwc2libGUnLCdjb25zdHJhaW5BbGlnbicsJ2NvbnRlbnRFbCcsJ2NvbnRyb2wnLCdjb250cm9sbGVyJywnZGF0YScsJ2RlZmF1bHRGb2N1cycsJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJywnZGVmYXVsdHMnLCdkZWZhdWx0VHlwZScsJ2RlZmVyRW1wdHlUZXh0JywnZGVzZWxlY3RPbkNvbnRhaW5lckNsaWNrJywnZGlzYWJsZWQnLCdkaXNhYmxlU2VsZWN0aW9uJywnZGlzY2xvc3VyZVByb3BlcnR5JywnZGlzcGxheWVkJywnZG9ja2VkJywnZHJhZ2dhYmxlJywnZW1wdHlJdGVtVGV4dCcsJ2VtcHR5U3RhdGUnLCdlbXB0eVRleHQnLCdlbXB0eVRleHREZWZhdWx0cycsJ2VtcHR5VGV4dFByb3BlcnR5JywndW5kZWZpbmVkJywndW5kZWZpbmVkJywndW5kZWZpbmVkJywndW5kZWZpbmVkJywnZmxleCcsJ2Zsb2F0ZWQnLCdmb2N1c2FibGVDb250YWluZXInLCdmb2N1c0NscycsJ2Z1bGxzY3JlZW4nLCdncm91cGVkJywnZ3JvdXBGb290ZXInLCdncm91cEhlYWRlcicsJ2dyb3VwaW5nJywnZ3JvdXBQbGFjZWhvbGRlcicsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVBbmltYXRpb24nLCdoaWRlTW9kZScsJ2hpZGVPbk1hc2tUYXAnLCdob3Jpem9udGFsT3ZlcmZsb3cnLCdodG1sJywnaWQnLCdpbmFjdGl2ZUNoaWxkVGFiSW5kZXgnLCdpbmRleEJhcicsJ2luZmluaXRlJywnaW5saW5lJywnaW5uZXJDbHMnLCdpbm5lckN0SGVpZ2h0JywnaW5uZXJXaWR0aCcsJ2luc3RhbmNlQ2xzJywnaXRlbUJ1dHRvbk1vZGUnLCdpdGVtQ2xzJywnaXRlbUNvbmZpZycsJ2l0ZW1Db250ZW50Q2xzJywnaXRlbURhdGFNYXAnLCdpdGVtSWQnLCdpdGVtSW5uZXJDbHMnLCdpdGVtUmlwcGxlJywnaXRlbXMnLCdpdGVtc0ZvY3VzYWJsZScsJ2l0ZW1UcGwnLCdrZXlNYXAnLCdrZXlNYXBFbmFibGVkJywna2V5TWFwVGFyZ2V0JywnbGF5b3V0JywnbGVmdCcsJ2xpc3RlbmVycycsJ2xvYWRpbmdIZWlnaHQnLCdsb2FkaW5nVGV4dCcsJ21haW50YWluQ2hpbGROb2RlcycsJ21hbmFnZUJvcmRlcnMnLCdtYXJnaW4nLCdtYXJrRGlydHknLCdtYXNrZWQnLCdtYXhIZWlnaHQnLCdtYXhJdGVtQ2FjaGUnLCdtYXhXaWR0aCcsJ21pbkhlaWdodCcsJ21pbmltdW1CdWZmZXJEaXN0YW5jZScsJ21pbldpZHRoJywnbW9kYWwnLCdtb2RlbFZhbGlkYXRpb24nLCduYW1lJywnbmFtZWFibGUnLCduYW1lSG9sZGVyJywnb25JdGVtRGlzY2xvc3VyZScsJ3BhZGRpbmcnLCdwaW5Gb290ZXJzJywncGluSGVhZGVycycsJ3Bpbm5lZEZvb3RlcicsJ3Bpbm5lZEZvb3RlckhlaWdodCcsJ3Bpbm5lZEhlYWRlcicsJ3Bpbm5lZEhlYWRlckhlaWdodCcsJ3BsdWdpbnMnLCdwcmVzc2VkRGVsYXknLCdwcmV2ZW50U2VsZWN0aW9uT25EaXNjbG9zZScsJ3ByZXZlbnRTZWxlY3Rpb25PblRvb2wnLCdwdWJsaXNoZXMnLCdyZWNvcmQnLCdyZWZlcmVuY2UnLCdyZWZlcmVuY2VIb2xkZXInLCdyZWxhdGl2ZScsJ3JlbmRlclRvJywncmVzZXRGb2N1c1Bvc2l0aW9uJywncmlnaHQnLCdyaXBwbGUnLCdyb3dMaW5lcycsJ3Njcm9sbGFibGUnLCdzY3JvbGxEb2NrJywnc2Nyb2xsVG9Ub3BPblJlZnJlc2gnLCdzZWxlY3RhYmxlJywnc2VsZWN0aW9uJywnc2Vzc2lvbicsJ3NoYWRvdycsJ3NoYXJlYWJsZU5hbWUnLCdzaGltJywnc2hvd0FuaW1hdGlvbicsJ3N0YXRlZnVsJywnc3RhdGVmdWxEZWZhdWx0cycsJ3N0YXRlSWQnLCdzdG9yZScsJ3N0cmlwZWQnLCdzdHlsZScsJ3RhYkluZGV4JywndG9Gcm9udE9uU2hvdycsJ3Rvb2x0aXAnLCd0b3AnLCd0b3BSZW5kZXJlZEluZGV4JywndG91Y2hBY3Rpb24nLCd0cGwnLCd0cGxXcml0ZU1vZGUnLCd0cmFuc2xhdGFibGUnLCd0cmlnZ2VyQ3RFdmVudCcsJ3RyaWdnZXJFdmVudCcsJ3R3b1dheUJpbmRhYmxlJywndWknLCd1c2VyQ2xzJywndXNlclNlbGVjdGFibGUnLCd1bmRlZmluZWQnLCd2YXJpYWJsZUhlaWdodHMnLCd2ZXJ0aWNhbE92ZXJmbG93Jywndmlld01vZGVsJywndmlzaWJsZUhlaWdodCcsJ3Zpc2libGVMZWZ0JywndmlzaWJsZVRvcCcsJ3Zpc2libGVXaWR0aCcsJ3dlaWdodCcsJ3dlaWdodGVkJywnd2lkdGgnLCd4JywneHR5cGUnLCd5JywnekluZGV4JyxdLFxuICAgICAgICAgICAgKG5ldyBFV0NCb3VuZGxpc3QoKSkuZXZlbnRzLFxuICAgICAgICAgICAgWydyZWFkeScsJ2FjdGl2YXRlJywnYWN0aXZlSXRlbWNoYW5nZScsJ2FkZCcsJ2FkZGVkJywnYmVmb3JlYWN0aXZlSXRlbWNoYW5nZScsJ2JlZm9yZWJvdHRvbWNoYW5nZScsJ2JlZm9yZWNlbnRlcmVkY2hhbmdlJywnYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLCdiZWZvcmVkb2NrZWRjaGFuZ2UnLCdiZWZvcmVncm91cGNvbGxhcHNlJywnYmVmb3JlZ3JvdXBleHBhbmQnLCdiZWZvcmVoZWlnaHRjaGFuZ2UnLCdiZWZvcmVoaWRkZW5jaGFuZ2UnLCdiZWZvcmVoaWRlJywnYmVmb3JlbGVmdGNoYW5nZScsJ2JlZm9yZW1heEhlaWdodGNoYW5nZScsJ2JlZm9yZW1heFdpZHRoY2hhbmdlJywnYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJywnYmVmb3JlbWluV2lkdGhjaGFuZ2UnLCdiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScsJ2JlZm9yZXJpZ2h0Y2hhbmdlJywnYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScsJ2JlZm9yZXNob3cnLCdiZWZvcmVzdG9yZWNoYW5nZScsJ2JlZm9yZXRvZnJvbnQnLCdiZWZvcmV0b3BjaGFuZ2UnLCdiZWZvcmV3aWR0aGNoYW5nZScsJ2JsdXInLCdib3R0b21jaGFuZ2UnLCdjZW50ZXJlZGNoYW5nZScsJ2NoaWxkZG91YmxldGFwJywnY2hpbGRsb25ncHJlc3MnLCdjaGlsZG1vdXNlZW50ZXInLCdjaGlsZG1vdXNlbGVhdmUnLCdjaGlsZHNpbmdsZXRhcCcsJ2NoaWxkdGFwJywnY2hpbGR0YXBob2xkJywnY2hpbGR0b3VjaGNhbmNlbCcsJ2NoaWxkdG91Y2hlbmQnLCdjaGlsZHRvdWNobW92ZScsJ2NoaWxkdG91Y2hzdGFydCcsJ2RlYWN0aXZhdGUnLCdkZXNlbGVjdCcsJ2Rlc3Ryb3knLCdkaXNhYmxlZGNoYW5nZScsJ2Rpc2Nsb3NlJywnZG9ja2VkY2hhbmdlJywnZXJhc2VkJywnZmxvYXRpbmdjaGFuZ2UnLCdmb2N1cycsJ2ZvY3VzZW50ZXInLCdmb2N1c2xlYXZlJywnZnVsbHNjcmVlbicsJ2dyb3VwY29sbGFwc2UnLCdncm91cGV4cGFuZCcsJ2hlaWdodGNoYW5nZScsJ2hpZGRlbmNoYW5nZScsJ2hpZGUnLCdpbml0aWFsaXplJywnaXRlbWFjdGlvbicsJ2l0ZW1kb3VibGV0YXAnLCdpdGVtbG9uZ3ByZXNzJywnaXRlbW1vdXNlZW50ZXInLCdpdGVtbW91c2VsZWF2ZScsJ2l0ZW1zaW5nbGV0YXAnLCdpdGVtc3dpcGUnLCdpdGVtdGFwJywnaXRlbXRhcGhvbGQnLCdpdGVtdG91Y2hjYW5jZWwnLCdpdGVtdG91Y2hlbmQnLCdpdGVtdG91Y2htb3ZlJywnaXRlbXRvdWNoc3RhcnQnLCdsZWZ0Y2hhbmdlJywnbWF4SGVpZ2h0Y2hhbmdlJywnbWF4V2lkdGhjaGFuZ2UnLCdtaW5IZWlnaHRjaGFuZ2UnLCdtaW5XaWR0aGNoYW5nZScsJ21vdmUnLCdtb3ZlZCcsJ25hdmlnYXRlJywnb3JpZW50YXRpb25jaGFuZ2UnLCdwYWludGVkJywncG9zaXRpb25lZGNoYW5nZScsJ3JlZnJlc2gnLCdyZW1vdmUnLCdyZW1vdmVkJywncmVuZGVyZWRjaGFuZ2UnLCdyZXNpemUnLCdyaWdodGNoYW5nZScsJ3Njcm9sbGFibGVjaGFuZ2UnLCdzZWxlY3QnLCdzaG93Jywnc3RvcmVjaGFuZ2UnLCd0b2Zyb250JywndG9wY2hhbmdlJywndXBkYXRlZGF0YScsJ3dpZHRoY2hhbmdlJyxdLFxuICAgICAgICAgICAgdmNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ2JvdW5kbGlzdCdcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cblxuXG4vLyBmdW5jdGlvbiB0b1Bhc2NhbENhc2Uocykge1xuLy8gICAgIHJldHVybiBzLm1hdGNoKC9bYS16XSsvZ2kpXG4vLyAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHdvcmQpIHtcbi8vICAgICAgICAgICAgIHJldHVybiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKVxuLy8gICAgICAgICB9KVxuLy8gICAgICAgICAuam9pbignJylcbi8vIH1cbi8vIHZhciBwYXNjYWxOYW1lID0gdG9QYXNjYWxDYXNlKHRhZ05hbWUpXG5cbi8vdmFyIGV2ZW50cyA9IChuZXcgRVdDQm91bmRsaXN0KCkpLmV2ZW50bmFtZXM7XG4vL3ZhciBldmVudG5hbWVzYWxsID0gW107XG4vL2V2ZW50cy5mb3JFYWNoKCAoZXZlbnQ6IGFueSwgbjogYW55KSA9PiB7XG4vLyAgICBldmVudG5hbWVzYWxsLnB1c2goZXZlbnQubmFtZSlcbi8vfSlcbi8vY29uc3QgZGlzdGluY3QgPSAodmFsdWUsIGluZGV4LCBzZWxmKSA9PiB7XG4vLyAgICAvL3JldHVybiB0cnVlXG4vLyAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XG4vL31cbi8vdmFyIGV2ZW50bmFtZXMgPSBldmVudG5hbWVzYWxsLmZpbHRlcihkaXN0aW5jdCk7XG4iXX0=