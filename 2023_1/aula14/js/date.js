function getFormatDate(){
    let dataHtml = document.getElementById('dn').value
    let formatData = new Date(dataHtml)
    console.log("Data sem formatar "+ dataHtml)
    console.log("Data formatada "+ formatData)
}