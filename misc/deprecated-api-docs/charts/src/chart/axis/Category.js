/**
 * @class Ext.chart.axis.Category
 * @extend Ext.chart.axis.Axis
 * @alias axis.category
 *
 * A type of axis that displays items in categories. This axis is generally used to
 * display categorical information like names of items, month names, quarters, etc.
 * but no quantitative values. For that other type of information {@link Ext.chart.axis.Numeric Numeric}
 * axis are more suitable.
 *
 * As with other axis you can set the position of the axis and its title. For example:
 *
*            @example packages=[extangular]
*            import { Component } from '@angular/core'
*            declare var Ext: any;
*
*            @Component({
*                selector: 'app-root-1',
*                styles: [`
*                        `],
*                template: `
*                        <cartesian downloadServerUrl ="http://svg.sencha.io" #item
*                        [width]="'800px'"
*                        [height]="'600px'"
*                            [store]="store"
*                            [series]="[{
*                                type: 'area',
*                                xField: 'name',
*                                yField: ['data1', 'data2', 'data3']
*                            }]"
*                            [axes]="[{
*                                type: 'category',
*                                position: 'bottom',
*                                fields: ['name'],
*                                title: {
*                                    text: 'Sample Values',
*                                    fontSize: 15
*                                }
*                            }]"
*                        ></cartesian>
*                        `
*            })
*            export class AppComponent {
*                store = new Ext.data.Store({
*                    fields: ['name', 'data1', 'data2', 'data3'],
*                    data: [
*                        { 'name': 'metric one', 'data1': 10, 'data2': 12, 'data3': 14 },
*                        { 'name': 'metric two', 'data1': 7, 'data2': 8, 'data3': 16 },
*                        { 'name': 'metric three', 'data1': 5, 'data2': 2, 'data3': 14 },
*                        { 'name': 'metric four', 'data1': 2, 'data2': 14, 'data3': 6 },
*                        { 'name': 'metric five', 'data1': 27, 'data2': 38, 'data3': 36 }
*                    ]
*                })
*            }
 *
 * In this example with set the category axis to the bottom of the surface, bound the axis to
 * the `name` property and set as title "Sample Values".
 */
