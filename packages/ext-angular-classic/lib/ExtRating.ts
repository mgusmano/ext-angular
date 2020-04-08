//import EWCRating from '../dist/ext-rating.component.js';
//inputs: (new EWCRating()).properties,
//import EWCRating from '@sencha/ext-web-components-classic/dist/ext-rating.component.js';
import { EWCRating } from '@sencha/ext-web-components-classic';
import {
    Host,
    Optional,
    SkipSelf,
    Component,
    ElementRef,
    forwardRef,
    ViewContainerRef
  } from '@angular/core';
import { EngBase } from './common/angularbase';

@Component({
    selector: 'ExtRating',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','animate','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','border','cls','controller','defaultListenerScope','disabled','undefined','family','focusCls','glyphs','height','hidden','hideMode','instanceCls','keyMap','keyMapEnabled','keyMapTarget','limit','listeners','margin','minimum','name','nameable','overStyle','plugins','publishes','reference','renderTo','ripple','rounding','scale','selectedStyle','session','shareableName','style','tip','tooltipText','touchAction','trackingValue','trackOver','twoWayBindable','ui','userCls','value','viewModel','width',],
    outputs: ['ready','created','beforedisabledchange','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtRatingComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtRatingComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','animate','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','border','cls','controller','defaultListenerScope','disabled','undefined','family','focusCls','glyphs','height','hidden','hideMode','instanceCls','keyMap','keyMapEnabled','keyMapTarget','limit','listeners','margin','minimum','name','nameable','overStyle','plugins','publishes','reference','renderTo','ripple','rounding','scale','selectedStyle','session','shareableName','style','tip','tooltipText','touchAction','trackingValue','trackOver','twoWayBindable','ui','userCls','value','viewModel','width',],
            (new EWCRating()).events,
            ['ready','created','beforedisabledchange','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','widthchange',],
            vc
        )
        this.xtype = 'rating'
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

//var events = (new EWCRating()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
