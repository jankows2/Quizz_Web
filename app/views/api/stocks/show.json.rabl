object @stock => :stock

attributes :company, :price, :change, :percent_change, :volume, :ytd_change

node :created_at do |stock|
  stock.created_at.to_time.to_i
end