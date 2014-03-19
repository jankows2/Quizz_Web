object @stock => :stock

attributes :id, :company, :price, :change, :percent_change, :volume, :ytd_change

node :created_at do |stock|
  stock.created_at.to_time.to_i * 1000
end