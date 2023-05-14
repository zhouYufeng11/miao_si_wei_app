const URL = {
	TX_CLASS: '//ke.qq.com/course/',
	IMG_BASE: '//tximg.jsplusplus.com/',
	API_BASE_URL: process.env.NODE_ENV === 'production'
	                                    ? 'http://m.jsplusplus.com/'
	                                    : 'http://localhost:3008/'
}

const PULL_DOWN_TEXT = {
	ORIGIN: '重新加载',
	PULLING: '正在加载中...',
	FINISHED: '加载完成'
}

export {
	URL,
	PULL_DOWN_TEXT
}