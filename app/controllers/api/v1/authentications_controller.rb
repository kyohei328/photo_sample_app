class Api::V1::AuthenticationsController < ApplicationController
    skip_before_action :authenticate
    
    def create
      @user = logoin(params[:email], params[:password])

      raise ActiveRecord::RecordNotFound unless @user

      set_accsess_token!(@user)
      render json: @user
    end
end
