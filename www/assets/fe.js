"use strict";



define('fe/app', ['exports', 'ember', 'fe/resolver', 'ember-load-initializers', 'fe/config/environment'], function (exports, _ember, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = void 0;

  _ember.default.MODEL_FACTORY_INJECTIONS = true;

  App = _ember.default.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('fe/helpers/app-version', ['exports', 'ember', 'fe/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = _ember.default.Helper.helper(appVersion);
});
define('fe/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('fe/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('fe/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'fe/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('fe/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('fe/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('fe/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('fe/initializers/export-application-global', ['exports', 'ember', 'fe/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('fe/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('fe/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('fe/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("fe/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('fe/pods/home/route', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({});
});
define("fe/pods/home/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "J+s0d8P0", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\\nHere is you home page;\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "fe/pods/home/template.hbs" } });
});
define('fe/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('fe/router', ['exports', 'ember', 'fe/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = _ember.default.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('home');
  });

  exports.default = Router;
});
define('fe/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("fe/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "S/PkUuhJ", "block": "{\"statements\":[[4,\" Status bar overlay for full screen mode (PhoneGap) \"],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"statusbar-overlay\"],[13],[14],[0,\"\\n    \"],[4,\" Views \"],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"views\"],[13],[0,\"\\n      \"],[4,\" Your main view, should have \\\"view-main\\\" class \"],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"view view-main\"],[13],[0,\"\\n        \"],[4,\" Top Navbar\"],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"navbar\"],[13],[0,\"\\n          \"],[11,\"div\",[]],[15,\"class\",\"navbar-inner\"],[13],[0,\"\\n            \"],[4,\" We need cool sliding animation on title element, so we have additional \\\"sliding\\\" class \"],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"center sliding\"],[13],[0,\"Awesome App\"],[14],[0,\"\\n          \"],[14],[0,\"\\n        \"],[14],[0,\"\\n        \"],[4,\" Pages container, because we use fixed-through navbar and toolbar, it has additional appropriate classes\"],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"pages navbar-through toolbar-through\"],[13],[0,\"\\n          \"],[4,\" Page, \\\"data-page\\\" contains page name \"],[0,\"\\n          \"],[11,\"div\",[]],[15,\"data-page\",\"index\"],[15,\"class\",\"page\"],[13],[0,\"\\n            \"],[4,\" Scrollable page content \"],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"page-content\"],[13],[0,\"\\n              \"],[11,\"p\",[]],[13],[0,\"Page content goes here\"],[14],[0,\"\\n              \"],[4,\" Link to another page \"],[0,\"\\n              \"],[11,\"a\",[]],[15,\"href\",\"about.html\"],[13],[0,\"About app\"],[14],[0,\"\\n            \"],[14],[0,\"\\n          \"],[14],[0,\"\\n        \"],[14],[0,\"\\n        \"],[4,\" Bottom Toolbar\"],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"toolbar\"],[13],[0,\"\\n          \"],[11,\"div\",[]],[15,\"class\",\"toolbar-inner\"],[13],[0,\"\\n            \"],[4,\" Toolbar links \"],[0,\"\\n            \"],[11,\"a\",[]],[15,\"href\",\"#\"],[15,\"class\",\"link\"],[13],[0,\"Link 1\"],[14],[0,\"\\n            \"],[11,\"a\",[]],[15,\"href\",\"#\"],[15,\"class\",\"link\"],[13],[0,\"Link 2\"],[14],[0,\"\\n          \"],[14],[0,\"\\n        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "fe/templates/application.hbs" } });
});


define('fe/config/environment', ['ember'], function(Ember) {
  var prefix = 'fe';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("fe/app")["default"].create({"name":"fe","version":"0.0.0+7517ce44"});
}
//# sourceMappingURL=fe.map
