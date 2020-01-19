class Message < ApplicationRecord
  belongs_to :group
  belong_to :user

  alidates :content, presence: true, unless: :image?
  mount_uploader :image, ImageUploader
end
