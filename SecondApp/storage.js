var activePage;
$(document).on('pageshow', function() {
	activePage = $.mobile.activePage.attr('id');
	for (var i = 0; i < 60; i++) {
		if (i < 24)//If still within range of hours field: 0-23
			$('#' + activePage + '-select-choice-hour').append($("<option>").attr("value", i).attr("selected", "selected").text(i));
		$('#' + activePage + '-select-choice-minutes').append($("<option>").attr("value", i).attr("selected", "selected").text(i));
	}
	if ( typeof (Storage) !== "undefined") {
		var rH = localStorage.getItem(activePage + "Hours");
		var rM = localStorage.getItem(activePage + "Minutes");
		var cR = localStorage.getItem(activePage + "checkboxWarning");
		if (rH != null) {
			$("#" + activePage + "-select-choice-hour").val(rH);
			$('#' + activePage + '-select-choice-hour').selectmenu("refresh", true);
		}
		if (rM != null) {
			$("#" + activePage + "-select-choice-minutes").val(rM);
			$('#' + activePage + '-select-choice-minutes').selectmenu("refresh", true);
		}
		if (cR != null) {
			$('input[name="' + activePage + 'checkboxWarning"]').prop("checked", true).checkboxradio('refresh');
		}
	}
});
