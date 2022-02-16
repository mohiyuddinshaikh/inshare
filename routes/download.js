const router = require('express').Router();
const File = require('../models/file')

router.get('/:uuid', async (req, res) => {
    try {
        // Extract link and get file from storage send download stream 
        const file = await File.findOne({ uuid: req.params.uuid })
        if (!file) {
            return res.render('download', { error: 'Link has been expired.'});
        }

        const filePath = `${__dirname}/../${file.path}`
        res.download(filePath)

    } catch (error) {
        return error
    }
})

module.exports = router