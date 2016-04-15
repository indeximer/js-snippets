$(document).ready(function () {
  
  /***************************************
   *************** MAP ******************/

    var map;

    var markerData = [
        { lat: -19.526484 , lng: -40.635349, zoom: 16, name: "Colatina" },
        { lat: -19.514385 , lng: -41.013371, zoom: 16, name: "Baixo Gandu" },
        { lat: -18.772232 , lng: -40.885139, zoom: 16, name: "Barra de São Francisco" },
    ];

    function initialize () {
        map = new google.maps.Map( document.getElementById( 'map-canvas' ), {
            zoom: 16,
            center: { lat: -19.526484 , lng: -40.635349 }
        } );
        markerData.forEach( function ( data ) {
            var newmarker = new google.maps.Marker( {
                map: map,
                position: { lat: data.lat, lng: data.lng },
                title: data.name
            } );
            jQuery( "#selectlocation" ).append( '<option value="' + [ data.lat, data.lng, data.zoom ].join( '|' ) + '">' + data.name + '</option>' );
        } );

    }

    google.maps.event.addDomListener( window, 'load', initialize );
    
    jQuery( document ).on( 'change', '.select-map', function () {
        var latlngzoom = jQuery( this ).val().split( '|' );        
        var newzoom = 1 * latlngzoom[ 2 ],
            newlat = 1 * latlngzoom[ 0 ],
            newlng = 1 * latlngzoom[ 1 ];
        map.setZoom( newzoom );
        map.setCenter( { lat: newlat, lng: newlng } ); 
    } );

    /*jQuery( document ).on( 'click', 'ul.list-map-locations li', function () {
        $('ul.list-map-locations li').removeClass('active');
        $(this).addClass('active');
        var latlngzoom = jQuery( this ).data("coordinates").split( '|' );
        var newzoom = 1 * latlngzoom[ 2 ],
            newlat = 1 * latlngzoom[ 0 ],
            newlng = 1 * latlngzoom[ 1 ];
        map.setZoom( newzoom );
        map.setCenter( { lat: newlat, lng: newlng } );
    } );*/

    /************** MAP ******************
     **************************************/
  
  
  //initialize my-tabs
  $(".my-tabs-content").hide();
    $(".my-tabs.active").each(function(){
        var tab_ativa = $(this).attr("data-content");
        $("#" + tab_ativa).show();
    });
    //initialize my-tabs
    
    //loadMore
    var size_li = $(".load-more li").size();
    var load = $(".load-more").data("load");
    var inicial = $(".load-more").data("inicial");
    var atual = inicial;

    $('.load-more li:lt('+inicial+')').show();
    $('#btn-load-more').click(function () {
        atual= (atual + load <= size_li) ? atual + load : size_li;
        $('.load-more li:lt('+atual+')').slideDown();
    });
    //loadMore
});//document.ready

// my-tabs
$(".my-tabs").click(function(){
    var tab_group = $(this).data('rel');
    if($(this).siblings().length > 0){
      $(".my-tabs[data-rel='"+ tab_group +"']").removeClass("active");
      $(this).addClass("active");
      $(".my-tabs-content[data-rel='"+ tab_group +"']").hide()
      $("#"  + $(this).attr("data-content")).fadeIn();
    }
});
// my-tabs

