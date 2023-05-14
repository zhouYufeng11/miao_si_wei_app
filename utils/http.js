import axios from 'axios';
import qs from 'qs';

import { URL } from '@/config/config';

export default class HTTP {
	axiosPost (options) {
		axios({
			url: URL.API_BASE_URL + options.url,
			method: 'post',
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			data: qs.stringify(options.data)
		}).then((res) => {
			options.success(res.data);
		}).catch((err) => {
      options.error(err);
		});
	}

	axiosGet (options) {
		console.log(URL.API_BASE_URL + options.url);
		axios(URL.API_BASE_URL + options.url)
		  .then((res) => {
				options.success(res.data);
			}).catch((err) => {
	      options.error(err);
			});
	}
}
