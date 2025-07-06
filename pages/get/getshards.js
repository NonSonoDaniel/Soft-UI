module.exports = {
    page: '/stats',
    execute: async (req, res, app, config, themeConfig, info, db) => {
        let returned = await db.get('stats')

        res.json(returned)
    }
}
