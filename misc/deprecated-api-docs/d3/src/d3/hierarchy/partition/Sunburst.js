/**
 * @class Ext.d3.hierarchy.partition.Sunburst
 * @extend Ext.d3.hierarchy.partition.Partition
 * @xtype d3-sunburst
 * The 'd3-sunburst' component visualizes tree nodes as donut sectors,
 * with the root circle in the center. The angle and area of each sector corresponds
 * to its {@link Ext.d3.hierarchy.Hierarchy#nodeValue value}. By default
 * the same value is returned for each node, meaning that siblings will span equal
 * angles and occupy equal area.
 *
 *          @example packages=[extangular]
 *            import { Component } from '@angular/core'
 *            declare var Ext: any;
 *
 *            @Component({
 *                selector: 'app-root-1',
 *                styles: [`
 *                        `],
 *                template: `
 *                    <container #item layout="fit">
 *                        <d3-sunburst #item [store]="store"></d3-sunburst>
 *                    </container>
 *                `
 *            })
 *            export class AppComponent {
 *                store = Ext.create('Ext.data.TreeStore', {
 *                    data: [{
 *                        text: "Oscorp",
 *                        children: [{
 *                            text: 'Norman Osborn'
 *                            },
 *                            {
 *                                text: 'Harry Osborn'
 *                            },
 *                            {
 *                                text: 'Arthur Stacy'
 *                            }
 *                        ]
 *                    },{
 *                        text: "SHIELD",
 *                        children: [{
 *                            text: 'Nick Fury'
 *                            },{
 *                                text: 'Maria Hill'
 *                            },{
 *                                text: 'Tony Stark'
 *                            }
 *                        ]
 *                    },{
 *                        text: "Illuminati",
 *                        children: [{
 *                                text: 'Namor'
 *                            },{
 *                                text: 'Tony Stark'
 *                            },{
 *                                text: 'Reed Richards'
 *                            },{
 *                                text: 'Black Bolt'
 *                            },{
 *                                text: 'Stephen Strange'
 *                            },{
 *                                text: 'Charles Xavier'
 *                            }
 *                        ]
 *                    }
 *                    ]
 *                });
 *            }
 * *
 */

/**
 * @cfg {Array} [textPadding=[5, '0.35em']]
 * The padding of a node's text inside its container.
 *
 * @accessor
 */

/**
 * @cfg {Number} [zoomParentDotRadius=30]
 * The radius of the dot in the center of the sunburst that represents the parent node
 * of the currently visible node hierarchy and allows to zoom one level up by clicking
 * or tapping it.
 *
 * @accessor
 */
