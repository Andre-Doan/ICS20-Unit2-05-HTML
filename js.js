// JavaScript File
<script>
   "use strict"
    let squareLength;
    let squareArea;
    function myFunction() {
    squareLength= document.getElementById("variable").value
    squareArea= squareLength*squareLength
    alert(squareArea)
    }
    document.getElementById("variabletosquarearea").addEventListener("click",myFunction)
  </script>
