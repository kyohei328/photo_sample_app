Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do

      post 'authentication', to: 'authentications#create'
      
      resources :users, only: %i[create destroy]
      resources :photos
    end
  end
end
