class ContentController < ApplicationController
  uses_tiny_mce :only => [:home],
    :options => {
      :width => "599",
      :height => "500"
    }
  
  def home 
    @text = "Click me to edit the text"
  end
  
  def save
    @text = params[:text]
    # do some database saving here
    render :text => @text, :content_type => 'application/html'
  end
end
