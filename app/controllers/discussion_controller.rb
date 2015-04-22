class DiscussionController < ApplicationController
	skip_before_filter :verify_authenticity_token, :only => [:create]

	def new
		@discussion = Discussion.new
		render partial: 'discussion/partials/new'
	end

	def create
		@discussion = Discussion.new(discussion_params)
		if @discussion.save
			render json: @discussion, status: :ok
		else
			# fail call back
		end
	end

	private
		def discussion_params
			params.require(:discussion).permit(:project_id, :details, :location)
		end
end
