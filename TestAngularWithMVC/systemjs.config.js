/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      '@progress/kendo-angular-grid': 'npm:@progress/kendo-angular-grid',
      '@progress/kendo-angular-intl': 'npm:@progress/kendo-angular-intl',
      '@telerik/kendo-intl': 'npm:@telerik/kendo-intl',
      '@progress/kendo-angular-l10n': 'npm:@progress/kendo-angular-l10n',
      '@progress/kendo-data-query': 'npm:@progress/kendo-data-query',
        '@telerik/kendo-draggable':'npm:@telerik/kendo-draggable'

    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
        app: {
            main:'./main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
    'npm:@progress/kendo-angular-grid': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
    },
    'npm:@progress/kendo-angular-intl': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
    },
    'npm:@telerik/kendo-intl': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
    },
    'npm:@progress/kendo-angular-l10n': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
    },
    'npm:@progress/kendo-data-query': {
        main: './dist/npm/main.js',
        defaultExtension:'js'
    },
    'npm:@telerik/kendo-draggable': {
        main: './dist/npm/main.js',
        defaultExtension:'js'
    }


    }
  });
  System.import('app').catch(function (err) { console.error(err); });
})(this);
