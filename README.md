json2csv
========

## What Does This Do?

This is a package for [Meteor](https://www.meteor.com/)

json2csv allows you to generate a csv file from an array or a [Meteor collection](http://docs.meteor.com/#collections).  This is useful for quick-and-dirty import/export or for spreading data in excel.

## Use

json2csv takes three arguments

### array  -  *[array] or [function]*
 
 This could be any array, or a function that returns an array such as Meteor's *collection*.find()fetch() function
 
 ```js
 // a simple array
 [{firstname: "Alex", lastname: "Webster"}, {firstname: "Jeff", lastname: "Wode"}]
 
 // a Meteor collection
 Names.find().fetch()
 
 // part of a Meteor collection
 Names.find({firstname: "Alex"}, {sort: {lastname: -1}}).fetch()
 ```
 
### headings  -  *[boolean]*
  
Whether or not to include a header line of field names in the csv
 
### quotes  -  *[boolean]*
 
Whether or not to wrap csv values in double quotation marks ""

## References

See http://docs.meteor.com/#find and http://docs.meteor.com/#fetch for details on Meteor's collection.find().fetch() functions

## Examples
```js

  // simply covert an array
  var array = [{firstname: "Alex", lastname: "Webster"}, {firstname: "Jeff", lastname: "Wode"}]
  var csv = json2csv(array, true, false)
  
  // or return an entire Meteor collection
  var csv = json2csv(Names.find().fetch(), true, true)
  
  // or return part of a Meteor collection
  var csv = json2csv(Names.find({firstname: "Alex"}, {sort: {lastname: -1}}).fetch(), true, true)
  
  // .. and download as a csv (there are better ways to do this...)
  window.open("data:text/csv;charset=utf-8," + escape(csv))
```
## Credits

json2csv is based substantially on Joseph Sturtevant's [fiddle](http://jsfiddle.net/sturtevant/vUnF9/), which was in turn based on Zachary's [stackoverflow answer](http://stackoverflow.com/questions/4130849/convert-json-format-to-csv-format-for-ms-excel/4130939#4130939)

## Install

Use [meteorite](http://oortcloud.github.com/meteorite/):

Then add via:

```bash
mrt add json2csv
```
