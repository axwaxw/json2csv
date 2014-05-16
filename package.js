Package.describe({
  summary: "convert json or a collection to csv"
});

Package.on_use(function (api, where) {
  api.add_files('json2csv.js', ['client' ,'server']);    
  if (api.export) 
    api.export('json2csv');
});
