class LikesController < ApplicationController

 def create

  @like = Like.new(like_params)
  @like.user_id = current_user.id

  respond_to do |format|
    if @like.save
     format.js
     format.html { redirect_to root_path }
    end
  end
 end

  def destroy
    @like = Like.find(params[:id])


    respond_to do |format|
      format.js
       format.html { redirect_to root_path }
    end
    @like.delete
  end

private
  def  like_params
   params.require(:like).permit(:parent_type, :parent_id)
  end
end
