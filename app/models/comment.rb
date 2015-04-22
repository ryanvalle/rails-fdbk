class Comment < ActiveRecord::Base
	belongs_to :discussion
	validates_presence_of :post
end
