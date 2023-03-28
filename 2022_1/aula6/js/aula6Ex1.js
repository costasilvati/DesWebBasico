function insertRow(){
    var x=document.getElementById('tabela').insertRow(0);
    var y = x.insertCell(0);
    var z = x.insertCell(1);
    y.innerHTML="New Cell1";
    z.innerHTML="New Cell2";
}