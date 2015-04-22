fdbk.actions.add_projects = {
	init: function() {
		var that = this
		$('#add-new-project').on('click', function() {
			var btn = this
			if ( $('.new-project').size() == 0) {
				$.get('/project/new', function(html) {
					$('body').prepend(html)
					$(btn).addClass('rotate-45')
				})
			} else {
				that.closePopup()	
				$(btn).removeClass('rotate-45')
			}
		})
	},
	closePopup: function() {
		var them = $('#new-project, #overlay')
		$(them).addClass('fadeOut')
		setTimeout(function() {$(them).remove()}, 250)
	}
}