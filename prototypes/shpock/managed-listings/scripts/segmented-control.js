$(document).ready(function() {

	$(".ios13-segmented-control").on("change", function() {
		$(".ios13-segmented-control .option input").each(function(i) {
			if ($(this).is(":checked")) $(".ios13-segmented-control .selection").css("transform","translateX(" + ($(this).outerWidth() * i) + "px)");
		});
	});

});