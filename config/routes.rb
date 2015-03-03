CA4002::Application.routes.draw do
  namespace :api do
    resources :stocks, only: [:index, :show, :create]
    resources :feeds, only: [:index, :show, :create]
    resources :car, only: [:index, :show, :create]
  end
end
