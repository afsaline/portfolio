// scripts.js

// Custom function
function calculateTotal() {
    let value = null;
    let temp;
    // Store the data of inputs
    var billAmount = document.getElementById("billAmount").value;
    var currency = document.getElementById("currency").value;
//    var numPeople = document.getElementById("totalPeople").value;
    
    // Quick validation
    if(billAmount === "") {
        window.alert("Please enter some values to get this baby up and running!");
        return; // this will prevent the function from continuing
    }
    
//    // Check to see if this input is empty or less than or equal to 1
//    if(numPeople === "" || numPeople <= 1) {
//        numPeople = 1;
//        
//        document.getElementById("each").style.display = "none";
//        
//    } else {
//        
//        document.getElementById("each").style.display = "block";
//        
//    }
    const Http = new XMLHttpRequest();
    const url = "http://free.currencyconverterapi.com/api/v6/convert?q=USD_BRL&compact=y&apiKey=5bd82dd049ad5d337d66";
    temp = fetch(url)
    .then(data=>{return (data.json())})
    .then(res=>{
        temp = res.USD_BRL.val;
        billAmount = parseFloat(billAmount);
        temp = parseFloat(temp);
        var total = (billAmount * temp);
        total = Math.round(total * 100) / 100;
        total = total.toFixed(2);
        document.getElementById("total").innerHTML = total;
        
    });
    document.getElementById("each").style.display = "none";
    document.getElementById("calculate").onclick = function() { calculateTotal(); };
    
//    temp = temp.USD_EUR.val;

    
//    let response = Http.open("GET", url);
//    console.log(response);
//    Http.send();
//    Http.onreadystatechange=(e)=>{
//        value = Http.responseText;
//        value = JSON.parse(value);
//        temp = value.USD_EUR.val;
//        console.log(temp + "aline");
//    }
//    
//    console.log(Http.onreadystatechange + "wtf");
    
    // Do some math!
    
    
    
    // Display the tip!
//    document.getElementById("totalTip").style.display = "block";
    
    
}

// Hide the tip amount on load
//document.getElementById("totalTip").style.display = "none";


// Clicking the button calls our custom function
document.getElementById("calculate").onclick = function() { calculateTotal(); };











