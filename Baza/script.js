function Z() {
    document.getElementById("myForm1").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
      
        // Retrieve input values
        var sana = document.querySelector("#myForm1 #sana").value;
        var davomat = document.querySelector("#myForm1 #davomat").value;
        var homeWork = document.querySelector("#myForm1 #uyIshi").value;
        var topshiriq = document.querySelector("#myForm1 #topshiriq").value;
        // Create an object to store the data
      if (sana == "" || davomat == "" || homeWork == "" || topshiriq == "") {
        alert("Barchasini to'ldiring!")
      } else {
          var data = {
            sana: sana,
            davomat: davomat,
            homeWork: homeWork,
            topshiriq: topshiriq
        };
          // Retrieve existing data from local storage
          var existingData = localStorage.getItem("myData");
        
          // If there is existing data, parse it from JSON
          if (existingData) {
            existingData = JSON.parse(existingData);
          } else {
            // If there is no existing data, initialize an empty array
            existingData = [];
          }
        
          // Add the new data to the existing data array
          existingData.push(data);
        
          // Save the updated data to local storage
          localStorage.setItem("myData", JSON.stringify(existingData));
        
          // Reset the form
          document.getElementById("myForm1").reset();
      }
      
        // Redirect to the database.html page
      });
}
function B() {
  document.getElementById("myForm2").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Retrieve input values
    var sana = document.querySelector("#myForm2 #sana").value;
    var davomat = document.querySelector("#myForm2 #davomat").value;
    var homeWork = document.querySelector("#myForm2 #uyIshi").value;
    var topshiriq = document.querySelector("#myForm2 #topshiriq").value;


    if (sana == "" || davomat == "" || homeWork == "" || topshiriq == "") {
      alert("Barchasini to'ldiring!")
    } else {
        // Create an object to store the data
        var data2 = {
          sana: sana,
          davomat: davomat,
          homeWork: homeWork,
          topshiriq: topshiriq
      };
        // Retrieve existing data from local storage
        var existingData2 = localStorage.getItem("myData2");

        // If there is existing data, parse it from JSON
        if (existingData2) {
          existingData2 = JSON.parse(existingData2);
        } else {
          // If there is no existing data, initialize an empty array
          existingData2 = [];
        }

        // Add the new data to the existing data array
        existingData2.push(data2);

        // Save the updated data to local storage
        localStorage.setItem("myData2", JSON.stringify(existingData2));

        // Reset the form
        document.getElementById("myForm2").reset();
    }
  
  
    // Redirect to the database.html page
  });
}


Z()
B()
// localStorage.clear()