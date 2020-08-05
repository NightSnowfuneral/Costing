const config={
		apiUrl:{
			path:'http://172.16.10.20:3652/',
			adminSession:'session',
			commonData:'hello',
			commonNav:'nav',
			Search:'search/records',
			Task:'records',
			station:'search/resource',
			mansion:'resource',
			Organization:'Organization',
			ManageAddData:'ManageAddData',
			Uploader:'uploader',
			Tasks:'tasks',
			ManageEditData:'ManageEditData',
			shift_record:'shift_record',
			search:'search/records'		
		},
		reg:{
			phone:/^1[3|4|5|7|8][0-9]{9}$/,
			trim:/\s+/g
		}
	}

export default config
