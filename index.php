<!DOCTYPE html>
<html>
  <head>
      <meta charset="utf-8">

    <title>
        Dự Án Côn Đảo
    </title>
   <link href="css/bootstrap.min.css" rel="stylesheet">
   <link href="css/style.css" rel="stylesheet">
  </head>
  <body>
  <div class="container">
    <input id="pac-input" class="form-control form-control-lg " type="text" placeholder="Tìm Địa Điểm">
    <div class="row">
    <div class="col-md-8">
    <div id="map"></div>
    </div>
    <div class="col-md-4">
          <select multiple="multiple" size="15" id="ds" class="form-control">
                    <?php
                    require_once("Model.php");
                    $data = new Model();

                    $result = $data->get_list('SELECT * FROM `markers` WHERE 1');
                    foreach ($result as $value) {
                      echo '<option value="'.$value['lat'].','.$value['lng'].'">'.$value['name'].'</option>';
                    }   
                    ?>
        </select>
        <a href="Add.html">Thêm Mới</a>
        <hr>
        <strong>Tìm Đường</strong><br>
         <b>Điểm A:</b>
          <div class="input-group timduong ">
            <input  id="TimDuongA" class="form-control" type="text" placeholder="Mặc định là vị trí hiện tại">
            <span class="input-group-btn">
              <button class="btn btn-secondary" type="button" onclick='vitrihientai()'>Vị trí hiện tại</button>
            </span>
          </div>
          <b>Điểm B:</b>
          <div class="input-group timduong ">
          <input id="TimDuongB" class="timduong form-control" type="text" placeholder="Điểm B">
            <span class="input-group-btn">
             <button type="submit" id="submit" class="btn btn-info">Tìm đường</button>
            </span>
          </div>
          <b>Chế Độ Tìm: </b>
          <select id="mode" class="timduong form-control">
            <option value="DRIVING">Lái xe</option>
            <option value="WALKING">Đi bộ</option>
            <option value="BICYCLING">Chạy Xe Đạp</option>     
           <option value="TRANSIT">Chuyển Tuyến</option>
          </select>
         
      </div>
    </div>



    </div>


    <script>
    var marker,map,markers, infoWindow, pos,DiemGoc,DiemDen, places,directionsDisplay,directionsService,searchBox;
      function initMap() {
        markers = [];
        
        LoadMap();
        directionsDisplay.setMap(map);
        DiemAMacDinh();
        LoadMaker();
         // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var inputA = document.getElementById('TimDuongA');
        var inputB = document.getElementById('TimDuongB');

        searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        var searchBoxA = new google.maps.places.SearchBox(inputA);
        var searchBoxB = new google.maps.places.SearchBox(inputB);
       
            
        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });
        map.addListener('bounds_changed', function() {
          searchBoxA.setBounds(map.getBounds());
        });
        map.addListener('bounds_changed', function() {
          searchBoxB.setBounds(map.getBounds());
        });
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', Search);
        //sự kiện tìm đường, vị trí A
        searchBoxA.addListener('places_changed', function() {
          var places = searchBoxA.getPlaces();
          if (places.length == 0) {
            return;
          }else
          {
            places.forEach(function(place) {
            DiemGoc=place.geometry.location;
          });
          }
        });
         //sự kiện tìm đường, vị trí B
        searchBoxB.addListener('places_changed', function() {
          var places = searchBoxB.getPlaces();
          if (places.length == 0) {
            return;
          }else
          {
            places.forEach(function(place) {
            DiemDen=place.geometry.location;
          });
          }
        });
        //sự kiện click vào button tìm đường
        document.getElementById('submit').addEventListener('click', function() {
          diemgoc=DiemGoc;
          diemden=DiemDen;
          calculateAndDisplayRoute(directionsService, directionsDisplay,diemgoc,diemden);
        });
        //sự kiện khi thay đổi chế độ trong select box
        document.getElementById('mode').addEventListener('change', function() {
          diemgoc=DiemGoc;
          diemden=DiemDen;
          calculateAndDisplayRoute(directionsService, directionsDisplay,diemgoc,diemden);
        });
        //sự kiện click vào ds maker
        document.getElementById('ds').addEventListener('change', function() {
            var LatLng = document.getElementById('ds').value;
            var lat = LatLng.slice(0, LatLng.indexOf(","));
            var lng = LatLng.slice(LatLng.indexOf(",")+1);
            var vitri = new google.maps.LatLng({lat: Number(lat), lng: Number(lng)});
            DiemDen = vitri;
            document.getElementById('TimDuongB').value=vitri;
            map.setZoom(17);
            map.setCenter(vitri);
        });

      }

      function Search()
      {
          places = searchBox.getPlaces();
          if (places.length == 0) {
            return;
          }
          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: 'https://cdn2.iconfinder.com/data/icons/snipicons/500/map-marker-48.png'
            };

            // Create a marker for each place.
            markers.push(marker = new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              draggable: true,
              position: place.geometry.location
            }));
            
            google.maps.event.addListener(marker, 'position_changed', update);
          
            //google.maps.event.addListener(marker, 'click', function(){infoWindow.open(map, marker);});
            
            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
      }

      function LoadMap()
      {
            directionsDisplay = new google.maps.DirectionsRenderer;
            directionsService = new google.maps.DirectionsService;
            map = new google.maps.Map(document.getElementById('map'), {
              zoom: 13,
              center: {lat: 8.701768 , lng: 106.611563},
              mapTypeId: 'roadmap'
            });
        infoWindow = new google.maps.InfoWindow;
      }

      function LoadMaker()
      {


           // var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
            var icons = {
                MacDinh: {
                icon: 'https://www.iconfinder.com/data/icons/shopping-and-commerce-2-2/512/61-48.png'
              },
              CuaHang: {
                icon: 'https://www.iconfinder.com/data/icons/shopping-and-commerce-2-2/512/61-64.png'
              },
              Nha: {
                icon: 'https://www.iconfinder.com/data/icons/places-4/100/home_place_marker_location_house_apartment-48.png'
              },
              DiaDiem: {
                icon: 'https://www.iconfinder.com/data/icons/ui-navigation-1/152/marker-48.png'
              }
            };
            downloadUrl('get_db.php', function(data) {
            var xml = data.responseXML;
            var markers = xml.documentElement.getElementsByTagName('marker');
            Array.prototype.forEach.call(markers, function(markerElem) {
              
              var id = markerElem.getAttribute('id');
              var name = markerElem.getAttribute('name');
              var address = markerElem.getAttribute('address');
              var type = markerElem.getAttribute('type');
              var point = new google.maps.LatLng(
                  parseFloat(markerElem.getAttribute('lat')),
                  parseFloat(markerElem.getAttribute('lng')));

              var infowincontent = document.createElement('div');
              var strong = document.createElement('strong');
              strong.textContent = name
              infowincontent.appendChild(strong);
              infowincontent.appendChild(document.createElement('br'));

              var text = document.createElement('text');
              text.textContent = address
              infowincontent.appendChild(text);
              infowincontent.appendChild(document.createElement('br'));
              
              var a = document.createElement('a');
              var href = document.createAttribute("href"); 
                    href.value = "http://hoangphucdev.tk/";
                    a.setAttributeNode(href);
                    
              a.textContent = "Xem Chi Tiết"
              infowincontent.appendChild(a);
              
              
              var marker = new google.maps.Marker({
                map: map,
                position: point,
                animation: google.maps.Animation.DROP,
                icon: icons[type].icon 
              });
              
              marker.addListener('click', function() {
                infoWindow.setContent(infowincontent);
                infoWindow.open(map, marker);
              });
            });
          });
      }

      function calculateAndDisplayRoute(directionsService, directionsDisplay,DiemGoc,DiemDen) {
        if(DiemGoc == null || DiemDen== null)
        {
          alert("Bạn Phải Nhập Thông Tin");
        }else
      {
        var selectedMode = document.getElementById('mode').value;
        //var DiemDen = marker.getPosition();
        directionsService.route({
          origin: DiemGoc,  // Haight.
          destination: DiemDen,  // Ocean Beach.
          // Note that Javascript allows us to access the constant
          // using square brackets and a string value as its
          // "property."
          travelMode: google.maps.TravelMode[selectedMode]
        }, function(response, status) {
          if (status == 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }

      }

      function DiemAMacDinh()
      {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            DiemGoc = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
          });
        }else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function vitrihientai()
      {
        document.getElementById('TimDuongA').value = "Vị Trí Hiện Tại";
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
             pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            DiemGoc = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            //marker = new google.maps.Marker({
             //       position: pos,
              //      animation: google.maps.Animation.DROP,
              //      draggable: true,
              //      map: map
              //    });
            infoWindow.setPosition(pos);
            infoWindow.setContent('Vị Trí Hiện Tại Của Bạn');
            infoWindow.open(map);
            map.setCenter(pos);
            map.setZoom(18);
         
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }

      }

      function update(){
         var latlng = marker.getPosition();
      }
       function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }

      function downloadUrl(url, callback) {
        var request = window.ActiveXObject ?
            new ActiveXObject('Microsoft.XMLHTTP') :
            new XMLHttpRequest;

        request.onreadystatechange = function() {
          if (request.readyState == 4) {
            request.onreadystatechange = doNothing;
            callback(request, request.status);
          }
        };

        request.open('GET', url, true);
        request.send(null);
      }


     
      function doNothing() {}


      
      
       
     
    </script>
    <script src="js/bootstrap.min.js"></script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?v3&key=AIzaSyDgchp_3q3zj8d9lFjrvHZh_EkD7J0mJ94&libraries=geometry,places&callback=initMap">
    </script>
  </body>
</html>