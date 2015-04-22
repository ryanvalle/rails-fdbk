class ProjectController < ApplicationController
	skip_before_filter :verify_authenticity_token, :only => [:create]

	def index
		@projects = Project.all
	end

	def show
		@project = Project.find(params[:id])
		@discussions = @project.discussions
	end

	def new
		@project = Project.new
		render partial: 'project/partials/new'
	end

	def create
		@project = Project.new(project_params)
		if @project.save
			redirect_to root_path
		else
			# fail call back
		end
	end

	private
		def project_params
			params.require(:project).permit(:file, :name)
		end
end
