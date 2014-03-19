class Stock < ActiveRecord::Base
  validates_presence_of :company
  validates_presence_of :price
  validates_presence_of :change
  validates_presence_of :percent_change
  validates_presence_of :volume
  validates_presence_of :ytd_change
end
