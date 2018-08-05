const path = require('path');

module.exports = {
	entry: {
		viva-ct: './src/viva-ct-src.js'
	},
	output: {
		filename: '[name].min.js',
		path: path.join(__dirname,'dist')
	},
	devServer:{
		contentBase: path.join(__dirname,'dist'),
		port: 3000
	},
	mode: 'production',
	module: {
		rules: [
			{
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'stage-0']
                    }
                }
            }
		]
	}
}