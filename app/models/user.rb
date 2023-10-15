class User < ApplicationRecord
  authenticates_with_sorcery!

  has_one_attached :avatar
  
  has_many :photos

  validates :email, presence: true

  def active_api_key!
    return api_key.active.first if api_key.active.exists?
    api_key.create
  end
end
