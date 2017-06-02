<!DOCTYPE html>
<html>
  <head>
      <meta charset="utf-8">

    <title>
        Dự Án Côn Đảo
    </title>
   <link href="css/bootstrap.min.css" rel="stylesheet">
   <link href="css/style.css" rel="stylesheet">
   <link href="css/select2.css" rel="stylesheet" />
       <!-- DataTables CSS -->
    <link href="css/dataTables.bootstrap.css" rel="stylesheet">

    <!-- DataTables Responsive CSS -->
    <link href="css/dataTables.responsive.css" rel="stylesheet">

   <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
   
  <script src="js/select2.js"></script>

   <script>
        $(document).ready(function() { 
            $("#ds").select2({
                    placeholder: "Chọn Địa Điểm"
                    //allowClear: true
             }); 
             $('#dataTables-example').DataTable({
                responsive: true,
                "scrollY": "200px",
                "scrollCollapse": true,
                //"info":   false
                "dom": '<"top"f>rt<"bottom"p><"clear">',
                //thiết lập ngôn ngữ
                "language":{
                  "search": "Tìm :",
                  "paginate": {
                              "first":      "Trang Đầu",
                              "last":       "Trang Cuối",
                              "next":       "Tiếp Theo",
                              "previous":   "Quay Lại"
                          }
                }
        });
        });
