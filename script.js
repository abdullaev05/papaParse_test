window.addEventListener('DOMContentLoaded', () => {

  let start = document.getElementById('start');
  const csvInput = document.getElementById('csvInput');
  let operation = document.getElementById('operation');

  csvInput.addEventListener('change', () => {
    start.addEventListener('click', parseFile);
    operation.addEventListener('click', formatCsv);
  });

  function parseFile() {
    parse(csvInput.files[0]);
  }

  function formatCsv() {
    data.forEach(function (e) {
      e.forEach(function (item) {
        parseFloat(item = item.replace(/,/, '.'));
      });
    });
    console.log(data);
  }

  // function formatCsv(){
  //  // const arr = data.map((item) =>
  //  // item.replace(/,/, '.')
  //  // );
  //  // console.log(arr);
  //  // const resData = data.map((el) => parseFloat (el.replace(/,/, '.')));
  //  // console.log(resData);
  // }

  function parse(csvInput) {
    Papa.parse(csvInput, {
      header: false,
      delimiter: ';',
      //download: false,
      dynamicTyping: true,
      complete: function (results) {
        //console.log(results.data);
        data = results.data;
        formatCsv();
      }
    });
  }

});


// function formatCsv(){
//  let copy = [];
//  data.forEach(function(item){
//   copy.push(item);
//   });
//   console.log(copy);
// }