function turnOnOrOFF() {

    let image = document.getElementById("image")
    if(image.src.match("OFFLampada.jpg")) {
        image.src = "ONLampada.jpg"
    } else {
        image.src = "OFFLampada.jpg"
    }


}