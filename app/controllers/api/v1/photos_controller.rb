class Api::V1::PhotosController < ApplicationController


    # create_table "photos", force: :cascade do |t|
    #     t.string "title"
    #     t.text "description"
    #     t.float "gps_latitude"
    #     t.float "gps_longitude"
    #     t.string "camera"
    #     t.string "lens"
    #     t.integer "ISO_sensitivity"
    #     t.string "shutter_speed"
    #     t.integer "exposure_compensation"
    #     t.integer "aperture"
    #     t.string "focal_length"
    #     t.string "white_balance"
    #     t.string "shooting_mode"
    #     t.string "image_size_width"
    #     t.string "image_size_height"
    #     t.integer "user_id"
    #     t.datetime "created_at", null: false
    #     t.datetime "updated_at", null: false
    #     t.index ["user_id"], name: "index_photos_on_user_id"
    #   end

    before_action :set_photo, only: %i[destroy update]

    def index
        photo = Photo.all, methods: [:image_url]
        render json: photo
    end

    def create
       photo = Photo.new
       if photo.save
        render json: photo, methods: [:image_url]
       else
        render json: photo.errors, status: 422
       end
    end

    def update
      if photo.update(photo_params)
        render json: photo
      else
        render json: photo.errors, status: 422
      end
    end

    def destroy
      photo.destroy!
    end
    
    private

    def photo_params
      params.require(:photo).permit(:title, :image)
    end

    def set_photo
      photo = Photo.find(params[:id])
    end
end
