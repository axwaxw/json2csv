json2csv
========

## What Does This Do?

This is a package for [Meteor](https://www.meteor.com/)

json2csv allows you to generate a csv file from an array or a [Meteor collection](http://docs.meteor.com/#collections).  This is useful for quick-and-dirty import/export or for spreading data in excel.

## Use

json2csv takes three arguments:   **json2csv(_array_, _headings_, _quotes_)**

#### array  -  *[array] or [function]*
 
 This could be any array, or a function that returns an array, such as Meteor's **_collection_.find()fetch()** function
 
 ```js
 // a simple array
 [
   {firstname: "Alex", lastname: "Webster"},
   {firstname: "Jeff", lastname: "Wode"}
 ]
 
 // a Meteor collection
 Names.find().fetch()
 
 // part of a Meteor collection
 Names.find({firstname: "Alex"}, {sort: {lastname: -1}}).fetch()
 ```
 
#### headings  -  *[boolean]*
  
Whether or not to include a header line of field names in the csv
 
#### quotes  -  *[boolean]*
 
Whether or not to wrap csv values in double quotation marks ""

## References

See http://docs.meteor.com/#find and http://docs.meteor.com/#fetch for details on Meteor's collection.find().fetch() functions

## Examples
```js

  // simply covert an array
  var array = [
    {firstname: "Alex", lastname: "Webster"}
    {firstname: "Jeff", lastname: "Wode"}
  ]
  var csv = json2csv(array, true, false)
  
  // or return an entire Meteor collection
  var csv = json2csv(Names.find().fetch(), true, true)
  
  // or return part of a Meteor collection
  var csv = json2csv(Names.find({firstname: "Alex"}, {sort: {lastname: -1}}).fetch(), true, true)
  
```
You could use this to add a 'download' button to a template as follows

#### HTML (using Bootstrap)

```html
  <a href="#" class="btn btn-default" role="button" id="download">Download</a>
```

#### javaScript

```js
  Template.orders.events({
    'click #download': function (e) {       
      csv = json2csv(Orders.find().fetch(), true, true)     
      e.target.href = "data:text/csv;charset=utf-8," + escape(csv) 
      e.target.download = "orders.csv";    
    }
  });
```
## Limitations

This is only intended for 'flat' files so you should filter collections accordingly.

## Credits

json2csv is based substantially on Joseph Sturtevant's [fiddle](http://jsfiddle.net/sturtevant/vUnF9/), which was in turn based on Zachary's [stackoverflow answer](http://stackoverflow.com/questions/4130849/convert-json-format-to-csv-format-for-ms-excel/4130939#4130939)

## Install

With [Meteorite](https://github.com/oortcloud/meteorite) installed:

```sh
$ mrt add json2csv
```
