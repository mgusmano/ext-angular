//import EWCSimplelistitem from '../dist/ext-simplelistitem.component.js';
//inputs: (new EWCSimplelistitem()).properties,
import EWCSimplelistitem from '@sencha/ext-web-components/dist/ext-simplelistitem.component.js';
import {
    Host,
    Optional,
    SkipSelf,
    Component,
    ElementRef,
    forwardRef,
    ViewContainerRef
  } from '@angular/core';
import { EngBase } from './angularbase';

@Component({
    selector: 'ExtSimplelistitem',
    inputs: ['renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','alignSelf','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','axisLock','bind','border','bottom','centered','cls','constrainAlign','contentEl','controller','data','defaultListenerScope','defaultToolWeights','disabled','displayed','docked','draggable','undefined','undefined','undefined','flex','floated','focusCls','fullscreen','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','id','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','left','listeners','margin','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','name','nameable','padding','pinned','plugins','publishes','record','recordIndex','reference','relative','renderTo','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','stateful','statefulDefaults','stateId','style','tabIndex','toFrontOnShow','toolDefaults','tools','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','viewModel','weight','width','x','xtype','y','zIndex',],
    outputs: ['ready','added','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','moved','orientationchange','painted','positionedchange','removed','resize','rightchange','scrollablechange','show','tofront','topchange','updatedata','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSimplelistitemComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtSimplelistitemComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','alignSelf','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','axisLock','bind','border','bottom','centered','cls','constrainAlign','contentEl','controller','data','defaultListenerScope','defaultToolWeights','disabled','displayed','docked','draggable','undefined','undefined','undefined','flex','floated','focusCls','fullscreen','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','id','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','left','listeners','margin','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','name','nameable','padding','pinned','plugins','publishes','record','recordIndex','reference','relative','renderTo','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','stateful','statefulDefaults','stateId','style','tabIndex','toFrontOnShow','toolDefaults','tools','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','viewModel','weight','width','x','xtype','y','zIndex',],
            (new EWCSimplelistitem()).events,
            ['ready','added','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','moved','orientationchange','painted','positionedchange','removed','resize','rightchange','scrollablechange','show','tofront','topchange','updatedata','widthchange',],
            vc
        )
        this.xtype = 'simplelistitem'
    }

    public ngOnInit() {
        this.baseOnInit()
    }

    public ngAfterViewInit() {
        this.baseAfterViewInit()
    }

    public ngOnChanges(changes) {
        this.baseOnChanges(changes)
    }

    public ngOnDestroy() {
        this.baseOnDestroy()
    }
}


// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)

//var events = (new EWCSimplelistitem()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);