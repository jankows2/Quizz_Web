require 'nokogiri'
require 'open-uri'
require 'httparty'

# TODO - Change this when deployed
BASE_API_URL = 'http://stock.raven.com/api'
#BASE_API_URL = 'http://localhost:3000/api'
CNN_BASE_URL = 'http://money.cnn.com/data/markets/nasdaq/?page='

results = []

167.times do |index|
  if index != 0
    page = Nokogiri::HTML(open("#{CNN_BASE_URL}#{index}"))
    table = page.xpath("//div[@class='wsod_dataTableBorder']/table[@class='wsod_dataTable wsod_dataTableBig']/tbody")
    rows = table.search('tr')[0..-1]

    rows.each do |row|
      row.xpath("td//text()").each_slice(8) do |slice|
        record = {:stock => {
            :company => "#{slice[0]}#{slice[1]}",
            :price => slice[2].text.to_f,
            :change => slice[3].text.to_f,
            :percent_change => slice[4].text[0..4].to_f,
            :volume => slice[6].text.to_f,
            :ytd_change => slice[7].text[0..4].to_f,
        }}

        HTTParty.post(BASE_API_URL + '/stocks.json',
                      body: record,
                      :options => {
                          :headers => {
                              :ContentType => 'application/json',
                              :Accept => 'application/json'
                          }
                      })
      end
    end
  end
end

puts "Completed web scraping at #{Time.now}"