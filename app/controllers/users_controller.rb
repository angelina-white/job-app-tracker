class UsersController < ApplicationController
    skip_before_action :authorized, only: :create

    def show
        current_user = User.find(session[:user_id])
        render json: current_user
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def jobs_index
        user = User.find(params[:user_id])
        jobs = user.jobs
        render json: jobs
    end

    def interviews_index
        user = User.find(params[:user_id])
        interviews = user.interviews
        render json: interviews, serializer: InterviewWithCompanySerializer
    end

    private

    def user_params
        params.permit(:username, :password)
    end
end
