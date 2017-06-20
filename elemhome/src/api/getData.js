import axios from "axios"

async function getAxios(url) {
	return axios.get(url);
}

 async function postAxios(url, data = {}) {
	return axios.post(url,data);
}

export default async(url = '', data = {}, method = 'get') => {
	// 由于axios是异步promise，所以axios内部的return无效
	/*if(method === 'get'){
		getAxios(url).then(res => {
			console.log(res.data);
			return res.data;
		}).catch(err => {
			console.log(err);
		})
	}else{
		postAxios(url,data).then(res => {
			return res.data;
		}).catch(err => {
			console.log(err);
		})
	}
	return 1;*/
	if(method === 'get'){
		try {
			let res =await getAxios(url);
			let resJson =await JSON.stringify(res.data);
			return resJson;
		} catch (error) {
			throw new Error(error)
		}
	}else{
		try {
			let res =await postAxios(url,data);
			let resJson =await JSON.stringify(res.data);
			console.log(1);
			return resJson;
		} catch (error) {
			throw new Error(error)
		}
	}
}