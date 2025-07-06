module.exports = {
    page: '/ehqwuihqhj',
    execute: async (req, res, app, config, themeConfig, info) => {
        res.render('credits', {
            req,
            config,
            themeConfig,
            info
        })
    }
}
