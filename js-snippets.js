$(document).ready(function () {
  
  /***************************************
   *************** MAP ******************/

   //maps
var map;
$.getScript("//maps.googleapis.com/maps/api/js?key=AIzaSyCKLLzMdZ77CoYXzKSXvjBLCDHlObR3htg", function(){

    if($('#selectlocation').length){
        
        function initialize () {

            var latlng = $("#selectlocation option:selected").val().split( '|' );

            map = new google.maps.Map( document.getElementById( 'map-canvas' ), {
                zoom: 16,
                scrollwheel: false,
                center: { lat: 1 * latlng[0] , lng: 1 * latlng[1] }
            } );

            var newmarker = new google.maps.Marker( {
                map: map,
                position: { lat: 1 * latlng[0] , lng: 1 * latlng[1] }
            } );
        
        }

        google.maps.event.addDomListener( window, 'load', initialize );

        jQuery( document ).on( 'change', '#selectlocation', function () {
            var latlngzoom = $("#selectlocation option:selected").val().split( '|' );
            var newzoom = 1 * latlngzoom[ 2 ],
                newlat = 1 * latlngzoom[ 0 ],
                newlng = 1 * latlngzoom[ 1 ];
            map.setZoom( newzoom );
            map.setCenter( { lat: newlat, lng: newlng } );
            var newmarker = new google.maps.Marker( {
                map: map,
                position: { lat: 1 * latlngzoom[ 0 ] , lng: 1 * latlngzoom[ 1 ] }
            } );
        } );

    }

});//maps

// Sem select

$.getScript("//maps.googleapis.com/maps/api/js", function(){

        var map;

        function initialize () {

            //var latlng = $(".list-map-locations li:first").val().split( '|' );
            var latlng = "-25.567310|-49.235044|13".split('|');

            map = new google.maps.Map( document.getElementById( 'map-canvas' ), {
                zoom: 15,
                scrollwheel: false,
                center: { lat: 1 * latlng[0] , lng: 1 * latlng[1] }
            } );

            //console.log({lat: 1 * latlng[0] , lng: 1 * latlng[1]});

            var newmarker = new google.maps.Marker( {
                map: map,
                position: { lat: 1 * latlng[0] , lng: 1 * latlng[1] }
            } );

            /*
            markerData.forEach( function ( data ) {
                var newmarker = new google.maps.Marker( {
                    map: map,
                    position: { lat: data.lat, lng: data.lng },
                    title: data.name
                } );
                jQuery( "#selectlocation" ).append( '<option value="' + [ data.lat, data.lng, data.zoom ].join( '|' ) + '">' + data.name + '</option>' );
            } );
            */

        }

        google.maps.event.addDomListener( window, 'load', initialize );

        jQuery( document ).on( 'click', 'ul.list-map-locations li', function () {
            $('ul.list-map-locations li').removeClass('active');
            $(this).addClass('active');
            var latlngzoom = jQuery( this ).data("coordinates").split( '|' );
            var newzoom = 1 * latlngzoom[ 2 ],
                newlat = 1 * latlngzoom[ 0 ],
                newlng = 1 * latlngzoom[ 1 ];
            map.setZoom( newzoom );
            map.setCenter( { lat: newlat, lng: newlng } );
        } );

    });

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
        if(size_li == atual){
          //esconde botão se não tiver mais itens pra mostrar
          $('#btn-load-more').hide(); 
        }
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

// Modals
function popUp(selector){
    $("body,html").addClass("scroll-lock")
    selector.fadeIn("fast")
}
function popClose(){
    $(".moda-overlay").fadeOut()
    $("body,html").removeClass("scroll-lock")
}
$('.btn-open-modal').on('click', function(){
    const el = $(this).data('target')
    popUp($(el))
})
//fechar pop-up no esc
$(document).keydown(function(e) {
    if (e.keyCode == 27) {
        popClose()
    }
})
$(".moda-overlay, .btn-pop-close").on("click",function(){
    popClose()
}).on("click", ".pop-up-content", function(event){
    event.stopPropagation()
})

