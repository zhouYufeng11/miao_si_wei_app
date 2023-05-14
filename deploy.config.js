module.exports = {
	app: [
    {
    	name: 'jsplusplus_m',
    	script: 'server/index.js',
    	env: {
    		COMMON_VARIABLE: 'true'
    	},
    	env_production: {
    		NODE_ENV: 'production'
    	}
    }
	],

	deploy: {
		production: {
			user: 'root',
			host: '47.105.106.4',
			ref: 'origin/master',
			repo: 'https://gitee.com/jsjiajia_tishengban_admin/jsplusplus_m.git',
			path: '/www/jsplusplus_m/production',
			'pre-deploy': 'git fetch --all',
			'post-deploy': 'npm install && npm run build && npm start && pm2 startOrRestart deploy.config.js --env production'
		}
	}
}