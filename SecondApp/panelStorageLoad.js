$(document).on('pageshow', function() {
	if ( typeof (Storage) !== "undefined") {
		var cSP = localStorage.getItem("checkboxSnowPanel");
		if (cSP != null) {
			$('input[name="checkboxSnowPanel"]').prop("checked", true).checkboxradio('refresh');
		}
		var cRP = localStorage.getItem("checkboxRainPanel");
		if (cRP != null) {
			$('input[name="checkboxRainPanel"]').prop("checked", true).checkboxradio('refresh');
		}
		var cTP = localStorage.getItem("checkboxTrainPanel");
		if (cTP != null) {
			$('input[name="checkboxTrainPanel"]').prop("checked", true).checkboxradio('refresh');
		}
		var cTfP = localStorage.getItem("checkboxTrafficPanel");
		if (cTfP != null) {
			$('input[name="checkboxTrafficPanel"]').prop("checked", true).checkboxradio('refresh');
		}
	}
});
