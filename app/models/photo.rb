class Photo < ApplicationRecord
    
    # create_table "photos", force: :cascade do |t|
    #     t.string "url_file"
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
    has_one_attached :image

    belongs_to :user
    
    validates :title, presence: true

    def image_url
        image.attached? ? url_for(image) : nil
    end

end
