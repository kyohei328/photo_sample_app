class Api::V1::UsersController < ApplicationController
    skip_before_action :authenticate

    def create
        @user = User.new(user_params)
        if @user.save
            render json: @user
        else
            render json: @user.errors, status: 422
        end
    end

    def destroy
        logout
    end

    private

    def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation, :avatar)
    #   params.permit(:name, :email, :avatar_url, :profile, :password, :password_confirmation)
    end

    def set_user
        
    end
end

