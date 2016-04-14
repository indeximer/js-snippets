$(document).ready(function () {
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

