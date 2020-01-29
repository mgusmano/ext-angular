/**
 * @class Ext.pivot.dimension.Item
 * @extend Ext.Base
 *
 * This class is used to initialize the dimensions defined on the pivot grid leftAxis,
 * topAxis and aggregate.
 */

/**
 * @cfg {String} [id=null]
 * Unique id of this dimension.
 * @accessor
 */

/**
 * @cfg {String} [header=''] (required)
 *
 * This text is visible in the pivot grid in the following cases:
 *
 * - the dimension is defined on the left axis. The pivot grid will generate one grid column per dimension and
 * this header will go into the grid column header.
 *
 * - the dimension is defined on the aggregate. The pivot grid will generate one grid column per dimension per top
 * axis label. If there are at least 2 aggregate dimensions then this header will be visible. When only one is
 * defined the aggregate dimension header is replaced by the top axis label.
 *
 * - if the {@link Ext.pivot.plugin.Configurator Configurator plugin} is used then this header will be visible
 * in the axis panels.
 * @accessor
 */

/**
 * @cfg {String} [dataIndex=''] (required)
 * The field name on the record from where this dimension extracts data.
 * @accessor
 */

/**
 * @cfg {String} [sortIndex='']
 * Field name on the record used when sorting this dimension results. Defaults to {@link #dataIndex} if
 * none is specified.
 * @accessor
 */

/**
 * @cfg {Number} [width=100]
 * Default column width when this dimension is a left axis or aggregate dimension.
 * Used by the generated columns.
 * @accessor
 */

/**
 * @cfg {Number} [flex=0]
 * Column flex when this dimension is a left axis or aggregate dimension.
 * Used by the generated columns.
 * @accessor
 */

/**
 * @cfg {String} [align="left"]
 * Column alignment when this dimension is a left axis or aggregate dimension.
 * Used by the generated columns.
 * @accessor
 */

/**
 * @cfg {Boolean} [sortable=true]
 * Is this dimension sortable when the pivot is generated?
 */

/**
 * @cfg {"ASC"/"DESC"} [direction="ASC"]
 * If this dimension is sortable then this is the type of sorting.
 * @accessor
 */

/**
 * @cfg {Function} [sorterFn=null]
 * Provide here your own sorting function for this dimension.
 * If none is specified then the defaultSorterFn is used.
 * @accessor
 */

/**
 * @cfg {Boolean} [caseSensitiveSort=true]
 * If this dimension is sortable, should we do a case sensitive sort?
 * @accessor
 */

/**
 * @cfg {Ext.pivot.filter.Base} [filter=null]
 * Provide a filter configuration to filter your axis items.
 * This works only on left/top axis dimensions.
 *
 * Example for a label filter:
 *
 *      {
 *          dataIndex:  'year',
 *          header:     'Year',
 *          filter: {
 *              type:       'label',
 *              operator:   '=',
 *              value:      2012
 *          }
 *      }
 *
 *
 * Example for a value filter:
 *
 *      {
 *          dataIndex:  'year',
 *          header:     'Year',
 *          filter: {
 *              type:       'value',
 *              operator:   'between',
 *              value:      [2012, 2015]
 *          }
 *      }
 *
 *
 * Example for a top 10 value filter:
 *
 *      {
 *          dataIndex:  'year',
 *          header:     'Year',
 *          filter: {
 *              type:           'value',
 *              operator:       'top10',
 *              dimensionId:    'value',   // this is the id of an aggregate dimension
 *              topType:        'items',
 *              topOrder:       'bottom'
 *          }
 *      }
 * @accessor
 */

/**
 * @cfg {String/Function} [labelRenderer=null]
 *
 * Callback function or the name of the callback function to execute when labels
 * are generated for this dimension.
 *
 * **Note:** This works when the dimension is used as either left or top axis dimension.
 *
 * Example:
 *
 *      {
 *          xtype: 'pivot',
 *
 *          matrix: {
 *              topAxis: [{
 *                  dataIndex: 'month'
 *                  labelRenderer: function(monthValue){
 *                      return Ext.Date.monthNames[monthValue];
 *                  }
 *              }]
 *
 *              // ...
 *          }
 *      }
 *
 * The above labelRenderer will convert the month value to a textual month name.
 *
 * @param {Mixed} value Value that needs to be formatted
 * @return {String} The label value displayed in the pivot grid
 * @accessor
 */

/**
 * @cfg {String/Function} [renderer=null]
 *
 * Callback function or the name of the callback function that will be attached to the grid column
 * generated for this dimension.
 *
 * **Note:** This works when the dimension is used as either left axis or aggregate dimension.
 *
 * The following example describes how columns are generated by the pivot grid:
 *
 *      {
 *          xtype: 'pivot',
 *
 *          matrix: {
 *              leftAxis: [{
 *                  dataIndex: 'country'
 *              }],
 *
 *              topAxis: [{
 *                  dataIndex: 'year',
 *                  labelRenderer: function(v) {
 *                      return 'Year ' + v;
 *                  }
 *              }],
 *
 *              aggregate: [{
 *                  dataIndex: 'value',
 *                  aggregator: 'sum',
 *                  renderer: function(value, metaData, record, rowIndex, colIndex, store, view){
 *                      metaData.tdCls = (value < 0) ? 'redCls' : 'greenCls';
 *                      return Ext.util.Format(value, '0,000.00');
 *                  }
 *              },{
 *                  dataIndex: 'qty',
 *                  aggregator: 'sum',
 *                  renderer: function(value, metaData, record, rowIndex, colIndex, store, view){
 *                      metaData.tdCls = (value < 0) ? 'redCls' : 'greenCls';
 *                      return Ext.util.Format(value, '0.00');
 *                  }
 *              }]
 *          }
 *      }
 *
 * Let's say that we have records for the years 2015 and 2016. In this scenario the resulting grid will have:
 *
 *  - 1 column for the left axis dimension defined. This column will use the renderer defined on the left
 *  axis dimension
 *  - 4 columns calculated for the top axis results (2) multiplied by the number of aggregate dimensions (2). These columns will
 *  use the renderers defined on the aggregate dimensions and each group column header is generated using
 *  labelRenderer defined on the top axis dimension.
 *
 * Read more about grid column renderers {@link Ext.grid.column.Column#renderer here}.
 * @accessor
 */

