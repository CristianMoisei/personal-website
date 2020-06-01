function advance(row1, row2){
     document.getElementById(row1).classList.remove("loading");
     document.getElementById(row1).classList.add("complete");

     document.getElementById(row2).classList.remove("placeholder");
     document.getElementById(row2).classList.add("loading");
}

function merge(){
     document.getElementById('row-1').classList.add("merge-1");
     document.getElementById('row-2').classList.add("merge-2");
     document.getElementById('row-3').classList.add("merge-3");
     document.getElementById('row-4').classList.add("merge-4");

     document.getElementById('searching').classList.add("merge-header");
     document.getElementById('end').classList.add("reveal-end");
}