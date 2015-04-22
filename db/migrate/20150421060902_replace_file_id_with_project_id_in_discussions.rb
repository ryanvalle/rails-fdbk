class ReplaceFileIdWithProjectIdInDiscussions < ActiveRecord::Migration
  def up
  	remove_column :discussions, :file_id
  	add_column :discussions, :project_id, :integer
  end

  def down
  	remove_column :discussions, :project_id
  	add_column :discussions, :file_id, :integer
  end
end
