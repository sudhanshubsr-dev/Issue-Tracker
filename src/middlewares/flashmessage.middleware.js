export default class middleware{
    static setFlashMessage(req,res,next){
        res.locals.flash ={
            success: req.flash("success"),
            error: req.flash("error"),
            warning: req.flash("warning"),
            info: req.flash("info"),
        }
        next();
}
}