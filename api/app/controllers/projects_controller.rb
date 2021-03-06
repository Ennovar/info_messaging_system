class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :update, :destroy]
  before_action :authenticate_user!	, only: [:show, :create, :update, :destroy]
  # GET /projects
  def index
    if request.headers["HTTP_PROJECT_HASH"]
      puts "hello"
      @project = set_project
      render json: @project.show
    else
      if user_signed_in?
        @projects = Project.all
        render json: @projects
      else
        render json: {message: 'User not authenticated'}
      end
    end
  end

  # GET /projects/1
  def show
    render json: @project, :include => [:message]
  end

  # POST /projects
  def create
    @project = Project.new(project_params)
    if @project.save
      render json: @project, status: :created, location: @project
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /projects/1
  def update
    if @project.update(project_params)
      render json: @project
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # DELETE /projects/1
  def destroy
    @project.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      puts request.headers["HTTP_PROJECT_HASH"]
      if request.headers["HTTP_PROJECT_HASH"]
        @project = Project.where(project_hash: request.headers["HTTP_PROJECT_HASH"]).first
      else
        @project = Project.find(params[:id])
      end
    end

    # Only allow a trusted parameter "white list" through.
    def project_params
      params.require(:project).permit(:title, :project_hash)
    end
end
