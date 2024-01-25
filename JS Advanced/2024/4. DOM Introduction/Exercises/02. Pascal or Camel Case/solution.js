function solve() {
  let commands = {
    'Camel Case': (txt) => {
      let txtAsArr = txt.split(' ');
      result.push(txtAsArr.shift());
      txtAsArr = txtAsArr.map(a => a[0].toUpperCase() + a.slice(1));
      result.push(...txtAsArr);
    },
    'Pascal Case': (txt) => {
      let txtAsArr = txt.split(' ');
      txtAsArr = txtAsArr.map(a => a[0].toUpperCase() + a.slice(1));
      result.push(...txtAsArr);
    }
  };
  let result = [];
  let text = document.getElementById('text').value.toLowerCase();
  let currentConvention = document.getElementById('naming-convention').value;
  if (commands.hasOwnProperty(currentConvention)) {
    commands[currentConvention](text);
  } else {
    result.push('Error!');
  }

  document.getElementById('result').textContent = result.join('');
}