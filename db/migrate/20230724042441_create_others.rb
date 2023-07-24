class CreateOthers < ActiveRecord::Migration[6.0]
  def change
    create_table :others do |t|
      t.integer :total_price, null: false, default: 0

      t.timestamps
    end
  end
end
