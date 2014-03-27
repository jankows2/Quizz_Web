class Api::FeedsController < ApplicationController
  def index
    @feeds = Feed.all

    respond_with @feeds
  end

  def show
    @feed = Feed.find(params[:id])

    respond_with @feed
  end

  def create
    @feed = Feed.create!(feed_params)

    respond_with @feed
  end

  def update
  end

  def delete
  end

  private

  def feed_params
    params.require(:feed).permit(:title)
  end
end
