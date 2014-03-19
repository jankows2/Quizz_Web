class CreateStocks < ActiveRecord::Migration
  def change
    create_table :stocks do |t|
      t.string :company
      t.float :price
      t.float :change
      t.float :percent_change
      t.float :volume
      t.float :ytd_change

      t.timestamps
    end
  end
end
