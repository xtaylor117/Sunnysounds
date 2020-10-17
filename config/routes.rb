Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resources :artists, only: [:index, :create, :show] do
      resources :songs, except: [:show, :edit]
    end

    resources :songs, only: [:show]

    resource :session, only: [:create, :destroy]

  end
end