</script>
  </head>
  <body>
  <div class="container">

    <input id="pac-input" class="form-control form-control-lg " type="text" placeholder="Tìm Địa Điểm">

    <div class="row">
    <div class="col-md-8">
    <div id="map"></div>
    </div>
    <div class="col-md-4">
    <b>Tìm địa điểm trên đảo:</b>
    <div class="row">
      <div class="col-md-8">
          <select id="ds" class="form-control">
                    <?php
                    require_once("Model.php");
                    $data = new Model();

                    $result = $data->get_list('SELECT * FROM `markers` WHERE 1');
                    foreach ($result as $value) {
                      echo '<option value="'.$value['id'].'@'.$value['lat'].','.$value['lng'].'">'.$value['name'].'</option>';
                    }   
                    ?>
        </select>
        </div>
        <div class="col-md-4">
        <a href="Add.html">Thêm Mới</a>
        </div>

      </div>
      <br>
        <table width="100%" class="table table-striped table-bordered table-hover" id="dataTables-example">
            <thead>
                <tr>
                    <th>Địa Điểm</th>
                 </tr>
            </thead>
            <tbody>
                    <?php
                      foreach ($result as $value) {
                      echo '<tr class="odd gradeX"><td><a href="#" onclick=selected("'.$value['id'].'@'.$value['lat'].','.$value['lng'].'")>'.$value['name'].'</a></td></tr>';
                    }   
                    ?>
            </tbody>
        </table>



        <div class="panel panel-default">
          <div class="panel-heading"><strong>Tìm Đường</strong></div>
          <div class="panel-body">
              <b>Điểm Đầu:</b>
              <div class="input-group timduong ">
                <input  id="TimDuongA" class="form-control" type="text" placeholder="Mặc định là vị trí hiện tại">
                <span class="input-group-btn">
                  <button class="btn btn-secondary" type="button" onclick='vitrihientai()'>Vị trí hiện tại</button>
                </span>
              </div>
              <b>Điểm Đến:</b>
              <div class="input-group timduong ">
              <input id="TimDuongB" class="timduong form-control" type="text" placeholder="Điểm Đến">
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
    </div>



    </div>



    <script>
    var mymarker, //mang marker trong csdl
        infowincontent, //mang khung thông tin của marker trong csdl
        marker, // marker chung
        map,
        markersearch, //marker tìm kiếm
        infoWindow,  // khung thông tin chung
        pos, // điểm vị trí hiện tại
        DiemGoc,//điểm đi trong tìm đường
        DiemDen, //điểm đến trong tìm đường
        places,
        directionsDisplay,//biến tìm đường
        directionsService,//biến tìm đường
        searchBox;//hợp tìm kiếm trong bản đồ
      function initMap() {
        markersearch = [];
        mymarker =[];
        infowincontent=[];
        LoadMap();
        directionsDisplay.setMap(map);
        DiemAMacDinh(); //gán điểm đi mặt định là vị trí hiện tại
        LoadMaker();
         // Create the search box and link it to the UI element.
        var input = document.getElementById("pac-input");
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
        $('#submit').on('click', function() {
          diemgoc=DiemGoc;
          diemden=DiemDen;
          calculateAndDisplayRoute(directionsService, directionsDisplay,diemgoc,diemden);
        });
        //sự kiện khi thay đổi chế độ trong select box
        $('#mode').on('change', function() {
          diemgoc=DiemGoc;
          diemden=DiemDen;
          calculateAndDisplayRoute(directionsService, directionsDisplay,diemgoc,diemden);
        });
        //sự kiện click vào ds maker
        $('select').on('change', function () {
            var LatLng = $('#ds').val();
            var id = LatLng.slice(0,LatLng.indexOf("@"));
            var lat = LatLng.slice(LatLng.indexOf("@")+1, LatLng.indexOf(","));
            var lng = LatLng.slice(LatLng.indexOf(",")+1);
            var vitri = new google.maps.LatLng({lat: Number(lat), lng: Number(lng)});
            DiemDen = vitri;
            $('#TimDuongB').val(vitri);
            map.setZoom(17);
            map.setCenter(vitri);
            //infoWindow.setPosition(vitri);
            infoWindow.setContent(infowincontent[id]);
            infoWindow.open(map, mymarker[id]);
        });
      }
      function selected(chuoi)
      {
            var LatLng = chuoi;
            var id = LatLng.slice(0,LatLng.indexOf("@"));
            var lat = LatLng.slice(LatLng.indexOf("@")+1, LatLng.indexOf(","));
            var lng = LatLng.slice(LatLng.indexOf(",")+1);
            var vitri = new google.maps.LatLng({lat: Number(lat), lng: Number(lng)});
            DiemDen = vitri;
            $('#TimDuongB').val(vitri);
            map.setZoom(17);
            map.setCenter(vitri);
            //infoWindow.setPosition(vitri);
            infoWindow.setContent(infowincontent[id]);
            infoWindow.open(map, mymarker[id]);
      }
      //hàm kìm kiếm
      function Search()
      {
          places = searchBox.getPlaces();
          if (places.length == 0) {
            return;
          }
          // Clear out the old markersearch.
          markersearch.forEach(function(marker) {
            marker.setMap(null);
          });
          markersearch = [];

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
            markersearch.push(marker = new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              draggable: true,
              position: place.geometry.location
            }));
            $('#TimDuongB').val(place.geometry.location);
            DiemDen = marker.getPosition();
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
      //hàm tải bản đồ
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
      //hàm tải các marker trong csdl lên bản đồ
      function LoadMaker()
      {
            var icons = {
                MacDinh: {
                icon: 'https://www.iconfinder.com/data/icons/shopping-and-commerce-2-2/512/61-32.png'
              },
              CuaHang: {
                icon: 'https://www.iconfinder.com/data/icons/shopping-and-commerce-2-2/512/61-32.png'
              },
              Nha: {
                icon: 'https://www.iconfinder.com/data/icons/places-4/100/home_place_marker_location_house_apartment-32.png'
              },
              DiaDiem: {
                icon: 'https://www.iconfinder.com/data/icons/ui-navigation-1/152/marker-32.png'
              }
            };
            downloadUrl('Get_db.php', function(data) {
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

              infowincontent[id] = document.createElement('div');
              var strong = document.createElement('strong');
              strong.textContent = name
              infowincontent[id].appendChild(strong);
              infowincontent[id].appendChild(document.createElement('br'));

              var text = document.createElement('text');
              text.textContent = address
              infowincontent[id].appendChild(text);
              infowincontent[id].appendChild(document.createElement('br'));
              
              var a = document.createElement('a');
              var href = document.createAttribute("href"); 
                    href.value = "http://hoangphucdev.tk/";
                    a.setAttributeNode(href);
                    
              a.textContent = "Xem Chi Tiết"
              infowincontent[id].appendChild(a);
              
              
              mymarker[id] = new google.maps.Marker({
                map: map,
                position: point,
                animation: google.maps.Animation.DROP,
                icon: icons[type].icon 
              });
              
              mymarker[id].addListener('click', function() {
                infoWindow.setContent(infowincontent[id]);
                infoWindow.open(map, mymarker[id]);
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
        var selectedMode = $('#mode').val();
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
        $('#TimDuongA').val("Vị Trí Hiện Tại");
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
         $('#TimDuongB').val(marker.getPosition());
         DiemDen = marker.getPosition();
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
        <!-- DataTables JavaScript -->
    <script src="js/jquery.dataTables.min.js"></script>
    <script src="js/dataTables.bootstrap.min.js"></script>
    <script src="js/dataTables.responsive.js"></script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?v3&key=AIzaSyDgchp_3q3zj8d9lFjrvHZh_EkD7J0mJ94&libraries=geometry,places&callback=initMap">
    </script>
  </body>
</html>