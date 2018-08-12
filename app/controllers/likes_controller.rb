class LikesController < ApplicationController
 def create

  like = Like.new(like_params)
  like.user_id = current_user.id ;
  like.save

  @liked = like 
  respond_to do |f|
    f.js
 end
  def destroy
  end
private
  def  like_params
   params.require(:like).permit(:parent_type, :parent_id)
  end
end
