const fetch = require('node-fetch')
const consolePrefix = `${'['.blue}${'dbd-soft-ui'.yellow}${']'.blue} `

let allUpdated = false

async function npmDashCheck() {
    await npmThemeCheck();
    let failed = 0
    let failed2 = 0

    try {
        await fetch(`https://registry.npmjs.org/discord-dashboard`)
    } catch (error) {
        failed++
        console.log(`${consolePrefix}Failed to check NPM for updates. (DBD)`)
    }

    if (failed === 0) {
        let checkArray = await fetch(`https://registry.npmjs.org/discord-dashboard`);

        try {
            checkArray = await checkArray.json()
        } catch (error) {
            failed2++
            console.log(
                `${consolePrefix}Failed to check NPM for updates. (DBD)`
            )
        }

        if (failed2 === 0) {
        /*const latestVersion = checkArray['dist-tags'].latest
            const currentVersion = require('discord-dashboard').version
            if (currentVersion < latestVersion) {
                allUpdated = false
                return console.log(`${consolePrefix}${'Your version of discord-dashboard is'.cyan} ${'outdated'.red}${'!'.cyan}`);
            }
            if (!allUpdated) return
            allUpdated = true
            //else console.log(`${consolePrefix}${'Your version of discord-dashboard is'.cyan} ${'up-to-date'.green}${'!'.cyan}`);*/
        }
    }
}

async function npmThemeCheck() {
    let failed = 0;
    let failed2 = 0;

    try {
        await fetch(`https://registry.npmjs.org/discord-dashboard`);
    } catch (error) {
        failed++
        console.log(`${consolePrefix}Failed to check NPM for updates. (soft-ui)`);
    }
/*
    if (failed === 0) {
        let checkArray = await fetch(`https://registry.npmjs.org/dbd-soft-ui`)

        try {
            checkArray = await checkArray.json()
        } catch (error) {
            failed2++
            console.log(`${consolePrefix}Failed to check NPM for updates. (soft-ui)`);
        }

        if (failed2 === 0) {
            const latestVersion = checkArray['dist-tags'].latest
            const currentVersion = require('dbd-soft-ui').version
            if (currentVersion < latestVersion) return console.log(`${consolePrefix}${'Your version of dbd-soft-ui is'.cyan} ${'outdated'.red}${'!'.cyan}`);
            allUpdated = true
            //else console.log(`${consolePrefix}${'Your version of dbd-soft-ui is'.cyan} ${'up-to-date'.green}${'!'.cyan}`);
        }
    }*/
}

exports.update = async () => {
    await npmDashCheck()

    if(allUpdated) console.log(`${consolePrefix}${'All the packages are '.cyan}${'up-to-date'.green}${'!'.cyan}`)
}