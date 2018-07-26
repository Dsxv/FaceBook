class PostsController < ApplicationController
 before_action :authenticate_user!
  def index
    @posts = Post.all
    @post = Post.new
  end
  def create
    @post = Post.create(post_params)
    @post.user_id = current_user.id 
    if(@post.save!)
      redirect_to action: "index"
    else
      render alert("Post Not created")
    end
  end


  private

  def post_params
   params.require(:post).permit(:content , :image )
  end




end
