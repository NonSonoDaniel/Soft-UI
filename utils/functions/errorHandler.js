module.exports = function (config, themeConfig) {
    config.errorPage = function (req, res, error, type) {
        if (type == 404) {
            title = themeConfig?.error?.error404?.title || '404'
            subtitle =
                themeConfig?.error?.error404?.subtitle || 'Page not found'
            description =
                themeConfig?.error?.error404?.description ||
                'The page you are looking for does not exist.'
        } else {
            title = themeConfig?.error?.dbdError?.title || type.toString()
            subtitle = themeConfig?.error?.dbdError?.subtitle || 'ERRORE'
            description =
                themeConfig?.error?.dbdError?.description ||
                'Si è verificato un errore, se il problema persiste, apri un ticket sul nostro discord.'
        }

        if (error) {
            console.error(error)
        }

        if (themeConfig?.error?.errorHandler)
            themeConfig.error.errorHandler({
                req,
                res,
                error: {
                    type,
                    path: error?.path || null,
                    error: error?.stack || `Page ${req.originalUrl} not found!`
                },
                user: req?.session?.user || null
            })

        return res.render('error', {
            strError: error?.stack?.split('\n'),
            req,
            bot: config.bot,
            config,
            type,
            themeConfig,
            title,
            subtitle,
            description,
            error: error || undefined
        })
    }
}
