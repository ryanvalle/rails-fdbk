class CommentController < ApplicationController
	skip_before_filter :verify_authenticity_token, :only => [:create]

	def show
		@comments = Comment.where(discussion_id: params[:id])
		@comment = Comment.new
		@pid = Discussion.find(params[:id]).project.id
		render partial: 'comment/partials/show'
	end

	def new
		@comment = Comment.new
		render partial: 'comment/partials/new'
	end

	def create
		@comment = Comment.new(comment_params)
		if @comment.save
			render json: @comment, status: :ok
		else
			# fail call back
		end
	end

	private
		def comment_params
			params.require(:comment).permit(:post, :discussion_id, :project_id, :author_id)
		end
end
