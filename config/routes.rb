CA4002::Application.routes.draw do
  namespace :api do
    resources :stocks, only: [:index, :show, :create]
    get 'stocks/company/:company', :to => 'stocks#by_company'
  end
end
