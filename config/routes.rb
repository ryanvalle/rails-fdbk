Rails.application.routes.draw do
  root 'static#home'

  get '/projects', to: 'project#index', as: 'projects'
  get '/project/view/:id', to: 'project#show', as: 'project_show'
  get '/project/new', to: 'project#new'
  post '/project/create', to: 'project#create', as: 'project_create'

  get '/discussion/new', to: 'discussion#new', as: 'discussion_new'
  post '/discussion/create', to: 'discussion#create', as: 'discussion_create'

  get '/comment/:id', to: 'comment#show', as: 'comment_show'
  post '/comment/create', to: 'comment#create', as: 'comment_create'
end
