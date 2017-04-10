$(document).ready(function() {
	sidebarOut = true;
	retract = true;
	done = false;
	$(".sidebar").hover(function() {
		retract = false;
		$(".sidebar").mouseleave(function() {
			if (!done) {
				$(".sidebar").animate({right: '-' + ($(".sidebar-item").width() + 7) + 'px'});
				sidebarOut = false;
				done = true;
			}
		})
	})
	setTimeout(function() {
		if (retract) {
			$(".sidebar").animate({right: '-' + ($(".sidebar-item").width() + 7) + 'px'});
			sidebarOut = false;
		}
	}, 1000);
	$(".sidebar-grabber").mouseenter(function() {
		if (!sidebarOut) {
			$(".sidebar").animate({right: '0'});
			sidebarOut = true;
			done = true;
		}
	});
	$(".sidebar-grabber").click(function() {
		if (sidebarOut) {
			$(".sidebar").animate({right: '-' + ($(".sidebar-item").width() + 7) + 'px'});
			setTimeout(function() {
				sidebarOut = false;
			}, 200);
		}
	});
	$(".clicker").click(function() {
		if (sidebarOut) {
			$(".sidebar").animate({right: '-' + ($(".sidebar-item").width() + 7) + 'px'});
			setTimeout(function() {sidebarOut = false;}, 200);
		}
	});
	$(".holder").click(function() {
		if (sidebarOut) {
			$(".sidebar").animate({right: '-' + ($(".sidebar-item").width() + 7) + 'px'});
			setTimeout(function() {sidebarOut = false;}, 200);
		}
	});
	$(".main-head-out").click(function() {
		if (sidebarOut) {
			$(".sidebar").animate({right: '-' + ($(".sidebar-item").width() + 7) + 'px'});
			setTimeout(function() {sidebarOut = false;}, 200);
		}
	});
	$(window).resize(function() {
		if (sidebarOut) {
			$(".sidebar").animate({right: '0'});
		} else {
			$(".sidebar").animate({right: '-' + ($(".sidebar-item").width() + 7) + 'px'});
		}
	});
});
