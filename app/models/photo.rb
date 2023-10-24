class Photo < ApplicationRecord
    has_one_attached :image

    belongs_to :user

    validates :title, presence: true

    # def image_url
    #     image.attached? ? url_for(image) : nil
    # end

    # def to_google_map_format(latitude_str, longitude_str)
    #     latitude_decimal = convert_latitude(latitude_str)
    #     longitude_decimal = convert_longitude(longitude_str)
    
    #     # Google マップ形式に連結
    #     google_map_format = "#{latitude_decimal}, #{longitude_decimal}"
    
    #     return google_map_format
    #   end

    # def convert_latitude(latitude_str)
    #     # "35 deg 39' 21.15\" N" のような形式の文字列から情報を取得
    #     match_data = /(\d+) deg (\d+)' ([\d.]+)\" ([NS])/.match(latitude_str)
      
    #     if match_data
    #       degrees = match_data[1].to_f
    #       minutes = match_data[2].to_f
    #       seconds = match_data[3].to_f
    #       direction = match_data[4]
      
    #       # 度分秒形式から10進度数形式に変換
    #       decimal_degrees = degrees + minutes / 60.0 + seconds / 3600.0
      
    #       # 北半球（N）ならそのまま、南半球（S）ならマイナスにする
    #       decimal_degrees *= -1 if direction == 'S'
      
    #       return decimal_degrees
    #     else
    #       # マッチしない場合のエラーハンドリング
    #       return nil
    #     end
    #   end

    #   def convert_longitude(longitude_str)
    #     # "139 deg 41' 53.67\" E" のような形式の文字列から情報を取得
    #     match_data = /(\d+) deg (\d+)' ([\d.]+)\" ([EW])/.match(longitude_str)
      
    #     if match_data
    #       degrees = match_data[1].to_f
    #       minutes = match_data[2].to_f
    #       seconds = match_data[3].to_f
    #       direction = match_data[4]
      
    #       # 度分秒形式から10進度数形式に変換
    #       decimal_degrees = degrees + minutes / 60.0 + seconds / 3600.0
      
    #       # 東経（E）ならそのまま、西経（W）ならマイナスにする
    #       decimal_degrees *= -1 if direction == 'W'
      
    #       return decimal_degrees
    #     else
    #       # マッチしない場合のエラーハンドリング
    #       return nil
    #     end
    #   end

    def image_url
        image.attached? ? Rails.application.routes.url_helpers.url_for(image): nil
    end

end
