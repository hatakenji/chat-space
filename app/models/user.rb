class User < ApplicationRecord
  has_many :messages
  has_many :group_users
  has_many :groups, through: :group_users
end
