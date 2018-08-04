class PostsController < ApplicationController
 before_action :authenticate_user!
  def index
    @posts = Post.all.order(created_at: :desc)
    
    @post = Post.new
  end
  def create
    @post = Post.create(post_params)
    @post.user_id = current_user.id
    if(@post.save!)
      redirect_to action: "index"
    end
  end


  private

  def post_params
   params.require(:post).permit(:content , :image )
  end




end
