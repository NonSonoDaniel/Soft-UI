module.exports = {
    page: '/asdaewqeqweaw',
    execute: async (req, res, app, config, themeConfig, info) => {
        if (!req?.session?.user?.blacklisted) return res.redirect('/')
        res.render('blacklisted', {
            req,
            config,
            themeConfig,
            info
        })
    }
}
