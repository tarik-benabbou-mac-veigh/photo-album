const AlbumModel = require('../models/Album.model');

const createAlbumForm = (req,res)=>{
    res.render('new-album', {title: 'New album'});
};

const createAlbum = async (req,res)=>{
    await AlbumModel.create({
        title: req.body.albumTitle,
    });
    res.redirect('/');

};
module.exports = {
    createAlbumForm,
    createAlbum,
};