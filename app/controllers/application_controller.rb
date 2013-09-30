class ApplicationController < ActionController::Base
  protect_from_forgery

  def after_sign_in_path_for(resource)
    if resource.is_a?(User)
      entries_path 
    else
      resource
    end
  end

  def after_invite_path_for(resource)
    user_path(current_user)
  end

  protected
  def authenticate_inviter!
    current_user
  end

  def correct_user?
    @user = User.find(params[:id])
    unless current_user == @user
      redirect_to root_url, :alert => "Access denied."
    end
  end

  rescue_from CanCan::AccessDenied do |exception|
    redirect_to root_path, :alert => exception.message
  end

end
