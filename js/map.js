function initMap() {
    var e={
        lat:31.640726,
        lng:-8.017371
    },
    n=new google.maps.Map(
        document.getElementById("map"),
        {
            zoom:16,
            center:e
        }
    );
    new google.maps.Marker(
        {
            position:e,
            map:n
        }
    )
}