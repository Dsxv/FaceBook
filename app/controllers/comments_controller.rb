class CommentsController < ApplicationController
  def create
   @comment = Comment.new(comment_params)
   @comment.user_id = current_user.id

   if(@comment.save)
     redirect_to root_path
   # if(@comment.save)
   #   respond_to do |format|
   #     format.js
   #     format.html redirect_to root_path
   #   end
   # end
 end
  end

  private

  def comment_params
    params.require(:comment).permit(:parent_type,:parent_id,:content)
  end
end
