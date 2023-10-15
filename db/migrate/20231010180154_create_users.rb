class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email, null: false
      # t.string :avatar_url
      t.text :profile
      t.string :crypted_password
      t.string :salt
      t.timestamps
    end
  end
end
