const qiniu = require('qiniu'),  //npm i qiniu -S
      { keys, bucket } = require('./server/configs/qiniu'),
      fs = require('fs');

qiniu.conf.ACCESS_KEY = keys.ak;
qiniu.conf.SECRET_KEY = keys.sk;

;(() => {

	const jsFiles = fs.readdirSync('./.nuxt/dist/client'),
	      fontFiles = fs.readdirSync('./.nuxt/dist/client/fonts'),
	      imgFiles = fs.readdirSync('./.nuxt/dist/client/img');

	jsFiles.forEach((item) => {
		if (/\.js$/.test(item)) {
			updateToQiniu('./.nuxt/dist/client/' + item, item);
		}
	});

	fontFiles.forEach((item) => {
		updateToQiniu('./.nuxt/dist/client/fonts/' + item, 'fonts/' + item);
	});

	imgFiles.forEach((item) => {
		updateToQiniu('./.nuxt/dist/client/img/' + item, 'img/' + item);
	});

  function updateToQiniu (filePath, fileName) {
  	function uploadtoken(bucket, key) {
	    var policy = new qiniu.rs.PutPolicy({ isPrefixalScope: 1, scope: bucket + ':' + key });
	    return policy.uploadToken();
	  }

	  const config = new qiniu.conf.Config(),
	        putExtra = new qiniu.form_up.PutExtra(),
	        formUploader = new qiniu.form_up.FormUploader(config);


	  const upToken = uploadtoken(bucket.name, fileName);

    try {
    	formUploader.putFile(upToken, fileName, filePath, putExtra, (err, data) => {
        if (err) {
          console.log('Failed to upload data.(101)');
          console.log(err);
          return;
        } 

        console.log('Data has been uploaded successfully.');
        console.log(data);
      })
    } catch (err) {
    	console.log('Failed to upload data.(102)');
      console.log(err);
    }
  }
})();