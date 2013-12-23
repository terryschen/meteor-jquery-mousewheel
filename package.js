Package.describe({
  summary: "meteor packaged jquery-mousewheel (based on https://github.com/brandonaaron/jquery-mousewheel)"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files('lib/jquery.mousewheel.js', 'client');
});
