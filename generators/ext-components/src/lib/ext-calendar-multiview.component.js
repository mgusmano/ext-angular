(function () {
class ExtCalendar_multiview extends ExtBase {
	get compact(){return this.getAttribute('compact')};set compact(compact){this.setAttribute('compact',compact)}
	get compactOptions(){return this.getAttribute('compactOptions')};set compactOptions(compactOptions){this.setAttribute('compactOptions',compactOptions)}
	get defaultView(){return this.getAttribute('defaultView')};set defaultView(defaultView){this.setAttribute('defaultView',defaultView)}
	get layout(){return this.getAttribute('layout')};set layout(layout){this.setAttribute('layout',layout)}
	get store(){return this.getAttribute('store')};set store(store){this.setAttribute('store',store)}
	get timezoneOffset(){return this.getAttribute('timezoneOffset')};set timezoneOffset(timezoneOffset){this.setAttribute('timezoneOffset',timezoneOffset)}
	get value(){return this.getAttribute('value')};set value(value){this.setAttribute('value',value)}
	get views(){return this.getAttribute('views')};set views(views){this.setAttribute('views',views)}

	static XTYPE() {return 'calendar_multiview'}
  static PROPERTIESOBJECT() { return {
    "compact": "Boolean",
    "compactOptions": "Object",
    "defaultView": "String",
    "layout": "Object/String",
    "store": "Object/Ext.calendar.store.Calendars",
    "timezoneOffset": "Number",
    "value": "Date",
    "views": "Object",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",

  }}
  static EVENTS() { return [
		{name:'ready',parameters:''}

  ]}
  static METHODS() { return [
		{ name:'moveNext',function: function() { return this.ext.moveNext() } },
		{ name:'movePrevious',function: function() { return this.ext.movePrevious() } },
		{ name:'navigate',function: function(amount,interval) { return this.ext.navigate(amount,interval) } },
		{ name:'setView',function: function(view) { return this.ext.setView(view) } },

  ]}

  constructor() {
    super()
    this.METHODS = ExtCalendar_multiview.METHODS()
    this.XTYPE = ExtCalendar_multiview.XTYPE()
    //this.PROPERTIES = ExtCalendar_multiview.PROPERTIES()
    this.PROPERTIESOBJECT = ExtCalendar_multiview.PROPERTIESOBJECT()
    this.EVENTS = ExtCalendar_multiview.EVENTS()
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }
}
window.customElements.define('ext-calendar_multiview', ExtCalendar_multiview);
})();