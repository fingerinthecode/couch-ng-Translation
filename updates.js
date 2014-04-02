exports.local_update = function (doc, req) {
  var form = JSON.parse(req.body);
  if (!form.hasOwnProperty('key')  ||
      !form.hasOwnProperty('text')
  ) {
    throw({forbidden: '111: Request incomplete'});
  }
  if (doc === null) {
    doc = {};
  }
  doc._id       = req.id;
  doc[form.key] = form.text;
  return [doc, 'ok'];
}
