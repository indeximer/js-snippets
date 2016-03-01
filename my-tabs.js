$(document).ready(function () {
  $(".my-tabs-content").hide();
    $(".my-tabs.active").each(function(){
        var tab_ativa = $(this).attr("data-content");
        $("#" + tab_ativa).show();
    });
});

$(".my-tabs").click(function(){
    var tab_group = $(this).data('rel');

    $(".my-tabs[data-rel='"+ tab_group +"']").removeClass("active");
    $(this).addClass("active");
    $(".my-tabs-content[data-rel='"+ tab_group +"']").hide()
    $("#"  + $(this).attr("data-content")).fadeIn();
});
