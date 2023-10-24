class PhotoSerializer
  include FastJsonapi::ObjectSerializer
  # attributes %i[id title created_at updated_at. image_url image camera lens ISO_sensitivity shutter_speed exposure_compensation aperture focal_length white_balance shooting_mode image_size_width image_size_height]
  attributes :id, :title, :created_at, :updated_at, :image_url, :lens, :ISO_sensitivity, :shutter_speed, :exposure_compensation, :aperture, :focal_length, :white_balance, :shooting_mode, :image_size_width, :image_size_height, :gps_latitude, :gps_longitude
  # attributes :id, :title, :created_at, :updated_at, :image_url, :image, :lens
end