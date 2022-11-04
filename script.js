// iterate through localStorage on page load
Object.keys(localStorage).forEach(function(key){
  // get item by key
  const getItem = JSON.parse(localStorage.getItem(key));

  // color fields that are marked under "done"
  function colorField () {
    if (getItem.done) {
      return `<td style="background-color: green" class="done"><button onclick="done(${key})">done</button></td>`;
    }
    return `<td class="done"><button onclick="done(${key})">done</button></td>`;
  }

  // add row to table
  document.getElementById("list").innerHTML += `
        <tr>
          ${colorField()}
          <td>${getItem.inputValue}</td>
          <td class="delete"><button onclick="del(${key})">delete</button></td>
        </tr>`;
});

// add value to localstorage
function add() {
  // get the value in text field
  const inputValue = document.getElementById("task-input").value;

  // define defaults
  const obj = {
    inputValue,
    done: false
  }

  // consider only inputs with character count higher or equal 3
  if (inputValue.length >= 3) {
    // assign item with key and value
    // object needs to be stringified since localstorage value takes only strings
    localStorage.setItem(String(localStorage.length + 1), JSON.stringify(obj))
  }
  else {
    window.alert("Input at least 3 characters!");
  }
}

// done button
function done(key) {
  // parse the value from localstorage value
  const getItem = JSON.parse(localStorage.getItem(key));

  const obj = {
    inputValue: getItem.inputValue
  }

  if (!getItem.done) {
    obj.done = true;
  }
  else {
    obj.done = false;
  }

  // set localstorage key and value
  localStorage.setItem(key, JSON.stringify(obj))
}

// delete button
function del(key) {
  // remove item by key passed through "onclick" event
  localStorage.removeItem(key);
}


// change background color function
function cc() {

  //search element id from pulldown and make it var for next step to use 
  var chosen1 = document.getElementById('pulldown').value;

    // if statement to change to user chosen background color
  if (chosen1 == "LB") {
    document.body.style.backgroundColor = "#7AACFE";
  } else if (chosen1 == "Green") {
    document.body.style.backgroundColor = "#78E48A";
  } else if (chosen1 == "Purple") {
    document.body.style.backgroundColor = "#9408AA";
  } else if (chosen1 == "Grey") {
    document.body.style.backgroundColor = "#1A1A1A";
  }
}
