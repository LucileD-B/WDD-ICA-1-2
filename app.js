form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(email.value, sender.value, message.value);
    form.reset();
    const response = document.getElementById('response');
    response.style.display = 'flex';
    setTimeout(() => {
        response.style.display = 'none';
    }, 3000);
})


function initMap() {
    var myLatLng = { lat: 46.19045734533097, lng: 6.777050849251385 };
    var map = new google.maps.Map(document.getElementById('mymap'), {
        zoom: 15,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Ski School'
    });
}


