class Api::V1::AuthenticationsController < ApplicationController
  skip_before_action :authenticate

  def create
    # binding.pry
    @user = login(params[:email], params[:password])

    raise ActiveRecord::RecordNotFound unless @user

    # json_string = UserSerializer.new(@user).serialized_json
    set_access_token!(@user)

    # render json: json_string
    render json: @user
  end
end
