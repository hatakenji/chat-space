# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# chat-space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|emailstring|null: false|
|password|string|null: false|

### Association
- has_many :messages
- has_many :group_users
- has_many :groups, through: :group_users

## massagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|group|references|foreign_key: true|
|user|references|foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :group_users
- has_many :messages
- has_many :users, through: :group_users

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|foreign_key: true|
|group|references|foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

