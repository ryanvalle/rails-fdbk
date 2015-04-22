class Project < ActiveRecord::Base
	has_many :discussions

	validates_presence_of :file, :name
	mount_uploader :file, ProjectUploader
end
