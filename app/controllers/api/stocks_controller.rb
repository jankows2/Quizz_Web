module Api
  class StocksController < ApplicationController
    def index
      if params[:company]
        @stocks = Stock.where(
            "company LIKE ?", "%#{params[:company]}%"
        )
      elsif params[:price]
        @stocks = Stock.where(
            "price LIKE ?", "#{params[:price]}"
        )
      else
        @stocks = Stock.all
      end

      respond_with @stocks
    end

    def show
      @stock = Stock.find(params[:id])

      respond_with @stock
    end

    def create
      @stock = Stock.create!(stock_params)

      respond_with @stock
    end

    def update
    end

    def destroy
    end

    private

    def stock_params
      params.require(:stock).permit(:company, :price, :change, :percent_change, :volume, :ytd_change)
    end
  end
end

