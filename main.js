function initMap() {
        var map = new google.maps.Map(document.getElementById("map"), {
          center: new google.maps.LatLng(41.390205, 2.154007),
          zoom: 1
        });

        var locations = [
          ["Barcelona", 41.390205, 2.154007, 1],
          ["Rio De Janiero", -22.908333, -43.196388, 5],
          ["New York", 40.73061, -73.935242, 4],
          ["Dublin", 53.35014, -6.266155, 3],
          ["Stockholm", 59.334591, 18.06324, 2],
          ["Sydney", -33.865143, 151.2099, 6],
          ["Tokyo", 35.652832, 139.839478, 7],
          ["Maldives", 1.924992, 73.399658, 8],
          ["Cape Town", -33.918861, 18.4233, 9]
        ];

        /*
        var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 1,
          center: new google.maps.LatLng(41.390205, 2.154007),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
*/
        // var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i < locations.length; i++) {
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            animation: google.maps.Animation.DROP
          });

          google.maps.event.addListener(
            marker,
            "click",
            (function(marker, i) {
              return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
              };
            })(marker, i)
          );
        }

        var currentInfoWindow = null;
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(54.3958333, 9.79166666),
          map: map,
          animation: google.maps.Animation.DROP,
          title: "Barcelona"
        });
        var infowindow = new google.maps.InfoWindow({
          content:
            '<b><a href="index.html">Barcelona</a></b><br>Country: Spain<br>Population:<br>Food: Paella<br>Landmark: Sagrada Familia<br><a href="#" target=_blank><img id="id" src="images/qrzimagen.png" height=110></a><br>Click for larger image<br><br>'
        });

        google.maps.event.addListener(marker, "click", function() {
          if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
          } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
          }

          infowindow.open(map, marker);
          currentInfoWindow = infowindow;
          google.maps.event.addListenerOnce(
            currentInfoWindow,
            "domready",
            function() {
              $("#id").attr("src", "#");
            }
          );
        });
      }