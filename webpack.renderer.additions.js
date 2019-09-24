module.exports = {
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader'
            }
        ]
    },
    devtool: "source-map",
};
