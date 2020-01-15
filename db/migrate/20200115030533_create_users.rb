class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name, nul: false
      t.string :email, nul: false
      t.string :password, nul: false
      t.timestamps
    end
  end
end
