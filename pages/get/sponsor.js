module.exports = {
    page: '/asdaewqeqweaw',
    execute: async (req, res, app, config, themeConfig, info) => {
        res.render('sponsor', {
            req: req,
            config,
            themeConfig,
            info
        })
    }
}
