class CreateDiscussions < ActiveRecord::Migration
  def change
    create_table :discussions do |t|
      t.integer :file_id
      t.string :details
      t.string :location
      t.integer :author_id

      t.timestamps
    end
  end
end