/**
 * @cfg {String} [formatter=null]
 *
 * This formatter will be attached to the grid column generated for this dimension.
 *
 * **Note:** This works when the dimension is used either as a left axis or an aggregate dimension.
 *
 * Read more about grid column formatters {@link Ext.grid.column.Column#formatter here}.
 * @accessor
 */

/**
 * @cfg {Object} [column=null]
 *
 * Configuration object that will be used when the grid columns are generated. Beware that this
 * object will be merged into each column generated for each aggregate and left axis dimensions.
 *
 * **Note:** This works when the dimension is used either as a left axis or an aggregate dimension.
 * @accessor
 */

/**
 * @cfg {Ext.exporter.file.Style/Ext.exporter.file.Style[]} [exportStyle=null]
 *
 * Style used during export by the {@link Ext.pivot.plugin.Exporter exporter plugin}. This style will
 * be applied to the columns generated for the aggregate or left axis dimensions in the exported file.
 *
 * You could define it as a single object that will be used by all exporters:
 *
 *      aggregate: [{
 *          dataIndex: 'price',
 *          header: 'Total',
 *          aggregator: 'sum',
 *          exportStyle: {
 *              format: 'Currency',
 *              alignment: {
 *                  horizontal: 'Right'
 *              },
 *              font: {
 *                  italic: true
 *              }
 *          }
 *      }]
 *
 * You could also define it as an array of objects, each object having a `type` that specifies by
 * which exporter will be used:
 *
 *      aggregate: [{
 *          dataIndex: 'price',
 *          header: 'Total',
 *          aggregator: 'sum',
 *          exportStyle: [{
 *              type: 'html', // used by the `html` exporter
 *              format: 'Currency',
 *              alignment: {
 *                  horizontal: 'Right'
 *              },
 *              font: {
 *                  italic: true
 *              }
 *          },{
 *              type: 'csv', // used by the `csv` exporter
 *              format: 'General'
 *          }]
 *      }]
 *
 *
 * Or you can define it as an array of objects that has:
 *
 * - one object with no `type` key that is considered the style to use by all exporters
 * - objects with the `type` key defined that are exceptions of the above rule
 *
 *
 *      aggregate: [{
 *          dataIndex: 'price',
 *          header: 'Total',
 *          aggregator: 'sum',
 *          exportStyle: [{
 *              // no type defined means this is the default
 *              format: 'Currency',
 *              alignment: {
 *                  horizontal: 'Right'
 *              },
 *              font: {
 *                  italic: true
 *              }
 *          },{
 *              type: 'csv', // only the CSV exporter has a special style
 *              format: 'General'
 *          }]
 *      }]
 * @accessor
 */

/**
 * @cfg {Object} [scope=null]
 *
 * Scope to run all custom functions defined on the dimension item.
 * @accessor
 */

/**
 * @cfg {Function} [grouperFn=null]
 *
 * This function is used when the groups are generated for the axis.
 * It will return the value that will uniquely identify a group on the axis.
 *
 * ie: you have a Date field that you want to group by year.
 * This renderer could return the year from that Date value.
 *
 * The function receives one parameter and that is the record.
 *
 * It will run using Ext.callback so you can also provide a String that resolves to the view controller.
 *
 * @param {Ext.data.Model} record Record used to extract the group value
 * @return {String/Number}
 * @accessor
 */

/**
 * @cfg {String} [blankText="(blank)"]
 * Default text to use when a group name is blank. This value is applied even if you set your own label renderer.
 * @accessor
 */

/**
 * @cfg {Boolean} [showZeroAsBlank=false]
 * Should 0 values be displayed as blank? This config is used when
 * this is an aggregate dimension.
 * @accessor
 */

/**
 * @cfg {String/Function} [aggregator="sum"]
 * This is the function that should be used to aggregate when this is an aggregate dimension.
 *
 * You can either provide a function name available in {@link Ext.pivot.Aggregators} or
 * set your own function.
 *
 * It's probably best to override {@link Ext.pivot.Aggregators} to add you own function
 * and use that function name on this config. This way the stateless pivot will save this value.
 * @accessor
 */

/**
 * @cfg {Ext.util.MixedCollection} values
 * Collection of unique values on this dimension; each item has a "value" and a "display".
 * @accessor
 */

/**
 * @property {Boolean} [isAggregate=false]
 * True to identify a dimension of an aggregate configuration.
 */

/**
 * @property serialize
 * Returns the serialized dimension data.
 * @return {Object}
 */