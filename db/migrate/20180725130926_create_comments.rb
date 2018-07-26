class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :content
      t.integer :user_id
      t.string :parent_type
      t.integer :parent_id

      t.timestamps
    end
  end
end
