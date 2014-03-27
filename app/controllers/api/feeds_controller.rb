class Api::FeedsController < ApplicationController
  def index

    if params[:title]
      @feeds = Feed.where('title like ?', "%#{params[:title]}%")

      respond_with @feeds
    else
      @feeds = Feed.all

      respond_with @feeds
    end
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
