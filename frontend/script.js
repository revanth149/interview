// axios.get('localhost:8080/randomnumber')
//   .then((response) => {
//     console.log("in script");
//     console.log(randomnumber);
//   });

fetch('http://localhost:8080/randomnumber')
    .then(response => response.text())
    .then(data => {
                    document.getElementById("p1").innerHTML = data;
                }
            );