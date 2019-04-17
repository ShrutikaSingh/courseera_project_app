var url='http//mylogger.io/log';
function log_function(message)
{
  console.log(message);
}
log_function('hi');
module.exports.log = log_function;
module.exports.url_chk= url;
