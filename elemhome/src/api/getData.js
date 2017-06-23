import axios from "axios"

async function getAxios(url) {
	return axios.get(url);
}

 async function postAxios(url, data = {}) {
	return axios.post(url,data);
}

export default async(url = '', data = {}, method = 'get') => {
	// axios是异步promise，if语句会先执行完
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
			//let resJson = JSON.stringify(res.data);
			//console.log(res);
			return res.data;
		} catch (error) {
			throw new Error(error)
		}
	}else{
		try {
			let res =await postAxios(url,data);
			return res.data;
			//let resJson = JSON.stringify(res.data[0]);
			//return resJson;
		} catch (error) {
			throw new Error(error)
		}
	}
}