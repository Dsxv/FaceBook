class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

         has_many :posts
         has_many :likes
         has_many :comments

         has_one_attached :profile_pic

         def self.give_user(user)
             user_name = user.name.split(' ')
              return user_name[0]
           end

           before_create :img_def_setter
             def img_def_setter
               self.profile_pic.attach(io: File.open("app/assets/images/default.png"), filename: "defalt.png", content_type: "image/png")

             end

end
