fdbk.actions.add_point = {
	init: function() {
		var that = this
		$('.preview-container img').on('click',function(e) {
			var preWidth = $(this).width()
			var preHeight = $(this).height()
			
			
			var x = e.pageY - $(this).offset().top
			var y = e.pageX - $(this).offset().left

			var perX = Math.floor(((x / preHeight) * 100) * 100) / 100
			var perY = Math.floor(((y / preWidth) * 100) * 100) / 100
			
			var ts = Date.now()
			var location = perX+','+perY
			var fileid = $(this).data('file')

			$.get('/discussion/new?ts=' + ts +'&loc='+location+'&file='+fileid, function(data) {
				that.addPoint(perX,perY,ts,null)
				$('.discussion .dynamic').append(data)
				$('.preview-container').prepend('<div class="deactivate"></div>')
				that.removeNewCommentForm()
				that.submitNewCommentForm()
			})
		})
	},
	addPoint: function(perX,perY,ts,id) {
		var html = '<div class="fdbk-disc" style="top: ' + perX + '%; left: ' + perY + '%;" data-ts="' + ts +'" data-id="'+id+'"></div>'
		$('.preview-container').prepend(html)
		$('li.selected').removeClass('selected')
	},
	removeNewCommentForm: function() {
		$('input#cancel').click(function() {
			var target_ts = $('.discussion .dynamic form').data('id')
			$('.discussion .dynamic').empty()
			$('.fdbk-disc[data-ts="'+target_ts+'"]').remove()
			$('.preview-container .deactivate').remove()
		})
	}, 
	submitNewCommentForm: function() {
		var that = this
		$('#new_discussion').on('ajax:success', function(data,status) {
			var location = status.location.split(',')
			var target_ts = $('.discussion .dynamic form').data('id')
			
			$('.discussion .dynamic').empty()
			$('.fdbk-disc[data-ts="'+target_ts+'"]').remove()
			$('.preview-container .deactivate').remove()

			var html = '<li data-id="'+status.id+'"><div class="discussion-title user-select-none" data-id="'+status.id+'">'+status.details+'<span class="toggle">+</span></div><div class="comments-container"></div></li>'
			$('.discussion ul').append(html)
			// Reinitiate some javascript functionality
			that.addPoint(location[0],location[1],null,status.id)
			fdbk.actions.select_point.init()
		})

	}
}