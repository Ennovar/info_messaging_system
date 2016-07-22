class Project < ApplicationRecord
	has_one :message
	before_save :create_hashkey

	def create_hashkey
		if new_record?
			self.project_hash = SecureRandom.base64(8).gsub("/","_").gsub(/=+$/,"")
		end
	end

	def show
		if self.message.active == true
			return self.message
		else
			return {}
		end
	end
end
