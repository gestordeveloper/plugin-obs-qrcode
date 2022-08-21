var bc = new BroadcastChannel('obs-lower-qrcode');

bc.onmessage = function (ev) {
    received_data=ev.data.split("|");

    document.getElementById("name_bank").innerHTML = received_data[0];
    name_bank = true;
    if(received_data[0] == ''){ name_bank = false; }

    document.getElementById("agency").innerHTML = received_data[1];
    document.getElementById("operation").innerHTML = received_data[2];
    document.getElementById("count").innerHTML = received_data[3];

    animation = received_data[4];

    if (animation == 'animateIn') {
        document.getElementById("box-qrCode").classList.add("show");
        if(name_bank){
            document.getElementById("box-conta").classList.add("show");
        }
    };

    if (animation == 'animateOut') {
        document.getElementById("box-qrCode").classList.remove("show");
        document.getElementById("box-conta").classList.remove("show");
    };

}