class Project < ApplicationRecord
	has_one :message
	before_save :create_hashkey
	after_save :create_message
	def create_hashkey
		if new_record?
			self.project_hash = SecureRandom.base64(8).gsub("/","_").gsub(/=+$/,"")
			self.message = Message.create()
		end
	end
	def create_message
	end

	def show
		if self.message.active == true
			return self.message
		else
			return {}
		end
	end
end
