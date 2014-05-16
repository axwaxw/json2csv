json2csv = function (array, headings, quotes) {
    
    array = typeof array != 'object' ? JSON.parse(array) : array;
    var str = '';
    var line = '';

    if (headings) {
      var head = array[0];
      if (quotes) {
        for (var index in array[0]) {
          var value = index + "";
          line += '"' + value.replace(/"/g, '""') + '",';
        }
      }
      else {
        for (var index in array[0]) {
          line += index + ',';
        }
      }

      line = line.slice(0, -1);
      str += line + '\r\n';
    }
    for (var i = 0; i < array.length; i++) {
      var line = '';

      if (quotes) {
        for (var index in array[i]) {
          var value = array[i][index] + "";
          line += '"' + value.replace(/"/g, '""') + '",';
        }
      }
      else {
        for (var index in array[i]) {
          line += array[i][index] + ',';
        }
      }
      line = line.slice(0, -1);
      str += line + '\r\n';
    }
    return str;
  }
