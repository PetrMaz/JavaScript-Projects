document.querySelector("#submit").addEventListener("click", () => {
    var hex_colors = ["1","2","3","4","5","6", "7", "8","9","A","B","C","D","E","F"];
    
    var hexcode1 = "";  
    var hexcode2 = "";
    var random_index = 0;

  for (let i = 0; i < 6;i++){ 
      //random_index gives us the position in the array[hex_colors]
      var random_index = Math.floor(Math.random()*hex_colors.length); 
    hexcode1 = hexcode1+ hex_colors[random_index];
    //console.log("Loop no= "+i+",Random_Index= "+random_index+", Hexcode1 = "+hexcode1)
//v konzoli se nám zobrazí random_index, coz je nase pozice v array a hodnota té pozice z array. Takto loop poběží 6x
var random_index = Math.floor(Math.random()*hex_colors.length);
    hexcode2 = hexcode2+ hex_colors[random_index];
   // console.log("Loop no= "+i+",Random_Index= "+random_index+", Hexcode2 = "+hexcode2)
//v konzoli se nám zobrazí random_index, coz je nase pozice v array a hodnota té pozice z array. Takto loop poběží 6x
//pokud bychom sem do console.log napsali, ze chceme hexcode1 bude se nam to zobrazovat spatne, protoze nam to bude ukazovat pozici z hexcode2
  


  }

  document.body.style.background = `linear-gradient(to right, #${hexcode1}, #${hexcode2})`;
  document.querySelector("#hexcode1").textContent = hexcode1;
  document.querySelector("#hexcode2").textContent = hexcode2;

  

});