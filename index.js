module.exports = bngt = (function () {


    bngt.prototype.type = 'template';

    bngt.prototype.extension = 'html';
    
    bngt.prototype.compile = function(data, path, callback) {
    var html, url;
    html = escape(data);
    console.log(html);
  };


})();

