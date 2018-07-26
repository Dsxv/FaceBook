Rails.application.routes.draw do
  devise_for :users
  resources :posts 
  resources :comments
  get "users/:id" => "timeline#show"
  root "posts#index"
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
