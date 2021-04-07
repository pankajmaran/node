function log(req, req, next)
{
    console.log('logger...');
    next();
}
module.exports=log;