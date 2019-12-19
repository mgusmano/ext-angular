//import EWCSparklinebar from '../dist/ext-sparklinebar.component.js';
//inputs: (new EWCSparklinebar()).properties,
import EWCSparklinebar from '@sencha/ext-web-components-classic/dist/ext-sparklinebar.component.js';
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
    selector: 'ExtSparklinebar',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','barColor','barSpacing','barWidth','bind','border','chartRangeClip','chartRangeMax','chartRangeMin','cls','colorMap','controller','defaultListenerScope','disabled','disableTooltips','undefined','focusCls','height','hidden','hideMode','highlightColor','highlightLighten','instanceCls','keyMap','keyMapEnabled','keyMapTarget','lineColor','listeners','margin','name','nameable','negBarColor','nullColor','plugins','publishes','reference','renderTo','ripple','session','shareableName','stackedBarColor','style','tipTpl','tooltipPrefix','tooltipSkipNull','tooltipSuffix','touchAction','twoWayBindable','ui','userCls','values','viewModel','width','zeroAxis','zeroColor',],
    outputs: ['ready','beforedisabledchange','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSparklinebarComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtSparklinebarComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','barColor','barSpacing','barWidth','bind','border','chartRangeClip','chartRangeMax','chartRangeMin','cls','colorMap','controller','defaultListenerScope','disabled','disableTooltips','undefined','focusCls','height','hidden','hideMode','highlightColor','highlightLighten','instanceCls','keyMap','keyMapEnabled','keyMapTarget','lineColor','listeners','margin','name','nameable','negBarColor','nullColor','plugins','publishes','reference','renderTo','ripple','session','shareableName','stackedBarColor','style','tipTpl','tooltipPrefix','tooltipSkipNull','tooltipSuffix','touchAction','twoWayBindable','ui','userCls','values','viewModel','width','zeroAxis','zeroColor',],
            (new EWCSparklinebar()).events,
            ['ready','beforedisabledchange','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','widthchange',],
            vc
        )
        this.xtype = 'sparklinebar'
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

//var events = (new EWCSparklinebar()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);