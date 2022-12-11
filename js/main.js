document.getElementById('tvSizeSect').setAttribute("style", "display: none");
document.getElementById('tvNumSect').setAttribute("style", "display: none");


  function tvChecker(that){
      var tvQ = document.getElementById('hasTv').value;
    console.log("checking tv");
    console.log(tvQ);
    if(tvQ === "Yes"){
      document.getElementById('tvSizeSect').setAttribute("style", "display: block");
      document.getElementById('tvNumSect').setAttribute("style", "display: block");
    }else{
      console.log("goaway");
      document.getElementById('tvSizeSect').setAttribute("style", "display: none");
      document.getElementById('tvNumSect').setAttribute("style", "display: none");
    }
  }


//When the Calculate Button is Clicked DO the following:
document.getElementById("calc").onclick = function(){
  //Establish Variables
  var computers = parseInt(document.getElementById('numComp').value) * 161.50;
  var monitors = parseInt(document.getElementById('numMon').value) * 29.95;
  var basicPrint = parseInt(document.getElementById('numPrint').value) * 19.99;
  var mfpPrint = parseInt(document.getElementById('numMfp').value) * 161.50;
  var tvQ = document.getElementById('hasTv').value;
  var miles = parseInt(document.getElementById('numMiles').value) * 20.00 ;
  var server = parseInt(document.getElementById('hasServer').value);
  var insurance = parseInt(document.getElementById('hasInsure').value);
  var hasNetwork = parseInt(document.getElementById('hasNetw').value);
  var roundTotal = Math.floor(total * 100) / 100;


//check if the user has tv's to move
  if(tvQ === "No"){
    //if no tv's to move set num to 0
    var tvNum = 0;
  }else{
    var tvSize = parseInt(document.getElementById('tvSize').value);
    var tvNum = parseInt(document.getElementById('tvNum').value) * tvSize;
    console.log(tvSize);
    console.log(tvNum);
  }
//testing
  // console.log("1: " + computers);
  // console.log( "2: " + monitors);
  // console.log("3: " + basicPrint);
  // console.log("4: " + mfpPrint);
  // console.log("5: " + tvNum);
  // console.log("6: " + miles);
  // console.log("7: " + insurance);
  // console.log("8: " + server);
  // console.log("9: " + hasNetwork);
var items = [computers, monitors, basicPrint, mfpPrint, tvNum, miles, insurance, server, hasNetwork];

for(var i = 0; i < items.length; i++){
  console.log("Variable " + i + ": " + items[i]);
  if(isNaN(items[i])){
    document.getElementById("error").innerText = "*Please ensure you input a value for each field. Use the number 0 if you do not plan on moving a particular item.";
    document.getElementById("price").innerText = "$" + "ERROR";
    break;
  }else{
    //calc total
    document.getElementById("error").innerText = "";
    var total = computers + monitors + basicPrint + mfpPrint + tvNum + miles + insurance + server + hasNetwork;
    document.getElementById("price").innerText = "$" + total;
  }
}

}
