fdbk.actions.select_point = {
	init: function() {
		var that = this
		$('.discussions li .discussion-title, .fdbk-disc').hover(
			function(d) {
				var id = $(this).data('id')
				$('.fdbk-disc[data-id="'+id+'"]').addClass('hovered')
				$('.fdbk-disc').not('[data-id="'+id+'"]').addClass('fadeout')
			},
			function(d) {
				$('.fdbk-disc').removeClass('fadeout').removeClass('hovered')
			}
		)
		$('.discussions li .discussion-title, .fdbk-disc').on('click',function() {
			var id = $(this).data('id')
			var fdbk = $('.fdbk-disc[data-id="'+id+'"]')
			var list = $('li[data-id="'+id+'"]')

			if ( $(fdbk).hasClass('selected') ) {
				$('.discussion li').find('span.toggle').removeClass('rotate')
				$('.fdbk-disc').removeClass('selected').removeClass('faded')
				$('li').removeClass('selected')
				$('.comments-container').empty()
			} else if ($(fdbk).hasClass('hovered')) {

				$('.discussion li .discussion-title').find('span.toggle').removeClass('rotate')
				$('.comments-container').empty()
				$('.fdbk-disc').removeClass('selected').removeClass('faded')
				$('.fdbk-disc[data-id="'+id+'"]').addClass('selected')
				$('.fdbk-disc').not('[data-id="'+id+'"]').addClass('faded')
				
				$('li').removeClass('selected')
				$(list).addClass('selected')
				$(list).find('span.toggle').addClass('rotate')
				
				that.getComments(id)

				
			}
		})
	},
	getComments: function(id) {
		var that = this
		$.get('/comment/'+id, function(data,status) {
			$('li[data-id="'+id+'"] .comments-container').append(data)
			that.addComment()
		})
	},
	addComment: function() {
		var that = this
		$('#new_comment').on('ajax:success',function(ev,msg) {
			$('li[data-id="'+msg.discussion_id+'"] .comments-container').empty()
			that.getComments(msg.discussion_id)
		})
	}
}