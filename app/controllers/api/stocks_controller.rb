module Api
  class StocksController < ApplicationController
    def index
      if params[:company]
        @stocks = Stock.where(
            "company LIKE ?", "%#{params[:company]}%"
        )

        respond_with @stocks
      elsif params[:price]
        @stocks = Stock.where(
            "price LIKE ?", "#{params[:price]}"
        )

        respond_with @stocks
      else
        @stocks = Stock.all

        respond_with @stocks
      end
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

