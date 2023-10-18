class User < ApplicationRecord
  authenticates_with_sorcery!

  has_one_attached :avatar
  
  has_many :photos
  has_many :api_keys, dependent: :destroy

  validates :email, presence: true
  validates :password, length:{minimum: 3}, confirmation: true
  validates :password_confirmation, presence: true

  def activate_api_key!
    return api_keys.active.first if api_keys.active.exists?

    api_keys.create
  end
end


