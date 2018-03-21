$(".list-group-item").on("click", function(event) {
    $("#studiesFather").children().removeClass("active");
    $(event.currentTarget).addClass("active");

    $(".infoFill").css("display","none");
    $("#"+event.currentTarget.id+"InfoFill").css("display","block");
});
