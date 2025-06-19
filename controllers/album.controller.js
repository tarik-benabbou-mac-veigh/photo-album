const AlbumModel = require('../models/Album.model');

const createAlbumForm = (req,res)=>{
    res.render('new-album', {
        title: 'My new album',
        errors: req.flash('error'),
    });
};

const createAlbum = async (req,res)=>{
    try{
        await AlbumModel.create({
            title: req.body.albumTitle,
        });
        res.redirect('/');
    }catch(err){
        req.flash('error', 'Enter a title for your new album 🙂');
        res.redirect('/albums/create');
    }
};

module.exports = {
    createAlbumForm,
    createAlbum,
};