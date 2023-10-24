class Api::V1::PhotosController < ApplicationController
  require 'mini_exiftool'
  require 'exifr/jpeg'

    before_action :set_photo, only: %i[destroy update show]

    def index
        # photo = Photo.all, methods: [:image_url]
        photos = Photo.all
        # render json: photos
        # render json: PhotoSerializer.new(photos).serialized_json
        # attributes_hash = PhotoSerializer.new(photo).serializable_hash[:data][:attributes]
        serialized_data = PhotoSerializer.new(photos)
        # serialized_data.as_json[:data]
        render json: serialized_data.as_json
    end

    def create
      # binding.pry
      photo = current_user.photos.build(photo_params)
      add_Exif_to_photo(photo, params[:photo][:image])

      if photo.save
        render json: photo
      else
        render json: { errors: photo.errors.full_messages }, status: :unprocessable_entity
      end

      #  photo.image.attach(params[:photo][:image])
      #         blob = ActiveStorage::Blob.create_after_upload!(
      #           io: StringIO.new(decode(params[:image].headers) + "\n"),
      #           filename: params[:image].original_filename
      #         )
      #         post.image.attach(blob)
      #  if photo.save
      #   render json: photo
      
      # google map API用 緯度経度の変換------
      # latitude_str = exif.GPSLatitude
      # longitude_str = exif.GPSLongitude

      # google_map_coordinates = photo.to_google_map_format(latitude_str, longitude_str)

      # uploaded_image = params[:photo][:image]
      # uploaded_image_io = uploaded_image.open
    end

    def show
      json_string = PhotoSerializer.new(@photo).serializable_hash[:data][:attributes]

      # exif = MiniExiftool.new "#{json_string}"
      # render json: PhotoSerializer.new(@photo).serializable_hash[:data][:attributes]
      render json:  json_string
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
      # params.permit(:title, :description, :image)
      params.require(:photo).permit(:title, :description, :image)
    end

    def set_photo
      @photo = Photo.find(params[:id])
    end

    def decode(str)
      Base64.decode64(str.split(',').last)
    end

    def add_Exif_to_photo(photo, uploaded_image)
      tempfile = Tempfile.new
      tempfile.binmode
      tempfile.write(uploaded_image.read)
      tempfile.rewind
    
      # MiniExiftoolでの処理
      exif = MiniExiftool.new(tempfile)
    
      # EXIFR::JPEGでの処理
      tempfile.rewind
      exif_data = EXIFR::JPEG.new(tempfile)
    
      tempfile.close
      tempfile.unlink
    
      # google map API用 緯度経度の変換
      if exif_data.gps.present?
        latitude = exif_data.gps.latitude
        longitude = exif_data.gps.longitude
      else
        latitude = nil
        longitude = nil
      end
    
      photo.assign_attributes(
        gps_latitude: latitude,
        gps_longitude: longitude,
        camera: exif.Model,
        lens: exif.Lens,
        ISO_sensitivity: exif.ISO,
        shutter_speed: exif.ExposureTime,
        exposure_compensation: exif.ExposureCompensation,
        aperture: exif.FNumber,
        focal_length: exif.FocalLength,
        white_balance: exif.WhiteBalance,
        shooting_mode: exif.ExposureMode,
        image_size_width: exif.ImageWidth,
        image_size_height: exif.ImageHeight
      )
    end
end