class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :post
      t.integer :discussion_id
      t.integer :project_id
      t.integer :author_id

      t.timestamps
    end
  end
end
