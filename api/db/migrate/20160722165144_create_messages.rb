class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.string :title
      t.text :body
      t.integer :project_id
      t.boolean :active, :default => false
      t.timestamps
    end
  end
end
