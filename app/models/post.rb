class Post < ApplicationRecord
  belongs_to :user
  has_many :comments , as: :parent
  has_many :likes , as: :parent
  
  has_one_attached :image
end
