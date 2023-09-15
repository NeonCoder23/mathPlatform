function Z() {
    let storedData = localStorage.getItem("myData");

// If there is stored data, parse it from JSON
if (storedData) {
  storedData = JSON.parse(storedData);

  // Get the table body element
  let tableBody = document.getElementById("myTable1").getElementsByTagName("tbody")[0];

  // Loop through the stored data and create a table row for each entry
  for (let i = 0; i < storedData.length; i++) {
    let row = tableBody.insertRow(-1);
    // let idCell = row.insertCell(0);
    let sanaCell = row.insertCell(0);
    let davomatCell = row.insertCell(1);
    let uyIshiCell = row.insertCell(2);
    let topshiriqCell = row.insertCell(3);
    let tekshirildiCell = row.insertCell(4);





    sanaCell.innerHTML = storedData[i].sana;
    davomatCell.innerHTML = storedData[i].davomat;

    if (storedData[i].davomat === "+") {
      davomatCell.style.backgroundColor = "lime"
    } else if(storedData[i].davomat === "-"){
      davomatCell.style.backgroundColor = "red"
    } else {
      davomatCell.style.backgroundColor = "azure"      
    }

    uyIshiCell.innerHTML = storedData[i].homeWork;
    topshiriqCell.innerHTML = storedData[i].topshiriq;
    tekshirildiCell.innerHTML = `<button id="likeButton">Tekshirildi</button>`;
  }
}
}
function B() {
  let storedData2 = localStorage.getItem("myData2");

  // If there is stored data, parse it from JSON
  if (storedData2) {
    storedData2 = JSON.parse(storedData2);
  
    // Get the table body element
    let tableBody = document.getElementById("myTable2").getElementsByTagName("tbody")[0];
  
    // Loop through the stored data and create a table row for each entry
    for (let i = 0; i < storedData2.length; i++) {
      let row = tableBody.insertRow(-1);
      // let idCell = row.insertCell(0);
      let sanaCell = row.insertCell(0);
      let davomatCell = row.insertCell(1);
      let uyIshiCell = row.insertCell(2);
      let topshiriqCell = row.insertCell(3);
      let tekshirildiCell = row.insertCell(4);
  
  
      
      // idCell.innerHTML = i+1;
      sanaCell.innerHTML = storedData2[i].sana;
      davomatCell.innerHTML = storedData2[i].davomat;
      if (storedData2[i].davomat === "+") {
        davomatCell.style.backgroundColor = "lime"
      } else if(storedData2[i].davomat === "-"){
        davomatCell.style.backgroundColor = "red"
      } else {
        davomatCell.style.backgroundColor = "azure"      
      }
      uyIshiCell.innerHTML = storedData2[i].homeWork;
      topshiriqCell.innerHTML = storedData2[i].topshiriq;
      tekshirildiCell.innerHTML = `<button id="likeButton">Tekshirildi</button>`;
    }
  }
}
Z()
B()
function like() {
  document.addEventListener('DOMContentLoaded', function () {
    var likeButtons = document.querySelectorAll('#likeButton');
    // var body = document.querySelector('body');
  
    likeButtons.forEach(likeButton => {
      likeButton.addEventListener('click', function() {
        likeButton.classList.add('liked');
      });
    
      // Restore like status on page refresh
      if (localStorage.getItem('likeStatus') === 'liked') {
        likeButton.classList.add('liked');
      }
    
      // Save like status on button click
      likeButton.addEventListener('click', function() {
        if (likeButton.classList.contains('liked')) {
          localStorage.setItem('likeStatus', 'liked');
        } else {
          localStorage.removeItem('likeStatus');
        }
      });
    })
  });
}
like()