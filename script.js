window.onload = function () {

    CurrentJSON = null;
    document.getElementById('buttonDC').style.visibility = 'hidden';
    document.getElementById('buttonMarvel').style.visibility = 'hidden';

    document.getElementById("buttonSubmit").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("buttonResults").innerHTML = "";
        document.getElementById('buttonDC').style.visibility = 'visible';
        document.getElementById('buttonMarvel').style.visibility = 'visible';
        const url = "https://superhero-quotes.herokuapp.com/random";
        console.log(url);
        fetch(url)
        .then(function(response) {
          return response.json();
        }).then(function(json) {
            CurrentJSON = json;
            console.log(json.Banner)
            let results = '<h2 class="quoted"> "' + json.Stuff.data.quote + '"</h2>';
            document.getElementById("quoteResults").innerHTML = results;
        });
      });

      document.getElementById("buttonDC").addEventListener("click", function(event) {
        document.getElementById('buttonDC').style.visibility = 'hidden';
        document.getElementById('buttonMarvel').style.visibility = 'hidden';
        event.preventDefault();
          if(CurrentJSON.Banner == "Marvel Cinematic Universe (MCU)"){
            let results = '<h2>Incorrect! This quote was said by ' + CurrentJSON.Stuff.data.author + "</h2>";
            document.getElementById("buttonResults").innerHTML = results;
          }else{
            let results = '<h2>Correct! This quote was said by ' + CurrentJSON.Stuff.data.author + "</h2>";
            document.getElementById("buttonResults").innerHTML = results;
          }
      });

      document.getElementById("buttonMarvel").addEventListener("click", function(event) {
        document.getElementById('buttonDC').style.visibility = 'hidden';
        document.getElementById('buttonMarvel').style.visibility = 'hidden';
        if(CurrentJSON.Banner == "Marvel Cinematic Universe (MCU)"){
            let results = '<h2>Correct! This quote was said by ' + CurrentJSON.Stuff.data.author + "</h2>";
            document.getElementById("buttonResults").innerHTML = results;
          }else{
            let results = '<h2>Incorrect! This quote was said by ' + CurrentJSON.Stuff.data.author + "</h2>";
            document.getElementById("buttonResults").innerHTML = results;
          }
    });
    
    }
    