class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.string :file
      t.string :owner

      t.timestamps
    end
  end
end
