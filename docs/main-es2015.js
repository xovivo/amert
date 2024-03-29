(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"preloader\">\n  <div id=\"status\">\n    <div class=\"spinner\">\n      <div class=\"rect1\"></div>\n      <div class=\"rect2\"></div>\n      <div class=\"rect3\"></div>\n      <div class=\"rect4\"></div>\n      <div class=\"rect5\"></div>\n    </div>\n  </div>\n</div>\n<div id=\"misbotones\">\n  <button routerLink=\"login\" class=\"botones1\"><i class=\"fa fa-sign-in\"></i>\n    Ingreso</button>\n  <button routerLink=\"registro\" class=\"botones2\"><i class=\"fa fa-user-plus\"></i> Registro</button>\n  <a href=\"/\"><button class=\"botones3\"><i class=\"fa fa-dashboard\"></i>\n      Inicio</button></a>\n</div>\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <div class=\"ae-grid au-xs-ta-center au-mb-4\">\n    \n    <div *ngFor=\"let persona of infoService.equipo\"  class=\"animated fadeIn ae-grid__item item-lg-4 ae-kappa au-mb-3\">\n      <img [src]=\"persona.url\" alt=\"\" class=\"au-mb-3\">\n      <h5 class=\"ae-u-bolder au-mt-2\">{{ persona.nombre }}</h5>\n      <p class=\"ae-u-bolder au-mb-3\">{{ persona.subtitulo }}</p>\n      <p class=\"au-lg-ta-left au-mb-3 au-pl-4 au-pr-4\">{{ persona.frase }}</p>\n      <a target=\"_blank\" href=\"https://twitter.com/{{ persona.twitter }}\" class=\"ae-u-bolder au-underline\">{{ persona.twitter }}</a>\n    </div>\n\n  </div>\n  <div class=\"ae-grid au-pt-2\">\n    <div class=\"ae-grid__item item-lg-8 item-lg--offset-2\">\n      <h4 class=\"ae-u-bolder\">Title example</h4>\n      <p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>\n    </div>\n  </div>\n  <div class=\"ae-grid ae-grid--alt au-xs-ptp-1\">\n    <div class=\"ae-grid__item--alt item-lg-4\">\n      <h6 class=\"ae-u-boldest\">About Us</h6>\n      <p class=\"au-lh-3\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\n    </div>\n    <div class=\"ae-grid__item--alt item-lg-4\">\n      <h6 class=\"ae-u-boldest\">Our Mission</h6>\n      <p class=\"au-lh-3\">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n    </div>\n    <div class=\"ae-grid__item--alt item-lg-4\">\n      <h6 class=\"ae-u-boldest\">Our Clients</h6>\n      <p class=\"au-lh-3\">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>\n      <p class=\"au-lh-3\">Nemo enim ipsam voluptatem quia voluptas</p>\n    </div>\n  </div>\n  <p class=\"au-flex au-pt-4 group-buttons\"><a href=\"portfolio.html\" class=\"au-mt-4 arrow-button arrow-button--right arrow-button--out\">View Our Portfolio<span class=\"arrow-cont\">\n        <svg>\n          <use xlink:href=\"assets/img/symbols.svg#arrow\"></use>\n        </svg></span></a></p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"content mt-3\">\n\n  <div class=\"col-sm-12\">\n    <div class=\"alert  alert-danger alert-dismissible fade show\" role=\"alert\">\n      <span class=\"badge badge-pill badge-danger\">ALERTA</span> Ángel Guardián activado!!!.\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">×</span>\n      </button>\n    </div>\n  </div>\n\n\n  <div class=\"col-sm-6 col-lg-3\">\n    <div class=\"card text-white bg-flat-color-1\">\n      <div class=\"card-body pb-0\">\n        <div class=\"dropdown float-right\">\n          <button class=\"btn bg-transparent dropdown-toggle theme-toggle text-light\" type=\"button\"\n            id=\"dropdownMenuButton1\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-cog\"></i>\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\n            <div class=\"dropdown-menu-content\">\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </div>\n        </div>\n        <h4 class=\"mb-0\">\n          <span class=\"count\">10468</span>\n        </h4>\n        <p class=\"text-light\">Miembros Totales</p>\n\n        <div class=\"chart-wrapper px-0\" style=\"height:70px;\" height=\"70\">\n          <div class=\"chartjs-size-monitor\"\n            style=\"position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;\">\n            <div class=\"chartjs-size-monitor-expand\"\n              style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\">\n              <div style=\"position:absolute;width:1000000px;height:1000000px;left:0;top:0\"></div>\n            </div>\n            <div class=\"chartjs-size-monitor-shrink\"\n              style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\">\n              <div style=\"position:absolute;width:200%;height:200%;left:0; top:0\"></div>\n            </div>\n          </div>\n          <canvas id=\"widgetChart1\" height=\"105\" width=\"442\" class=\"chartjs-render-monitor\"\n            style=\"display: block; height: 70px; width: 295px;\"></canvas>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n  <!--/.col-->\n\n  <div class=\"col-sm-6 col-lg-3\">\n    <div class=\"card text-white bg-flat-color-5\">\n      <div class=\"card-body pb-0\">\n        <div class=\"dropdown float-right\">\n          <button class=\"btn bg-transparent dropdown-toggle theme-toggle text-light\" type=\"button\"\n            id=\"dropdownMenuButton2\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-cog\"></i>\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton2\">\n            <div class=\"dropdown-menu-content\">\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </div>\n        </div>\n        <h4 class=\"mb-0\">\n          <span class=\"count\">10468</span>\n        </h4>\n        <p class=\"text-light\">Miembros Activos</p>\n\n        <div class=\"chart-wrapper px-0\" style=\"height:70px;\" height=\"70\">\n          <div class=\"chartjs-size-monitor\"\n            style=\"position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;\">\n            <div class=\"chartjs-size-monitor-expand\"\n              style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\">\n              <div style=\"position:absolute;width:1000000px;height:1000000px;left:0;top:0\"></div>\n            </div>\n            <div class=\"chartjs-size-monitor-shrink\"\n              style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\">\n              <div style=\"position:absolute;width:200%;height:200%;left:0; top:0\"></div>\n            </div>\n          </div>\n          <canvas id=\"widgetChart2\" height=\"105\" width=\"442\" class=\"chartjs-render-monitor\"\n            style=\"display: block; height: 70px; width: 295px;\"></canvas>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <!--/.col-->\n\n  <div class=\"col-sm-6 col-lg-3\">\n    <div class=\"card text-white bg-flat-color-4\">\n      <div class=\"card-body pb-0\">\n        <div class=\"dropdown float-right\">\n          <button class=\"btn bg-transparent dropdown-toggle theme-toggle text-light\" type=\"button\"\n            id=\"dropdownMenuButton3\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-cog\"></i>\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton3\">\n            <div class=\"dropdown-menu-content\">\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </div>\n        </div>\n        <h4 class=\"mb-0\">\n          <span class=\"count\">10468</span>\n        </h4>\n        <p class=\"text-light\">Miembros Inactivos</p>\n\n      </div>\n\n      <div class=\"chart-wrapper px-0\" style=\"height:70px;\" height=\"70\">\n        <div class=\"chartjs-size-monitor\"\n          style=\"position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;\">\n          <div class=\"chartjs-size-monitor-expand\"\n            style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\">\n            <div style=\"position:absolute;width:1000000px;height:1000000px;left:0;top:0\"></div>\n          </div>\n          <div class=\"chartjs-size-monitor-shrink\"\n            style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\">\n            <div style=\"position:absolute;width:200%;height:200%;left:0; top:0\"></div>\n          </div>\n        </div>\n        <canvas id=\"widgetChart3\" height=\"112\" width=\"487\" class=\"chartjs-render-monitor\"\n          style=\"display: block; height: 75px; width: 325px;\"></canvas>\n      </div>\n    </div>\n  </div>\n  <!--/.col-->\n\n  <div class=\"col-sm-6 col-lg-3\">\n    <div class=\"card text-white bg-flat-color-3\">\n      <div class=\"card-body pb-0\">\n        <div class=\"dropdown float-right\">\n          <button class=\"btn bg-transparent dropdown-toggle theme-toggle text-light\" type=\"button\"\n            id=\"dropdownMenuButton4\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-cog\"></i>\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton4\">\n            <div class=\"dropdown-menu-content\">\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </div>\n        </div>\n        <h4 class=\"mb-0\">\n          <span class=\"count\">10468</span>\n        </h4>\n        <p class=\"text-light\">Miembros Pendientes</p>\n\n        <div class=\"chart-wrapper px-3\" style=\"height:70px;\" height=\"70\">\n          <div class=\"chartjs-size-monitor\"\n            style=\"position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;\">\n            <div class=\"chartjs-size-monitor-expand\"\n              style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\">\n              <div style=\"position:absolute;width:1000000px;height:1000000px;left:0;top:0\"></div>\n            </div>\n            <div class=\"chartjs-size-monitor-shrink\"\n              style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\">\n              <div style=\"position:absolute;width:200%;height:200%;left:0; top:0\"></div>\n            </div>\n          </div>\n          <canvas id=\"widgetChart4\" height=\"91\" width=\"394\" class=\"chartjs-render-monitor\"\n            style=\"display: block; height: 61px; width: 263px;\"></canvas>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <!--/.col-->\n\n\n  <div class=\"col-xl-3 col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"stat-widget-one\">\n          <div class=\"stat-icon dib\"><i class=\"ti-car text-secondary border-secondary\"></i></div>\n          <div class=\"stat-content dib\">\n            <div class=\"stat-text\">Vehículos</div>\n            <div class=\"stat-digit\">1,012</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-xl-3 col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"stat-widget-one\">\n          <div class=\"stat-icon dib\"><i class=\"ti-face-smile text-secondary border-secondary\"></i>\n          </div>\n          <div class=\"stat-content dib\">\n            <div class=\"stat-text\">Conductores</div>\n            <div class=\"stat-digit\">1,012</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"col-xl-3 col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"stat-widget-one\">\n          <div class=\"stat-icon dib\"><i class=\"ti-thumb-up text-secondary border-secondary\"></i>\n          </div>\n          <div class=\"stat-content dib\">\n            <div class=\"stat-text\">Socio-Conductor</div>\n            <div class=\"stat-digit\">961</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-xl-3 col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"stat-widget-one\">\n          <div class=\"stat-icon dib\"><i class=\"ti-user text-secondary border-secondary\"></i>\n          </div>\n          <div class=\"stat-content dib\">\n            <div class=\"stat-text\">Socios</div>\n            <div class=\"stat-digit\">770</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-6 col-lg-3\">\n    <div class=\"card text-white bg-flat-color-6\">\n      <div class=\"card-body pb-0\">\n        <div class=\"dropdown float-right\">\n          <button class=\"btn bg-transparent dropdown-toggle theme-toggle text-light\" type=\"button\"\n            id=\"dropdownMenuButton3\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-cog\"></i>\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton3\">\n            <div class=\"dropdown-menu-content\">\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </div>\n        </div>\n        <h4 class=\"mb-0\">\n          <span class=\"count\">10468</span>\n        </h4>\n        <p class=\"text-light\">Incidentes Totales A-G</p>\n      </div>\n      <div class=\"chart-wrapper px-0\" style=\"height:70px;\" height=\"70\">\n        <div class=\"chartjs-size-monitor\"\n          style=\"position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;\">\n          <div class=\"chartjs-size-monitor-expand\"\n            style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\">\n            <div style=\"position:absolute;width:1000000px;height:1000000px;left:0;top:0\"></div>\n          </div>\n          <div class=\"chartjs-size-monitor-shrink\"\n            style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\">\n            <div style=\"position:absolute;width:200%;height:200%;left:0; top:0\"></div>\n          </div>\n        </div>\n        <canvas id=\"widgetChart5\" height=\"112\" width=\"487\" class=\"chartjs-render-monitor\"\n          style=\"display: block; height: 75px; width: 325px;\"></canvas>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-6 col-lg-3\">\n    <div class=\"card text-white bg-flat-color-7\">\n      <div class=\"card-body pb-0\">\n        <div class=\"dropdown float-right\">\n          <button class=\"btn bg-transparent dropdown-toggle theme-toggle text-light\" type=\"button\"\n            id=\"dropdownMenuButton2\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-cog\"></i>\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton2\">\n            <div class=\"dropdown-menu-content\">\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </div>\n        </div>\n        <h4 class=\"mb-0\">\n          <span class=\"count\">10468</span>\n        </h4>\n        <p class=\"text-light\">Incidentes Atendidos</p>\n\n        <div class=\"chart-wrapper px-0\" style=\"height:70px;\" height=\"70\">\n          <div class=\"chartjs-size-monitor\"\n            style=\"position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;\">\n            <div class=\"chartjs-size-monitor-expand\"\n              style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\">\n              <div style=\"position:absolute;width:1000000px;height:1000000px;left:0;top:0\"></div>\n            </div>\n            <div class=\"chartjs-size-monitor-shrink\"\n              style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\">\n              <div style=\"position:absolute;width:200%;height:200%;left:0; top:0\"></div>\n            </div>\n          </div>\n          <canvas id=\"widgetChart6\" height=\"102\" width=\"442\" class=\"chartjs-render-monitor\"\n            style=\"display: block; height: 68px; width: 295px;\"></canvas>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-6 col-lg-3\">\n    <div class=\"card text-white bg-flat-color-2\">\n      <div class=\"card-body pb-0\">\n        <div class=\"dropdown float-right\">\n          <button class=\"btn bg-transparent dropdown-toggle theme-toggle text-light\" type=\"button\"\n            id=\"dropdownMenuButton3\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-cog\"></i>\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton3\">\n            <div class=\"dropdown-menu-content\">\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </div>\n        </div>\n        <h4 class=\"mb-0\">\n          <span class=\"count\">10468</span>\n        </h4>\n        <p class=\"text-light\">Vehículos con A-G</p>\n\n      </div>\n\n      <div class=\"chart-wrapper px-0\" style=\"height:70px;\" height=\"70\">\n        <div class=\"chartjs-size-monitor\"\n          style=\"position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;\">\n          <div class=\"chartjs-size-monitor-expand\"\n            style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\">\n            <div style=\"position:absolute;width:1000000px;height:1000000px;left:0;top:0\"></div>\n          </div>\n          <div class=\"chartjs-size-monitor-shrink\"\n            style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\">\n            <div style=\"position:absolute;width:200%;height:200%;left:0; top:0\"></div>\n          </div>\n        </div>\n        <canvas id=\"widgetChart7\" height=\"105\" width=\"487\" class=\"chartjs-render-monitor\"\n          style=\"display: block; height: 70px; width: 325px;\"></canvas>\n      </div>\n    </div>\n  </div>\n  <!--/.col-->\n\n  <div class=\"col-sm-6 col-lg-3\">\n    <div class=\"card text-white bg-flat-color-3\">\n      <div class=\"card-body pb-0\">\n        <div class=\"dropdown float-right\">\n          <button class=\"btn bg-transparent dropdown-toggle theme-toggle text-light\" type=\"button\"\n            id=\"dropdownMenuButton4\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-cog\"></i>\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton4\">\n            <div class=\"dropdown-menu-content\">\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </div>\n        </div>\n        <h4 class=\"mb-0\">\n          <span class=\"count\">10468</span>\n        </h4>\n        <p class=\"text-light\">Vehículos sin A-G</p>\n\n        <div class=\"chart-wrapper px-3\" style=\"height:70px;\" height=\"70\">\n          <div class=\"chartjs-size-monitor\"\n            style=\"position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;\">\n            <div class=\"chartjs-size-monitor-expand\"\n              style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\">\n              <div style=\"position:absolute;width:1000000px;height:1000000px;left:0;top:0\"></div>\n            </div>\n            <div class=\"chartjs-size-monitor-shrink\"\n              style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\">\n              <div style=\"position:absolute;width:200%;height:200%;left:0; top:0\"></div>\n            </div>\n          </div>\n          <canvas id=\"widgetChart8\" height=\"105\" width=\"394\" class=\"chartjs-render-monitor\"\n            style=\"display: block; height: 70px; width: 263px;\"></canvas>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <script src=\"vendors/jquery/dist/jquery.min.js\"></script>\n  <script src=\"vendors/bootstrap/dist/js/bootstrap.min.js\"></script>\n  <script src=\"vendors/popper.js/dist/umd/popper.min.js\"></script>\n  <script src=\"assets/js/main.js\"></script>\n\n  <!-- <script src=\"assets/js/dashboard.js\"></script> -->\n  <script src=\"vendors/chart.js/dist/Chart.bundle.min.js\"></script>\n  <script src=\"assets/js/widgets.js\"></script>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/graficas1/graficas1.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/graficas1/graficas1.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n\n\n    <div class=\"col-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n\n                <h4 class=\"card-title\">{{ graficos.grafico1.leyenda }} </h4>\n\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">{{ graficos.grafico2.leyenda }} </h4>\n\n       \n            </div>\n        </div>\n    </div>\n\n</div>\n\n<div class=\"row\">\n\n\n    <div class=\"col-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">{{ graficos.grafico3.leyenda }} </h4>\n\n       \n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">{{ graficos.grafico4.leyenda }} </h4>\n\n       \n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item/item.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item/item.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"producto\">\n  <header [ngStyle]=\"{ 'background-image': 'url(assets/productos/'+ id +'/main.jpg)' }\" \n        class=\"rk-portfolio-cover item-inside-1\">\n    <div class=\"item-inside__meta\">\n      <h1 class=\"ae-u-bolder rk-portfolio-title \">{{ producto.producto }}</h1>\n      <p class=\"ae-theta rk-portfolio-category \">{{ producto.categoria }}</p>\n    </div>\n  </header>\n  <div class=\"ae-container-fluid\">\n    <div class=\"ae-grid ae-grid--collapse rk-portfolio-info \">\n      <div class=\"ae-grid__item item-lg-8 item-sm--center au-xs-ta-center au-lg-ta-left\">\n        <h2 class=\"rk-portfolio-inner-title \">{{ producto.subtitulo1 }}</h2>\n      </div>\n      <div class=\"ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-right rk-portfolio-details\">\n        <p class=\"rk-portfolio-inner-client \"><span class=\"ae-lambda\">Client: </span><span class=\"ae-u-bolder\">Agency Design Studio</span></p>\n        <p class=\"au-underline rk-portfolio-inner-website \"><a href=\"#0\" class=\"ae-kappa\">www.agencydesign.com</a></p>\n        <p class=\"ae-kappa ae-u-bold rk-portfolio-inner-date \">12 August, 2015</p>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"ae-container-fluid ae-container-fluid--inner rk-portfolio--inner\">\n    <div class=\"ae-grid ae-grid--collapse au-xs-ptp-1\">\n      <div class=\"ae-grid__item item-lg-5 au-lg-ptp-1\">\n        <h4 class=\"ae-u-bolder\">{{ producto.subtitulo1 }}</h4>\n        <p class=\"ae-eta\">{{ producto.desc1 }}</p>        \n      </div>\n      <div class=\"ae-grid__item item-lg-6 item-lg--offset-1\">\n        <img src=\"assets/productos/{{ id }}/pic-1.jpg\" alt=\"Urku Portfolio\">\n      </div>\n    </div>\n    <div class=\"ae-grid ae-grid--collapse\">\n      <div class=\"ae-grid__item item-lg-8\">\n        <img src=\"assets/productos/{{ id }}/pic-2.jpg\" alt=\"Urku Portfolio\">\n      </div>\n      <div class=\"ae-grid__item item-lg-3 item-lg--offset-1 au-lg-ptp-1\">\n        <p>{{ producto.desc2 }}</p>\n        <p class=\"ae-u-bolder\">{{ producto.subtitulo2 }}</p>\n      </div>\n    </div>\n </div>\n\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sufee-login d-flex align-content-center flex-wrap fondoscurop\">\n    <div class=\"container\">\n      <div class=\"login-content\">\n        <div class=\"login-logo\">\n        <a href=\"#\">\n          <img class=\"align-content logo\" src=\"assets/images/logoamert.svg\" alt=\"assets/images/logoamert.svg\">\n        </a>\n      </div>\n      <div class=\"container\">\n  \n        <div class=\"row\">\n      <div class=\"login-form\">\n  \n            <div class=\"col-md-3\"></div>\n      <div class=\"login-form fondo col-md-6\">\n  \n          \n                    <form (ngSubmit)=\"login( f )\" #f=\"ngForm\" class=\"login100-form validate-form flex-sb flex-w\">\n\n                      <span class=\"login100-form-title p-b-51\">\n                        Login\n                      </span>\n\n                      <span *ngIf=\"f.submitted && f.controls['email'].errors\" class=\"text-danger animated fadeIn\">El\n                        correo es obligatorio</span>\n\n                      <div class=\"wrap-input100 m-b-16\">\n                        <input class=\"input100\" type=\"text\" name=\"email\" [(ngModel)]=\"usuario.email\" required email\n                          placeholder=\"Email\">\n\n                        <span class=\"focus-input100\"></span>\n                      </div>\n\n                      <span *ngIf=\"f.submitted && f.controls['password'].errors\" class=\"text-danger animated fadeIn\">Al\n                        menos 6 letras</span>\n                      <div class=\"wrap-input100 m-b-16\" data-validate=\"Password is required\">\n                        <input class=\"input100\" type=\"password\" name=\"password\" [(ngModel)]=\"usuario.password\" required\n                          minlength=\"6\" placeholder=\"Password\">\n                        <span class=\"focus-input100\"></span>\n                      </div>\n\n                      <div class=\"flex-sb-m w-full p-t-3 p-b-24\">\n                        <div class=\"contact100-form-checkbox\">\n                          <input [(ngModel)]=\"recordarme\" class=\"input-checkbox100\" id=\"ckb1\" type=\"checkbox\"\n                            name=\"remember-me\">\n                          <label class=\"label-checkbox100\" for=\"ckb1\">\n                            Recordar mi usuario\n                          </label>\n                        </div>\n\n                        <div>\n                          <a routerLink=\"/registro\" class=\"txt1\">\n                            ¿No tienes cuenta?\n                          </a>\n                        </div>\n                      </div>\n\n                      <div class=\"container-login100-form-btn m-t-17\">\n                        <button class=\"login100-form-btn\" type=\"submit\">\n                          Ingresar\n                        </button>\n                      </div>\n\n                    </form>\n        </div>\n\n    </div>\n\n\n\n  </div>\n  </div>\n</div>\n<!-- <hr> -->\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"main-wrapper \"class=\"fondo\">\n  <header class=\"topbar fondo\">\n    <nav class=\"navbar fondo top-navbar navbar-expand-sm navbar-dark\">\n        <div class=\"navbar-collapse\">\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link nav-toggler hidden-md-up waves-effect waves-dark\" href=\"javascript:void(0)\">\n                        <i class=\"ti-menu\"></i>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link sidebartoggler hidden-sm-down waves-effect waves-dark\" href=\"javascript:void(0)\">\n                        <i class=\"ti-menu\"></i>\n                    </a>\n                </li>\n                <li class=\"nav-item hidden-sm-down\"></li>\n            </ul>\n            <ul class=\"navbar-nav my-lg-0\">\n                <li class=\"nav-item hidden-xs-down search-box\">\n                    <a class=\"nav-link hidden-sm-down waves-effect waves-dark\" href=\"javascript:void(0)\">\n                        <i class=\"ti-search\"></i>\n                    </a>\n                    <form class=\"app-search\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Search & enter\">\n                        <a class=\"srh-btn\"><i class=\"ti-close\"></i></a>\n                    </form>\n                </li>\n                <li class=\"nav-item dropdown\" style=\"position: absolute; right:50px;\">\n                    <a class=\"nav-link dropdown-toggle waves-effect waves-dark\" href=\"#\" id=\"2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                      <i class=\"mdi mdi-email\"></i>\n                        <div class=\"notify\">\n                            <span class=\"heartbit\"></span>\n                            <span class=\"point\"></span>\n                        </div>\n                    </a>\n                    <div class=\"dropdown-menu mailbox dropdown-menu-right animated fadeIn\" aria-labelledby=\"2\">\n                        <ul><li><div class=\"drop-title\"></div></li>\n                            <li>\n                                <div class=\"message-center\">\n                                    <a href=\"#\">\n                                    <div class=\"user-img\">\n                                        <img src=\"../../assets/img/usuarios/default.png\" alt=\"user\" class=\"img-circle\">\n                                        <span class=\"profile-status online pull-right\"></span>\n                                    </div>\n                                    <div class=\"mail-contnet\">\n                                        <h5></h5>\n                                        <span class=\"mail-desc\"></span>\n                                        <span class=\"time\"></span>\n                                    </div>\n                                    </a>\n                                </div>\n                            </li>\n                            <li>\n                                <a class=\"nav-link text-center\" href=\"javascript:void(0);\">\n                                    <strong>Ver todas las notificaciones</strong>\n                                    <i class=\"fa fa-angle-right\"></i>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </nav>\n</header>\n    <app-sidebar></app-sidebar>\n    <div class=\"page-wrapper\">\n        <div class=\"container-fluid\">\n            <app-breadcrumbs></app-breadcrumbs>\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/portafolio/portafolio.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/portafolio/portafolio.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<!-- About Xlight -->\n\t\t<section class=\"section-wrapper\" id=\"about\">\n\t\t\t<div class=\"about-us\">\n\t\t\t\t<div class=\"why-us  abanicos\">\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<!-- Block Title -->\n\t\t\t\t\t\t\t<div class=\"section-title wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t<h1><span>Conócenos</span></h1>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"element-title wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t<h1>¿Por qué agremiarte?</h1>\n\t\t\t\t\t\t\t\t<h3>Somos una <span class=\"main-color\">Asociación de Conductores</span> que conocemos las necesidades de\n\t\t\t\t\t\t\t\t\tlos que nos dedicamos a proporcionar servicio de <span class=\"main-color\">transporte mediante\n\t\t\t\t\t\t\t\t\t\tplataformas.</span></h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- End Block Title -->\n\t\t\t\t\t\t\t<!-- About Us Icons -->\n\t\t\t\t\t\t\t<div class=\"wrapper-why-us\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-sm-4 wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t\t<i class=\"hovicon effect-1 sub-a\"><b class=\"fas fa-flag-checkered\"></b></i>\n\t\t\t\t\t\t\t\t\t<h2>MISIÓN</h2>\n\t\t\t\t\t\t\t\t\t<p>Ser la asociación que brinde beneficios, ayudando a los conductores a generar oportunidades\n\t\t\t\t\t\t\t\t\t\tlogrando mejorar su calidad\n\t\t\t\t\t\t\t\t\t\tde vida y trabajo, para llegar a obtener estabilidad económica en su entorno familiar y social.</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-sm-4 wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"450ms\">\n\t\t\t\t\t\t\t\t\t<i class=\"hovicon effect-1 sub-a\"><b class=\"far fa-eye\"></b></i>\n\t\t\t\t\t\t\t\t\t<h2>VISIÓN</h2>\n\t\t\t\t\t\t\t\t\t<p>Ser la asociación cuya identidad sea capaz de actuar en nombre del conductor en la lucha por su\n\t\t\t\t\t\t\t\t\t\tdignificación ante leyes\n\t\t\t\t\t\t\t\t\t\ty sociedad.\n\t\t\t\t\t\t\t\t\t\tReconocida por el impacto del actuar en el bienestar y desarrollo de nuestra comunidad.</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-sm-4 wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"600ms\">\n\t\t\t\t\t\t\t\t\t<i class=\"hovicon effect-1 sub-a\"><b class=\"far fa-handshake\"></b></i>\n\t\t\t\t\t\t\t\t\t<h2>VALORES</h2>\n\t\t\t\t\t\t\t\t\t<p><span style=\"font-weight: 900;\">Seguridad: </span><br><span>Trabajar con protocolos buscando la\n\t\t\t\t\t\t\t\t\t\t\tintegridad del conductor.</span></p>\n\t\t\t\t\t\t\t\t\t<p><span style=\"font-weight: 900;\">Integridad: </span><br><span>Trabajar con rectitud para el bien\n\t\t\t\t\t\t\t\t\t\t\tcomún.</span></p>\n\t\t\t\t\t\t\t\t\t<p><span style=\"font-weight: 900;\">Solidaridad: </span><br><span>Unión y colaboración entre asociación\n\t\t\t\t\t\t\t\t\t\t\ty conductor.</span></p>\n\t\t\t\t\t\t\t\t\t<p><span style=\"font-weight: 900;\">Profesionalismo: </span><br><span>Capacitación constante para\n\t\t\t\t\t\t\t\t\t\t\tofrecer un servicio de calidad.</span></p>\n\t\t\t\t\t\t\t\t\t<p><span style=\"font-weight: 900;\">Trabajo en equipo: </span><br><span>Integrar a todo el gremio para\n\t\t\t\t\t\t\t\t\t\t\tresolver las carencias y necesidades.</span></p>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- End About Us Icons -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- End About Xlight -->\n\n\n\t\t\t<!-- Facts -->\n\t\t\t<div class=\"facts parallax\">\n\t\t\t\t<div class=\"overlay\">\n\t\t\t\t\t<div class=\"wrapper-block-facts\">\n\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"element-title\">\n\t\t\t\t\t\t\t\t\t<h1 class=\"main-color wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">Agunos datos\n\t\t\t\t\t\t\t\t\t\tinteresantes</h1>\n\t\t\t\t\t\t\t\t\t<h3 class=\"white-color wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">que demuestran\n\t\t\t\t\t\t\t\t\t\tnuestra fuerza en números.</h3>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"wrapper-number\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"number wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"timer\" data-from=\"0\" data-to=\"20\" data-speed=\"1000\">20</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"number-title wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t\t\t\tADMINISTRADORES\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"number wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"450ms\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"timer\" data-from=\"0\" data-to=\"800\" data-speed=\"5000\">800</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"number-title wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"450ms\">\n\t\t\t\t\t\t\t\t\t\t\tAGREMIADOS\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"number wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"600ms\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"timer\" data-from=\"0\" data-to=\"700\" data-speed=\"4300\">700</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"number-title wow fadeInDown\" data-wow-duration=\"13s\" data-wow-delay=\"600ms\">\n\t\t\t\t\t\t\t\t\t\t\tCONDUCTORES\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"number wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"750ms\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"timer\" data-from=\"0\" data-to=\"100\" data-speed=\"2000\">100</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"number-title wow fadeInDown\" data-wow-duration=\"13s\" data-wow-delay=\"750ms\">\n\t\t\t\t\t\t\t\t\t\t\tSOCIOS\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- End Facts -->\n\n\t\t</section>\n\t\t<!-- End About Section -->\n\n\t\t<!-- Team Section -->\n\t\t<section class=\"section-wrapper\" id=\"team\">\n\t\t\t<div class=\"team\">\n\t\t\t\t<!-- Block Title -->\n\t\t\t\t<div class=\"meet-the-team abanicos\">\n\t\t\t\t\t<div class=\"element-title\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t<div class=\"section-title wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t\t<h1><span>ESTAMOS PARA APOYARTE</span></h1>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<h1 class=\"wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">Nuestro grupo de administradores\n\t\t\t\t\t\t\t\t</h1>\n\t\t\t\t\t\t\t\t<!-- <h3 class=\" wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">This Is Our <span class=\"main-color\">Team</span>, This Is Our <span class=\"main-color\">Family</span></h3> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- End Block Title -->\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t<div class=\"wrapper-team\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"team-member\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-holder wow flipInY\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-image\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/team/presidenta.svg\" alt=\"\" /> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-social-list\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a class=\"team-member-social-list-item\" href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"team-member-social-list-item\" href=\"#\"><i class=\"fa fa-twitter\"></i></a> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"team-member-social-list-item\" href=\"mailto:presidencia@amertac.com.mx\"><i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-envelope\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a class=\"view-profile profile-read-more\" href=\"#\" data-single_url=\"profile1.html\">Profile</a>\t\t\t\t\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-meta\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"team-member-name\"><span class=\"main-color\">V</span>eronica</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-role\">Presidenta</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"team-member\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-holder wow flipInY\" data-wow-duration=\"1s\" data-wow-delay=\"500ms\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-image\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/team/tesoreria.svg\" alt=\"\" /> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-social-list\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a class=\"team-member-social-list-item\" href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"team-member-social-list-item\" href=\"#\"><i class=\"fa fa-twitter\"></i></a> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"team-member-social-list-item\" href=\"mailto:tesoreria@amertac.com.mx\"><i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-envelope\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a class=\"view-profile profile-read-more\" href=\"#\" data-single_url=\"profile2.html\">Profile</a>\t\t\t\t\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-meta\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"team-member-name\"><span class=\"main-color\">C</span>arlos</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-role\">Tesorero</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"team-member\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-holder wow flipInY\" data-wow-duration=\"1s\" data-wow-delay=\"800ms\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-image\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/team/tecnologia.svg\" alt=\"\" /> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-social-list\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a class=\"team-member-social-list-item\" href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"team-member-social-list-item\" href=\"#\"><i class=\"fa fa-twitter\"></i></a> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"team-member-social-list-item\" href=\"mailto:tecnologia@amertac.com.mx\"><i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-envelope\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a class=\"view-profile profile-read-more\" href=\"#\" data-single_url=\"profile3.html\">Profile</a>\t\t\t\t\t\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-meta\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"team-member-name\"><span class=\"main-color\">A</span>ntonio</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-role\">Tecnología</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"team-member\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-holder wow flipInY\" data-wow-duration=\"1s\" data-wow-delay=\"1100ms\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-image\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/team/administracion.svg\" alt=\"\" /> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-social-list\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a class=\"team-member-social-list-item\" href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"team-member-social-list-item\" href=\"#\"><i class=\"fa fa-twitter\"></i></a> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"team-member-social-list-item\" href=\"mailto:administracion@amertac.com.mx\"><i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-envelope\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a class=\"view-profile profile-read-more\" href=\"#\" data-single_url=\"profile4.html\">Profile</a>\t\t\t\t\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-meta\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"team-member-name\"><span class=\"main-color\">N</span>orma</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-role\">Administración</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Profile Team -->\n\t\t\t\t<div id=\"team-single-wrap\">\n\t\t\t\t\t<div id=\"team-single\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- End Profile Team -->\n\t\t\t</div>\n\n\t\t\t<!-- Skills -->\n\t\t\t<div class=\"skills parallax\">\n\t\t\t\t<div class=\"overlay\">\n\t\t\t\t\t<div class=\"wrapper-block-skills\">\n\t\t\t\t\t\t<!-- Block Title -->\n\t\t\t\t\t\t<div class=\"element-title\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t<h1 class=\"main-color wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">Beneficios\n\t\t\t\t\t\t\t\t\t\tentregados a agremiados</h1>\n\t\t\t\t\t\t\t\t\t<h3 class=\"white-color wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">Algunos de los\n\t\t\t\t\t\t\t\t\t\tbeneficios que han recibido nuestros agremiados.</h3>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- End Block Title -->\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t<div class=\"wrapper-count\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<!-- SKILL ONE -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"skill wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"knob\" value=\"86\">\n\t\t\t\t\t\t\t\t\t\t\t<h4>Angel Guardián</h4>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<!-- SKILL TWO -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"skill wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"500ms\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"knob\" value=\"93\">\n\t\t\t\t\t\t\t\t\t\t\t<h4>Despensas</h4>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<!-- SKILL THREE -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"skill wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"800ms\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"knob\" value=\"88\">\n\t\t\t\t\t\t\t\t\t\t\t<h4>Descuentos</h4>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<!-- SKILL Four -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"skill wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"1100ms\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"knob\" value=\"95\">\n\t\t\t\t\t\t\t\t\t\t\t<h4>Premios</h4>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- End Skills -->\n\n\t\t</section>\n\t\t<!-- End Team Section -->\n\n\n\t\t<!-- Works Section -->\n\t\t<section class=\"section-wrapper\" id=\"works\">\n\t\t\t<div class=\"works  abanicos\">\n\t\t\t\t<!-- Block Title -->\n\t\t\t\t<div class=\"element-title\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t<div class=\"section-title wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t<h1><span>NUESTROS BENEFICIOS</span></h1>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- <h1 class=\"wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">Nuestros beneficios</h1> -->\n\t\t\t\t\t\t\t<h3 class=\"wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">Estos son algunos de nuestros <span\n\t\t\t\t\t\t\t\t\tclass=\"main-color\">beneficios </span>para nuestros <span class=\"main-color\">agremiados</span></h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- End Block Title -->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t\t<div class=\"wrapper-works\">\n\t\t\t\t\t\t\t<div class=\"portfoliO\">\n\t\t\t\t\t\t\t\t<ul id=\"filters\" class=\"wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t\t<li><span class=\"filter active\" data-filter=\"all\">TODOS</span></li>\n\t\t\t\t\t\t\t\t\t<li><span class=\"filter\" data-filter=\".category-1\">Ángel Guardián</span></li>\n\t\t\t\t\t\t\t\t\t<li><span class=\"filter\" data-filter=\".category-2\">Descuentos</span></li>\n\t\t\t\t\t\t\t\t\t<li><span class=\"filter\" data-filter=\".category-3\">Prestaciones</span></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t<div class=\"portfolio-wrap\">\n\t\t\t\t\t\t\t\t\t<div class=\"myport wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"600ms\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"mix category-1 portfolio\" data-myorder=\"1\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-holder\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"folio-read-more\" href=\"#\" data-single_url=\"portfolio-single-image.html\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"This is the description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"\" src=\"assets/images/works/angelguardian.svg\" alt=\"Ángel Guardián\"> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-category\">ÁNGEL GUARDIÁN</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-text\">Sistema auxiliar discreto para seguridad del conductor.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <i class=\"works-overlay-icon\"><i class=\"fa fa-image\"></i></div>\t\t\t\t\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"mix category-2 portfolio\" data-cat=\"category-2\" data-myorder=\"2\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-holder\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"folio-read-more\" href=\"#\" data-single_url=\"portfolio-single-image.html\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Taller de Toyota\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"\" src=\"assets/images/works/toyota.jpg\" alt=\"Descuentos en la agencia\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-category\">TOYOTA</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-text\">Descuento del 25% a los agremiados a AMERT, A.C.</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"works-overlay-icon\"><i class=\"fa fa-video-camera\"></i></div>\t\t\t\t\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"mix category-3 portfolio\" data-cat=\"category-3\" data-myorder=\"3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-holder\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"folio-read-more\" href=\"#\" data-single_url=\"portfolio-single-image.html\" title=\"IMSS\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"\" src=\"assets/images/works/imss.png\" alt=\"IMSS\"> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-category\">IMSS</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-text\">Seguro para nuestros agremiados</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"works-overlay-icon\"><i class=\"fa fa-graduation-cap\"></i></div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"mix category-1 portfolio\" data-cat=\"category-1\" data-myorder=\"4\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-holder\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"folio-read-more\" href=\"#\" data-single_url=\"portfolio-slider.html\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Alguien cuidándote\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"\" src=\"assets/images/works/zapopanpolice.jpg\" alt=\"Policía ZMG\"> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-category\">ÁNGEL GUARDIÁN</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-text\">Contigo cuando más lo necesitas</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"works-overlay-icon\"><i class=\"fa fa-image\"></i></div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"mix category-2 portfolio\" data-cat=\"category-2\" data-myorder=\"5\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-holder\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"folio-read-more\" href=\"#\" data-single_url=\"san-javier.html\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"San Javier Recinto Funeral\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"\" src=\"assets/images/partners/logo-san-javier.png\" alt=\"San Javier Recinto Funeral\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-category\">San Javier - Recinto Funeral</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-text\">Precio exclusivo de $21,000 a $18,000. Haz click para ver\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmás información.</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"works-overlay-icon\"><i class=\"fa fa-video-camera\"></i></div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"mix category-3 portfolio\" data-cat=\"category-3\" data-myorder=\"6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-holder\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"folio-read-more\" href=\"#\" data-single_url=\"portfolio-slider.html\" title=\"INFONAVIT\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"\" src=\"assets/images/works/infonavit.jpg\" alt=\"Infonavite\"> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-category\">INFONAVIT</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-text\">INFONAVIT para agremiados</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"works-overlay-icon\"><i class=\"fa fa-graduation-cap\"></i></div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"mix category-1 portfolio\" data-cat=\"category-1\" data-myorder=\"7\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-holder\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"folio-read-more\" href=\"#\" data-single_url=\"portfolio-video-youtube.html\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"ÁNGEL GUARDIÁN\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"\" src=\"assets/images/works/satellite.jpg\" alt=\"Cuidándote desde el cielo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-category\">ÁNGEL GUARDIÁN</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-text\">Cuidándote desde el cielo</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"works-overlay-icon\"><i class=\"fa fa-image\"></i></div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"mix category-2 portfolio\" data-cat=\"category-2\" data-myorder=\"8\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-holder\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"folio-read-more\" href=\"#\" data-single_url=\"portfolio-video-youtube.html\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"LLANTERA\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"\" src=\"assets/images/works/llantas.jpg\" alt=\"Descuentos en llantas\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-category\">LLANTERA</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-text\">Descuentos en llantas</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"works-overlay-icon\"><i class=\"fa fa-video-camera\"></i></div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"mix category-3 portfolio\" data-cat=\"category-3\" data-myorder=\"9\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-holder\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"folio-read-more\" href=\"#\" data-single_url=\"portfolio-video-youtube.html\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"ASESORIA LEGAL\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"\" src=\"assets/images/works/legal.jpg\" alt=\"Asesoría Legal\"> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-category\">ASESORIA LEGAL</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-text\">Asistencia legal para nuestros agremiados</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"works-overlay-icon\"><i class=\"fa fa-graduation-cap\"></i></div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"mix category-1 portfolio\" data-cat=\"category-1\" data-myorder=\"10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-holder\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"folio-read-more\" href=\"#\" data-single_url=\"portfolio-video-vimeo.html\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"ÁNGEL GUARDIÁN\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"\" src=\"assets/images/works/zapopanpolice2.jpg\" alt=\"Cuidando de tí\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-category\">ÁNGEL GUARDIÁN</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-text\">Cuidando de ti.</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"works-overlay-icon\"><i class=\"fa fa-image\"></i></div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"mix category-2 portfolio\" data-cat=\"category-2\" data-myorder=\"11\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-holder\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"folio-read-more\" href=\"#\" data-single_url=\"portfolio-video-vimeo.html\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"RESTAURANTE\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"\" src=\"assets/images/works/restaurante.jpg\" alt=\"Descuentos en restaurantes\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-category\">RESTAURANTES</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-text\">Descuentos en restaurantes</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"works-overlay-icon\"><i class=\"fa fa-video-camera\"></i></div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"mix category-3 portfolio\" data-cat=\"category-3\" data-myorder=\"12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-holder\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"folio-read-more\" href=\"#\" data-single_url=\"portfolio-video-vimeo.html\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"EVENTOS\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"\" src=\"assets/images/works/posada.ashx\" alt=\"Eventos\"> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-category\">EVENTOS</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-text\">Eventos para fomentar la convivencia</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"works-overlay-icon\"><i class=\"fa fa-graduation-cap\"></i></div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"gap\"></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"gap\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Single Project -->\n\t\t\t\t<div id=\"works-single-wrap\">\n\t\t\t\t\t<div id=\"works-single\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- End Single Project -->\n\t\t\t</div>\n\n\t\t\t<!-- Partners -->\n\t\t\t<div class=\"partners parallax\">\n\t\t\t\t<div class=\"overlay\">\n\t\t\t\t\t<div class=\"wrapper-block-partners\">\n\t\t\t\t\t\t<!-- Block Title -->\n\t\t\t\t\t\t<div class=\"element-title\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t<h1 class=\"main-color wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">NUESTROS\n\t\t\t\t\t\t\t\t\t\tPATROCINADORES</h1>\n\t\t\t\t\t\t\t\t\t<h3 class=\"white-color wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">Gracias al apoyo de\n\t\t\t\t\t\t\t\t\t\testas empresas, seguimos creciendo.</h3>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- End Block Title -->\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t<div class=\"wrapper-partners\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 partners-img wow fadeInRight\" data-wow-duration=\"1s\"\n\t\t\t\t\t\t\t\t\t\tdata-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"http://optiexpress.com.mx/\" target=\"_blank\"><img src=\"assets/images/partners/logo-optiexpress.png\"\n\t\t\t\t\t\t\t\t\t\t\t\talt=\"OPTI Express\"></a>\n\t\t\t\t\t\t\t\t\t\t<!-- Change Image -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 partners-img wow fadeInRight\" data-wow-duration=\"1s\"\n\t\t\t\t\t\t\t\t\t\tdata-wow-delay=\"500ms\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"http://optiexpress.com.mx/\" target=\"_blank\"><img src=\"assets/images/partners/grupo-san-javier.png\"\n\t\t\t\t\t\t\t\t\t\t\t\talt=\"Grupo de servicios San Javier\"></a>\n\t\t\t\t\t\t\t\t\t\t<!-- Change Image -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 partners-img wow fadeInRight\" data-wow-duration=\"1s\"\n\t\t\t\t\t\t\t\t\t\tdata-wow-delay=\"700ms\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"assets/images/partners/partners3.png\" alt=\"\"></a> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 partners-img wow fadeInRight\" data-wow-duration=\"1s\"\n\t\t\t\t\t\t\t\t\t\tdata-wow-delay=\"900ms\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"assets/images/partners/partners4.png\" alt=\"\"></a> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t<div class=\"wrapper-partners\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 partners-img wow fadeInRight\" data-wow-duration=\"1s\"\n\t\t\t\t\t\t\t\t\t\tdata-wow-delay=\"1100ms\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"assets/images/partners/partners5.png\" alt=\"\"></a> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 partners-img wow fadeInRight\" data-wow-duration=\"1s\"\n\t\t\t\t\t\t\t\t\t\tdata-wow-delay=\"1300ms\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"assets/images/partners/partners6.png\" alt=\"\"></a> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 partners-img wow fadeInRight\" data-wow-duration=\"1s\"\n\t\t\t\t\t\t\t\t\t\tdata-wow-delay=\"1500ms\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"assets/images/partners/partners7.png\" alt=\"\"></a> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 partners-img wow fadeInRight\" data-wow-duration=\"1s\"\n\t\t\t\t\t\t\t\t\t\tdata-wow-delay=\"1700ms\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"assets/images/partners/partners8.png\" alt=\"\"></a> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- End Partners -->\n\n\t\t</section>\n\t\t<!-- End Works Section -->\n\n\t\t<!-- Price Section -->\n\t\t<section class=\"section-wrapper\" id=\"pricing\">\n\t\t\t<div class=\"pricing abanicos\">\n\t\t\t\t<!-- Block Title -->\n\t\t\t\t<div class=\"element-title\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t<div class=\"section-title wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t<h1><span>Aportaciones</span></h1>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- <h1 class=\"wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">Con la aportación económica de nuestros agremiados podemos invertir en mejorar nuestra oferta de beneficios.</h1> -->\n\t\t\t\t\t\t\t<h3 class=\"wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">Con la aportación económica de\n\t\t\t\t\t\t\t\t<span class=\"main-color\">nuestros agremiados</span> podemos invertir en mejorar nuestra oferta de <span\n\t\t\t\t\t\t\t\t\tclass=\"main-color\">beneficios</span>.</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- End Block Title -->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t<div class=\"wrapper-pricing\">\n\t\t\t\t\t\t\t<!-- Plan 1 -->\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t<!-- <div class=\"single-table wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t\t<h4>Agremiado</h4>\n\t\t\t\t\t\t\t\t\t<div class=\"price-icon\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/socioconductor.svg\" alt=\"Agremiado\" style=\"width: 65px;\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<span class=\"price\">$300/<small>mes.</small></span>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>Precio en Pesos Mexicanos</li>\n\t\t\t\t\t\t\t\t\t\t<li>Precio antes de I.V.A.</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<a class=\"btn-price\" href=\"#\">Regístrate</a>\n\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- Plan 2 -->\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t<div class=\"single-table wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t\t<h4>Agremiado</h4>\n\t\t\t\t\t\t\t\t\t<div class=\"price-icon\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/socioconductor.svg\" alt=\"Agremiado\" style=\"width: 65px;\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<span class=\"price\">$300/<small>mes.</small></span>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>Aportación por agremiado con un vehículo.</li>\n\t\t\t\t\t\t\t\t\t\t<li>Precio en Pesos Mexicanos.</li>\n\t\t\t\t\t\t\t\t\t\t<li>Precio antes de I.V.A.</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<!-- <a class=\"btn-price\" href=\"#\">Regístrate</a> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <div class=\"single-table wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"500ms\">\n\t\t\t\t\t\t\t\t\t<h4>Socio-Conductor</h4>\n\t\t\t\t\t\t\t\t\t<div class=\"price-icon\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/carro.svg\" alt=\"\" style=\"width: 65px;\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<span class=\"price\">$300/<small>mes</small></span>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>Beneficios</li>\n\t\t\t\t\t\t\t\t\t\t<li>Ángel Guardián</li>\n\t\t\t\t\t\t\t\t\t\t<li>Asesoría Legal</li>\n\t\t\t\t\t\t\t\t\t\t<li>Apoyo a los más necesitados</li>\n\t\t\t\t\t\t\t\t\t\t<li>Apoyo en caso de emergencia</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<a class=\"btn-price\" href=\"#\">Regístrate</a>\n\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- Plan 3 -->\n\t\t\t\t\t\t\t<!-- <div class=\"col-lg-3 col-md-3 wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"700ms\">\n\t\t\t\t\t\t<div class=\"single-table featured\"> -->\n\t\t\t\t\t\t\t<!-- <div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t<div class=\"single-table wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"500ms\">\n\t\t\t\t\t\t\t\t\t<h4>Socio</h4>\n\t\t\t\t\t\t\t\t\t<div class=\"price-icon\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/socioconductor.svg\" alt=\"\" style=\"width: 65px;\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<span class=\"price\">$150/<small>mes</small></span>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>&nbsp;</li>\n\t\t\t\t\t\t\t\t\t\t<li>Beneficios</li>\n\t\t\t\t\t\t\t\t\t\t<li>Asesoría Legal</li>\n\t\t\t\t\t\t\t\t\t\t<li>Apoyo a los más necesitados</li>\n\t\t\t\t\t\t\t\t\t\t<li>Apoyo en caso de emergencia</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<a class=\"btn-price\" href=\"#\">Regístrate</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t<!-- Plan 4 -->\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t<div class=\"single-table wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"900ms\">\n\t\t\t\t\t\t\t\t\t<h4>Vehículo extra</h4>\n\t\t\t\t\t\t\t\t\t<div class=\"price-icon\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/otrocarro.svg\" alt=\"\" style=\"width: 65px;\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<span class=\"price\">$150/<small>mes</small></span>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>Precio en Pesos Mexicanos.</li>\n\t\t\t\t\t\t\t\t\t\t<li>Precio antes de I.V.A.</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<!-- <a class=\"btn-price\" href=\"#\">Regístrate</a> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"clients parallax\">\n\t\t\t\t<!-- Block Title -->\n\t\t\t\t<div class=\"overlay\">\n\t\t\t\t\t<div class=\"wrapper-block-clients\">\n\t\t\t\t\t\t<div class=\"element-title\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t<h1 class=\"main-color wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">CONDUCTORES OPINAN\n\t\t\t\t\t\t\t\t\t</h1>\n\t\t\t\t\t\t\t\t\t<h3 class=\"white-color wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">Algunas\n\t\t\t\t\t\t\t\t\t\texperiencias en AMERT, A.C. de nuestros agremiados.</h3>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- End Block Title -->\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t<div class=\"wrapper-clients wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"500ms\">\n\t\t\t\t\t\t\t\t\t<!-- Start Testimonial Slider -->\n\t\t\t\t\t\t\t\t\t<div class=\"carousel slide carousel-mod\" data-ride=\"carousel\" id=\"testimonial\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"carousel-inner\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- Testimonial #1  -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"item active\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"testimonial-inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"img-circle\" src=\"assets/images/clients/person_1.jpg\" alt=\"\" title=\"\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Testimonial Image  -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-quote-left main-color\"></i> Gracias a AMERT, A.C., ahora ya no me\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsiento sola. <i class=\"fas fa-quote-right main-color\"></i></p><!-- Tesimonial  -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>-- Lupita Reyes, Socia-Conductora --</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- End Testimonial #1  -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- Testimonial #2  -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"testimonial-inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"img-circle\" src=\"assets/images/clients/person_2.jpg\" alt=\"\" title=\"\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-quote-left main-color\"></i> La aportación no la veo como un gasto, es\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tuna inversión en mi seguridad y el saber que hay personas que me apoyan en cualquier\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsituación. <i class=\"fas fa-quote-right main-color\"></i></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>-- Juan Pérez, Conductor --</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- End Testimonial #2  -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- Testimonial #3  -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"testimonial-inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"img-circle\" src=\"assets/images/clients/person_3.jpg\" alt=\"\" title=\"\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-quote-left main-color\"></i> Antes temía por mi seguridad, ahora,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsiento que me cuidan y apoyan mis compañeros, me siento parte de una comunidad amigable\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ty segura. <i class=\"fas fa-quote-right main-color\"></i></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>-- María Domínguez, Conductora --</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- End Testimonial #3  -->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<ol class=\"carousel-indicators\">\n\t\t\t\t\t\t\t\t\t\t\t<li data-target=\"#testimonial\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-target=\"#testimonial\" data-slide-to=\"1\"></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-target=\"#testimonial\" data-slide-to=\"2\"></li>\n\t\t\t\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</section>\n\t\t<!-- End Price Section -->\n\n\n\t\t<!-- News Section -->\n\t\t<section class=\"section-wrapper\" id=\"news\">\n\t\t\t<div class=\"news  abanicos\">\n\t\t\t\t<!-- Block Title -->\n\t\t\t\t<div class=\"element-title\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t<div class=\"section-title wow fadeInDown\">\n\t\t\t\t\t\t\t\t<h1><span>Noticias y Avisos</span></h1>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<h1 class=\"wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">Lo que está pasando en nuestro\n\t\t\t\t\t\t\t\tgremio.</h1>\n\t\t\t\t\t\t\t<h3 class=\"wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">Infórmate de las últimas <span\n\t\t\t\t\t\t\t\t\tclass=\"main-color\">Noticias </span>y <span class=\"main-color\">Eventos.</span></h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- End Block Title -->\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"wrapper-news\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-sm-6\">\n\t\t\t\t\t\t\t\t<div class=\"news-content wow fadeInLeft\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t\t<div class=\"entry-header\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"blog-image\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"blog.html\"><img alt=\"\" src=\"assets/images/blog/post1.jpg\" class=\"img-responsive\"></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"post-date\">\n\t\t\t\t\t\t\t\t\t\t\t<h2>21<span>Ago</span></h2>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"entry-content\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"entry-title\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"blog.html\">Adipisicing elit, sed do eiusmod tempor</a>\n\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"entry-meta\">\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-user\"></i> By: Admin</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <li><a href=\"#\"><i class=\"fa fa-tags\"></i> Projects <span>/</span></a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-comments\"></i> 3 Comments</a></li> -->\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n\t\t\t\t\t\t\t\t\t\t\tlabore et dolore magna aliqua. </p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-sm-6\">\n\t\t\t\t\t\t\t\t<div class=\"news-content wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t\t<div class=\"entry-header\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"blog-image\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"blog.html\"><img alt=\"\" src=\"assets/images/blog/post2.jpg\" class=\"img-responsive\"></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"post-date\">\n\t\t\t\t\t\t\t\t\t\t\t<h2>26<span>Sep</span></h2>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"entry-content\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"entry-title\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"blog.html\">Adipisicing elit, sed do eiusmod tempor</a>\n\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"entry-meta\">\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-user\"></i> By: Admin</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <li><a href=\"#\"><i class=\"fa fa-tags\"></i> Projects <span>/</span></a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-comments\"></i> 5 Comments</a></li> -->\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n\t\t\t\t\t\t\t\t\t\t\tlabore et dolore magna aliqua. </p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-sm-6\">\n\t\t\t\t\t\t\t\t<div class=\"news-content wow fadeInLeft\" data-wow-duration=\"1s\" data-wow-delay=\"600ms\">\n\t\t\t\t\t\t\t\t\t<div class=\"entry-header\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"blog-image\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"blog.html\"><img alt=\"\" src=\"assets/images/blog/post3.jpg\" class=\"img-responsive\"></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"post-date\">\n\t\t\t\t\t\t\t\t\t\t\t<h2>28<span>Oct</span></h2>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"entry-content\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"entry-title\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"blog.html\">Adipisicing elit, sed do eiusmod tempor</a>\n\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"entry-meta\">\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-user\"></i> By: Admin</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <li><a href=\"#\"><i class=\"fa fa-tags\"></i> Projects <span>/</span></a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-comments\"></i> 3 Comments</a></li> -->\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n\t\t\t\t\t\t\t\t\t\t\tlabore et dolore magna aliqua. </p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-sm-6\">\n\t\t\t\t\t\t\t\t<div class=\"news-content wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"600ms\">\n\t\t\t\t\t\t\t\t\t<div class=\"entry-header\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"blog-image\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"blog.html\"><img alt=\"\" src=\"assets/images/blog/post4.jpg\" class=\"img-responsive\"></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"post-date\">\n\t\t\t\t\t\t\t\t\t\t\t<h2>30<span>July</span></h2>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"entry-content\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"entry-title\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"blog.html\">Adipisicing elit, sed do eiusmod tempor</a>\n\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"entry-meta\">\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-user\"></i> By: Admin <span>/</span></a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-tags\"></i> Projects <span>/</span></a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-comments\"></i> 5 Comments</a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n\t\t\t\t\t\t\t\t\t\t\tlabore et dolore magna aliqua. </p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"stay-in parallax\">\n\t\t\t\t<!-- Block Title -->\n\t\t\t\t<div class=\"overlay\">\n\t\t\t\t\t<div class=\"wrapper-block-stay-in\">\n\t\t\t\t\t\t<div class=\"element-title\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t<h1 class=\"main-color wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">¿QUIERES RECIBIR\n\t\t\t\t\t\t\t\t\t\tNUESTRO BOLETÍN?</h1>\n\t\t\t\t\t\t\t\t\t<h3 class=\"white-color wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">Compártenos tu\n\t\t\t\t\t\t\t\t\t\tdirección de correo para recibirlo.</h3>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- End Block Title -->\n\t\t\t\t\t\t<div class=\"signup\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t<div class=\"sign_form wow fadeInLeft\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t\t\t<!-- SUBSCRIPTION FORM -->\n\t\t\t\t\t\t\t\t\t\t<form id=\"sign-form\" method=\"post\" action=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" name=\"email\" placeholder=\"Tu e-mail por favor...\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"submit\" value=\"Sign Up\">\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"signup-error\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<p>Prometemos no enviarte spam =)</p>\n\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t<!-- / END SUBSCRIPTION FORM -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t<div class=\"wrapper-tweet\">\n\t\t\t\t\t\t\t\t\t<!-- Twitter -->\n\t\t\t\t\t\t\t\t\t<div class=\"tweet wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"700ms\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-sm-offset-2\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"twitter-icon text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-info-circle\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t<h4>Andsolutions</h4>\n\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"twitter-carousel\" class=\"carousel slide\" data-ride=\"carousel\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ol class=\"carousel-indicators\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li data-target=\"#twitter-carousel\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li data-target=\"#twitter-carousel\" data-slide-to=\"1\"></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li data-target=\"#twitter-carousel\" data-slide-to=\"2\"></li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ol><!-- /.carousel-indicators -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"carousel-inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"item active\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><span class=\"main-color\">AMERT, A.C.</span> es un gremio humano para apoyar a nuestros\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\thermanos conductores de plataforma.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><span class=\"main-color\">Ángel Guardián</span> es un sistema auxiliar discreto para\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tseguridad del conductor.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Con <span class=\"main-color\">AMERT, A.C.</span> inviertes en tí, porque lo vales.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- End Twitter -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t<!-- </section> -->\n\t\t<!-- End News Section -->\n</div>\n</section>\n\n\t\t<!-- Contact Section -->\n\t\t<section class=\"section-wrapper\" id=\"contacts\">\n\t\t\t<!-- Contacts -->\n\t\t\t<div class=\"contacts abanicos\">\n\n\t\t\t\t<!-- Block Title -->\n\t\t\t\t<div class=\"element-title\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t<div class=\"section-title wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t<h1><span>Contáctanos</span></h1>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<h3 class=\"wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">Contacta a nuestro <span\n\t\t\t\t\t\t\t\t\tclass=\"main-color\">staff </span> para cualquier <span class=\"main-color\">duda, comentario o\n\t\t\t\t\t\t\t\t\tsugerencia</span> que tengas.</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- End Block Title -->\n\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"wrapper-contacts\">\n\t\t\t\t\t\t\t<div class=\"contact_form\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"wrapper-contacts-icons\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4 wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-map-marker\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">Calle y número</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">90210 Guadalajara, Jalisco.</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4 wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"450ms\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-mobile-phone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">Lun - Vie 08:00 21:00</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">234 523 45 56</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4 wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"600ms\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-envelope-o\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">Nuestro e-mail de contacto</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">contacto@amertac.com.mx</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"800ms\">\n\t\t\t\t\t\t\t\t\t<!-- Start contact-form -->\n\t\t\t\t\t\t\t\t\t<form id=\"contact-form\" method=\"post\" action=\"#\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6 col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Tu nombre\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Tu correo electrónico\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"subject\" class=\"form-control\" placeholder=\"Asunto\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6 col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea name=\"message\" class=\"form-control\" placeholder=\"Tu mensaje\" rows=\"8\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"output\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"submit\" class=\"\" value=\"Enviar\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t<!-- End contact-form -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- End Contacts -->\n    </section>\n    \n\n    <app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/progress/progress.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/progress/progress.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro/registro.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro/registro.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sufee-login d-flex align-content-center flex-wrap fondoscurop\">\n    <div class=\"container\">\n      <div class=\"login-content\">\n        <div class=\"login-logo\">\n          <a href=\"#\">\n            <img class=\"align-content logo\" src=\"assets/images/logoamert.svg\" alt=\"assets/images/logoamert.svg\">\n          </a>\n        </div>\n        <div class=\"container\">\n          <div class=\"row\">\n  \n            <div class=\"col-md-3\"></div>\n          <div class=\"login-form fondo col-md-6\">\n            <form (ngSubmit)=\"onSubmit( f )\" #f=\"ngForm\" class=\"fondo col-md-12\" style=\"padding: 5px;\">\n            <div class=\"form-group\">\n              <hr>\n            \n              <span *ngIf=\"f.submitted && f.controls['nombre'].errors\" class=\"text-danger animated fadeIn\">El nombre es\n                obligatorio</span>\n              <div class=\"form-group col-md-12\">\n                <input class=\"form-control azul\" type=\"text\" name=\"nombre\" [(ngModel)]=\"usuario.nombre\" minlength=\"2\" required\n                  placeholder=\"Nombre y apellidos\">\n    \n              </div>\n    \n    \n              <span *ngIf=\"f.submitted && f.controls['email'].errors\" class=\"text-danger animated fadeIn\">El correo es\n                obligatorio</span>\n            \n              <div class=\"form-group col-md-12\">\n                <input class=\"form-control azul\" type=\"email\" name=\"email\" [(ngModel)]=\"usuario.email\" required email\n                  placeholder=\"Correo\">\n            \n              </div>\n            \n            <span *ngIf=\"f.submitted && f.controls['telefono'].errors\" class=\"text-danger animated fadeIn\">El correo es\n              obligatorio</span>\n    \n            <div class=\"form-group col-md-6\">\n              <input class=\"form-control azul\" type=\"text\" name=\"telefono\" required telefono\n                placeholder=\"Telefono\">\n    \n            </div>\n            \n              <span *ngIf=\"f.submitted && f.controls['password'].errors\" class=\"text-danger animated fadeIn\">Al menos 6\n                letras</span>\n              <div class=\"form-group col-md-6\">\n                <input class=\"form-control azul\" type=\"password\" name=\"password\" [(ngModel)]=\"usuario.password\"\n                  minlength=\"6\" required\n                  placeholder=\"Contraseña\">\n            \n              </div>\n            \n              <div class=\"flex-sb-m w-full p-t-3 p-b-24\">\n                <div class=\"contact100-form-checkbox\">\n                  <input [(ngModel)]=\"recordarme\" class=\"input-checkbox100\" id=\"ckb1\" type=\"checkbox\" name=\"remember-me\">\n                  <label class=\"label-checkbox100\" for=\"ckb1\">\n                    Recordar mi usuario\n                  </label>\n                </div>\n            \n                <div>\n                  <a routerLink=\"/login\" class=\"txt1\">\n                    ¿Ya tienes cuenta? / Ingresar\n                  </a>\n                </div>\n              </div>\n            \n              <div class=\"container-login100-form-btn m-t-17\">\n                <button class=\"btn btn-primary btn-flat m-b-30 m-t-30\" type=\"submit\">\n                  Crear cuenta\n                </button>\n              </div>\n            </div>\n            </form>\n    \n          </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ae-masonry ae-masonry-md-2 ae-masonry-xl-4\">\n    \n    <a *ngFor=\"let producto of productoService.productosFiltrado\" \n        [routerLink]=\"['/item', producto.cod ]\" class=\"animated fadeIn rk-item ae-masonry__item\">\n      <img src=\"assets/productos/{{ producto.url }}.jpg\" alt=\"\">\n      <div [routerLink]=\"['/item', producto.cod ]\" class=\"item-meta\">\n        <h2>{{ producto.titulo }}</h2>\n        <p>{{ producto.categoria }}</p>\n      </div>\n    </a>\n      \n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/breadcrumbs/breadcrumbs.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/breadcrumbs/breadcrumbs.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\t<div class=\"bottom-footer\" style=\"padding-top: 0px; margin-bottom: 0px;\">\n\t  <div class=\"container\">\n\t    <div class=\"bottom-footer-center wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\" >\n\t      <ul class=\"bottom-social-icons\" style=\"margin-bottom: 0px;\">\n\t        <li><a target=\"_blank\" [href]=\"_servicio.info.facebook\" class=\"rk-social-btn \">\n\t            <svg style=\"width: 30px; height:30px;\">\n\t              <use xlink:href=\"assets/img/symbols.svg#icon-facebook\"></use>\n\t            </svg>\n\t\t\t  </a>\n\t\t\t</li>\n\t        <li><a target=\"_blank\" [href]=\"_servicio.info.twitter\" class=\"rk-social-btn \">\n\t            <svg style=\"width: 30px; height:30px;\">\n\t              <use xlink:href=\"assets/img/symbols.svg#icon-twitter\"></use>\n\t            </svg>\n\t\t\t  </a>\n\t\t\t</li>\n\t        <li><a target=\"_blank\" [href]=\"_servicio.info.instagram\" class=\"rk-social-btn btn-sm\">\n\t          <svg style=\"width: 30px; height:30px;\">\n\t            <use xlink:href=\"assets/img/symbols.svg#icon-pinterest\"></use>\n\t          </svg>\n\t\t\t  </a>\n\t\t\t</li>\n\t      </ul>\n\t    </div>\n\t    <div class=\"bottom-footer-left wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"450ms\">\n\t      <p><span>Todos los derechos reservados por &#169; </span> {{ anio }} <a href=\"{{ _servicio.info.pagda }}\"\n\t          class=\"rk-dark-color \">{{ _servicio.info.nombre_corto }}</a></p>\n\t      <p class=\"rk-footer__text rk-footer__copy \"> <span class=\"ae-u-bold\"> </span><span class=\"ae-u-bolder\">\n\t      {{ _servicio.info.lice }} </span> © {{ _servicio.info.titulo }}</p>\n\t    </div>\n\t  </div>\n\t</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n    <header>\n        <div id=\"navigation\">\n            <div class=\"navbar\">\n                <nav class=\"navbar-inverse navbar-static-top\" role=\"navigation\">\n                    <div class=\"container\">\n                        <div class=\"row\">\n                            <div class=\"navbar-header\">\n                                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\"\n                                    data-target=\".navbar-collapse\">\n                                    <span class=\"icon-bar\"></span>\n                                    <span class=\"icon-bar\"></span>\n                                    <span class=\"icon-bar\"></span>\n                                </button>\n                                <a class=\"navbar-brand\" href=\"#\"></a>\n                            </div>\n                            <div id=\"mynav\" class=\"navbar-collapse collapse\">\n                                <ul class=\"nav navbar-nav main-nav-list\">\n                                    <li><a href=\"#home\">Inicio</a></li>\n                                    <li><a href=\"#about\">Conócenos</a></li>\n                                    <li><a href=\"#team\">¿Quienes somos?</a></li>\n                                    <li><a href=\"#works\">Beneficios </a></li>\n                                    <li><a href=\"#pricing\">Aportación</a></li>\n                                    <li><a href=\"#news\">Avisos</a></li>\n                                    <li><a href=\"#contacts\">Contáctanos</a></li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n        </div>\n        <section id=\"home\">\n            <div class=\"slide-wrap\">\n                <div id=\"home-slider\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n                    <div class=\"carousel-inner\">\n                        <div class=\"item active\">\n                            <div class=\"caption\">\n                                <h1 class=\"animated fadeInLeftBig\" style=\"font-size: 2em;\">Bienvenido a<br>\n                                    <strong style=\"font-size: 2.4em;\"> AMERT, A.C.</strong>\n                                </h1>\n                                <p class=\"animated fadeInRightBig\">Asociación Mexicana de Empresarios de Redes y\n                                    Transportes.</p>\n                                <a data-scroll class=\"learn-more animated fadeInUpBig\" href=\"#about\">Arranca</a>\n                            </div>\n                        </div>\n                        <div class=\"item\">\n                            <div class=\"caption\">\n                                <h1 class=\"animated fadeInLeftBig\" style=\"font-size: 2em;\"><strong\n                                        style=\"font-size: 2.3em;\">Gremio<br>\n                                    </strong> de conductores y socios</h1>\n                                <p class=\"animated fadeInRightBig\">Unidos somos fuertes.</p>\n                                <a data-scroll class=\"learn-more animated fadeInUpBig\" href=\"#about\">Arranca</a>\n                            </div>\n                        </div>\n                        <div class=\"item\">\n                            <div class=\"caption\">\n                                <h1 class=\"animated fadeInLeftBig\" style=\"font-size: 2em;\">Estamos para<br><strong\n                                        style=\"font-size: 2.3em;\">servir</strong></h1>\n                                <p class=\"animated fadeInRightBig\">Siempre buscamos beneficiar a nuestros agremiados.\n                                </p>\n                                <a data-scroll class=\"learn-more animated fadeInUpBig\" href=\"#about\">Arranca</a>\n                            </div>\n                        </div>\n                    </div>\n                    <a class=\"left-control\" href=\"#home-slider\" data-slide=\"prev\"><i class=\"fa fa-angle-left\"></i></a>\n                    <a class=\"right-control\" href=\"#home-slider\" data-slide=\"next\"><i class=\"fa fa-angle-right\"></i></a>\n                </div>\n            </div>\n        </section>\n        <!-- End Slider -->\n\n    </header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/headerd/headerd.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/headerd/headerd.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/headerdashboard/headerdashboard.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/headerdashboard/headerdashboard.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>headerdashboard works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/nopagefound/nopagefound.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/nopagefound/nopagefound.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- ============================================================== -->\n<!-- Left Sidebar - style you can find in sidebar.scss  -->\n<!-- ============================================================== -->\n<aside class=\"left-sidebar fondo\">\n    <!-- Sidebar scroll-->\n    <div class=\"scroll-sidebar fondo\">\n        <!-- Sidebar navigation-->\n        <nav class=\"sidebar-nav fondo\">\n            <ul id=\"sidebarnav\" class=\"fondo\">\n                <li class=\"user-profile fondoscurop\">\n                    <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\"><img src=\"../../../assets/img/usuarios/default.png\" alt=\"user\" />\n                      <span class=\"hide-menu\">AGREMIADO </span>\n                    </a>\n                    <ul aria-expanded=\"false\" class=\"collapse\">\n                        <li><a href=\"javascript:void()\"> Salir</a></li>\n                    </ul>\n                </li>\n                 <li class=\"fondoscurop\"> <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\"><i class=\"mdi mdi-gauge\"></i><span class=\"hide-menu\">INFORMACION <span class=\"label label-rouded label-themecolor pull-right\">4</span></span></a>\n                    <ul aria-expanded=\"false\" class=\"collapse\">\n                        <li><a href=\"#\">Datos personales </a></li>\n                        <li><a href=\"#\">Datos de vehiculos</a></li>\n                        <li><a href=\"#\">Estado de la cuenta</a></li>\n                        <li><a href=\"#\">Pagos</a></li>\n                    </ul>\n                </li>\n                <li class=\"fondoscurop\"> <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\"><i class=\"mdi mdi-gauge\"></i><span class=\"hide-menu\"> <span class=\"label label-rouded label-themecolor pull-right\">4</span></span></a>\n                  <ul aria-expanded=\"false\" class=\"collapse\">\n                  </ul>\n              </li>\n              <li class=\"fondoscurop\"> <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\"><i class=\"mdi mdi-gauge\"></i><span class=\"hide-menu\"> <span class=\"label label-rouded label-themecolor pull-right\">4</span></span></a>\n                <ul aria-expanded=\"false\" class=\"collapse\">\n                </ul>\n            </li>\n            <li class=\"fondoscurop\"> <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\"><i class=\"mdi mdi-gauge\"></i><span class=\"hide-menu\"> <span class=\"label label-rouded label-themecolor pull-right\">4</span></span></a>\n                    <ul aria-expanded=\"false\" class=\"collapse\">\n                    </ul>\n                </li>\n            </ul>\n        </nav>\n        <!-- End Sidebar navigation -->\n    </div>\n    <!-- End Sidebar scroll-->\n</aside>\n<!-- ============================================================== -->\n<!-- End Left Sidebar - style you can find in sidebar.scss  -->\n<!-- ============================================================== -->\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, APP_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function() { return APP_ROUTES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/portafolio/portafolio.component */ "./src/app/pages/portafolio/portafolio.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_item_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/item/item.component */ "./src/app/pages/item/item.component.ts");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/search/search.component */ "./src/app/pages/search/search.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_registro_registro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/registro/registro.component */ "./src/app/pages/registro/registro.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/progress/progress.component */ "./src/app/pages/progress/progress.component.ts");
/* harmony import */ var _pages_graficas1_graficas1_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/graficas1/graficas1.component */ "./src/app/pages/graficas1/graficas1.component.ts");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _shared_nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/nopagefound/nopagefound.component */ "./src/app/shared/nopagefound/nopagefound.component.ts");















// tslint:disable-next-line:variable-name
const app_routes = [
    {
        path: '',
        component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_13__["PagesComponent"],
        children: [
            { path: 'dashboard', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
            { path: 'progress', component: _pages_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__["ProgressComponent"] },
            { path: 'graficas1', component: _pages_graficas1_graficas1_component__WEBPACK_IMPORTED_MODULE_12__["Graficas1Component"] },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },
    { path: 'home', component: _pages_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_3__["PortafolioComponent"] },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'registro', component: _pages_registro_registro_component__WEBPACK_IMPORTED_MODULE_8__["RegistroComponent"] },
    { path: 'item/:id', component: _pages_item_item_component__WEBPACK_IMPORTED_MODULE_5__["ItemComponent"] },
    { path: 'search/:termino', component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"] },
    // { path: '**', redirectTo: 'home', pathMatch: 'full' }
    { path: '**', component: _shared_nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_14__["NopagefoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(app_routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], AppRoutingModule);

const APP_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(app_routes, { useHash: true });


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_info_pagina_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/info-pagina.service */ "./src/app/services/info-pagina.service.ts");
/* harmony import */ var _services_productos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/productos.service */ "./src/app/services/productos.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");





let AppComponent = class AppComponent {
    constructor(infoPaginaService, productosService, db) {
        this.infoPaginaService = infoPaginaService;
        this.productosService = productosService;
        this.db = db;
        const things = db.collection('usuarios').valueChanges();
        things.subscribe(console.log);
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_info_pagina_service__WEBPACK_IMPORTED_MODULE_2__["InfoPaginaService"] },
    { type: _services_productos_service__WEBPACK_IMPORTED_MODULE_3__["ProductosService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_progress_progress_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/progress/progress.component */ "./src/app/pages/progress/progress.component.ts");
/* harmony import */ var _pages_graficas1_graficas1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/graficas1/graficas1.component */ "./src/app/pages/graficas1/graficas1.component.ts");
/* harmony import */ var _shared_headerdashboard_headerdashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/headerdashboard/headerdashboard.component */ "./src/app/shared/headerdashboard/headerdashboard.component.ts");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/breadcrumbs/breadcrumbs.component */ "./src/app/shared/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/keys.pipe */ "./src/app/pipes/keys.pipe.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_headerd_headerd_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/headerd/headerd.component */ "./src/app/shared/headerd/headerd.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _pages_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/portafolio/portafolio.component */ "./src/app/pages/portafolio/portafolio.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_item_item_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/item/item.component */ "./src/app/pages/item/item.component.ts");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/search/search.component */ "./src/app/pages/search/search.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_registro_registro_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/registro/registro.component */ "./src/app/pages/registro/registro.component.ts");
/* harmony import */ var _shared_nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/nopagefound/nopagefound.component */ "./src/app/shared/nopagefound/nopagefound.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");












// Rutas




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
            _shared_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
            _shared_headerd_headerd_component__WEBPACK_IMPORTED_MODULE_16__["HeaderdComponent"],
            _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
            _pages_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_18__["PortafolioComponent"],
            _pages_about_about_component__WEBPACK_IMPORTED_MODULE_19__["AboutComponent"],
            _pages_item_item_component__WEBPACK_IMPORTED_MODULE_20__["ItemComponent"],
            _pages_search_search_component__WEBPACK_IMPORTED_MODULE_21__["SearchComponent"],
            _pages_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
            _pages_registro_registro_component__WEBPACK_IMPORTED_MODULE_23__["RegistroComponent"],
            _pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_13__["KeysPipe"],
            _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
            _pages_progress_progress_component__WEBPACK_IMPORTED_MODULE_6__["ProgressComponent"],
            _pages_graficas1_graficas1_component__WEBPACK_IMPORTED_MODULE_7__["Graficas1Component"],
            _shared_headerdashboard_headerdashboard_component__WEBPACK_IMPORTED_MODULE_8__["HeaderdashboardComponent"],
            _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
            _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbsComponent"],
            _pages_pages_component__WEBPACK_IMPORTED_MODULE_11__["PagesComponent"],
            _shared_nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_24__["NopagefoundComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_25__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_30__["environment"].firebaseConfig),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_29__["AngularFireDatabaseModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_26__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_28__["AngularFireAuthModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_27__["AngularFireStorageModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_31__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_30__["environment"].production })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (this.auth.estaAutenticado()) {
            return true;
        }
        else {
            this.router.navigateByUrl('/home');
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/models/usuario.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/usuario.model.ts ***!
  \*****************************************/
/*! exports provided: UsuarioModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioModel", function() { return UsuarioModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UsuarioModel {
}


/***/ }),

/***/ "./src/app/pages/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/about/about.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_info_pagina_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/info-pagina.service */ "./src/app/services/info-pagina.service.ts");



let AboutComponent = class AboutComponent {
    constructor(infoService) {
        this.infoService = infoService;
    }
    ngOnInit() {
    }
};
AboutComponent.ctorParameters = () => [
    { type: _services_info_pagina_service__WEBPACK_IMPORTED_MODULE_2__["InfoPaginaService"] }
];
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/pages/about/about.component.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html")).default
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/pages/graficas1/graficas1.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/graficas1/graficas1.component.ts ***!
  \********************************************************/
/*! exports provided: Graficas1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Graficas1Component", function() { return Graficas1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Graficas1Component = class Graficas1Component {
    constructor() {
        this.graficos = {
            'grafico1': {
                'labels': ['Con Frijoles', 'Con Natilla', 'Con tocino'],
                'data': [24, 30, 46],
                'type': 'doughnut',
                'leyenda': 'El pan se come con'
            },
            'grafico2': {
                'labels': ['Hombres', 'Mujeres'],
                'data': [4500, 6000],
                'type': 'doughnut',
                'leyenda': 'Entrevistados'
            },
            'grafico3': {
                'labels': ['Si', 'No'],
                'data': [95, 5],
                'type': 'doughnut',
                'leyenda': '¿Le dan gases los frijoles?'
            },
            'grafico4': {
                'labels': ['No', 'Si'],
                'data': [85, 15],
                'type': 'doughnut',
                'leyenda': '¿Le importa que le den gases?'
            },
        };
    }
    ngOnInit() {
    }
};
Graficas1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-graficas1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./graficas1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/graficas1/graficas1.component.html")).default
    })
], Graficas1Component);



/***/ }),

/***/ "./src/app/pages/item/item.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/item/item.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0vaXRlbS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/item/item.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/item/item.component.ts ***!
  \**********************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_productos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/productos.service */ "./src/app/services/productos.service.ts");




let ItemComponent = class ItemComponent {
    constructor(route, productoService) {
        this.route = route;
        this.productoService = productoService;
    }
    ngOnInit() {
        this.route.params
            .subscribe(parametros => {
            // console.log(parametros['id']);
            this.productoService.getProducto(parametros['id'])
                .subscribe((producto) => {
                this.id = parametros['id'];
                this.producto = producto;
            });
        });
    }
};
ItemComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_productos_service__WEBPACK_IMPORTED_MODULE_3__["ProductosService"] }
];
ItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item/item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./item.component.css */ "./src/app/pages/item/item.component.css")).default]
    })
], ItemComponent);



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-group .azul:focus {\n    box-shadow: 0 0 20px rgb(82, 189, 238) !important;\n  }\n  .fondoscurop {\n    padding: 4%;\n    position: relative;\n    min-height: 800px;\n    background: #272c33;\n    background-image: url(\"data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23353b44' fill-opacity='0.18' fill-rule='evenodd'/%3E%3C/svg%3E\");\n  }\n  .logo {\n    zoom: 0.7;\n  }\n  .fondo {\n    background-color: #eaeaea;\n    background-image: url(\"/assets/images/fdoBco.svg\");\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlEQUFpRDtFQUNuRDtFQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGlvQkFBaW9CO0VBQ25vQjtFQUVBO0lBQ0UsU0FBUztFQUNYO0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsa0RBQWtEO0VBQ3BEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwIC5henVsOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2IoODIsIDE4OSwgMjM4KSAhaW1wb3J0YW50O1xuICB9XG4gIC5mb25kb3NjdXJvcCB7XG4gICAgcGFkZGluZzogNCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xuICAgIGJhY2tncm91bmQ6ICMyNzJjMzM7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nODQnIGhlaWdodD0nNDgnIHZpZXdCb3g9JzAgMCA4NCA0OCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTAgMGgxMnY2SDBWMHptMjggOGgxMnY2SDI4Vjh6bTE0LThoMTJ2Nkg0MlYwem0xNCAwaDEydjZINTZWMHptMCA4aDEydjZINTZWOHpNNDIgOGgxMnY2SDQyVjh6bTAgMTZoMTJ2Nkg0MnYtNnptMTQtOGgxMnY2SDU2di02em0xNCAwaDEydjZINzB2LTZ6bTAtMTZoMTJ2Nkg3MFYwek0yOCAzMmgxMnY2SDI4di02ek0xNCAxNmgxMnY2SDE0di02ek0wIDI0aDEydjZIMHYtNnptMCA4aDEydjZIMHYtNnptMTQgMGgxMnY2SDE0di02em0xNCA4aDEydjZIMjh2LTZ6bS0xNCAwaDEydjZIMTR2LTZ6bTI4IDBoMTJ2Nkg0MnYtNnptMTQtOGgxMnY2SDU2di02em0wLThoMTJ2Nkg1NnYtNnptMTQgOGgxMnY2SDcwdi02em0wIDhoMTJ2Nkg3MHYtNnpNMTQgMjRoMTJ2NkgxNHYtNnptMTQtOGgxMnY2SDI4di02ek0xNCA4aDEydjZIMTRWOHpNMCA4aDEydjZIMFY4eicgZmlsbD0nJTIzMzUzYjQ0JyBmaWxsLW9wYWNpdHk9JzAuMTgnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgfVxuICBcbiAgLmxvZ28ge1xuICAgIHpvb206IDAuNztcbiAgfVxuICBcbiAgLmZvbmRvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2Zkb0Jjby5zdmdcIik7XG4gIH1cbiAgIl19 */");

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_usuario_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/usuario.model */ "./src/app/models/usuario.model.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let LoginComponent = class LoginComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.usuario = new _models_usuario_model__WEBPACK_IMPORTED_MODULE_3__["UsuarioModel"]();
        this.recordarme = false;
    }
    ngOnInit() {
        if (localStorage.getItem('email')) {
            this.usuario.email = localStorage.getItem('email');
            this.recordarme = true;
        }
    }
    login(form) {
        if (form.invalid) {
            return;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            allowOutsideClick: false,
            type: 'info',
            text: 'Espere por favor...'
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.showLoading();
        this.auth.login(this.usuario)
            .subscribe(resp => {
            console.log(resp);
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.close();
            if (this.recordarme) {
                localStorage.setItem('email', this.usuario.email);
            }
            this.router.navigateByUrl('/dashboard');
        }, (err) => {
            console.log(err.error.error.message);
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Error al autenticar',
                text: err.error.error.message
            });
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/pages/pages.component.css":
/*!*******************************************!*\
  !*** ./src/app/pages/pages.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fondoscurop {\n  background: #272c33;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23353b44' fill-opacity='0.18' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixpb0JBQWlvQjtBQUNub0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbmRvc2N1cm9wIHtcbiAgYmFja2dyb3VuZDogIzI3MmMzMztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nODQnIGhlaWdodD0nNDgnIHZpZXdCb3g9JzAgMCA4NCA0OCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTAgMGgxMnY2SDBWMHptMjggOGgxMnY2SDI4Vjh6bTE0LThoMTJ2Nkg0MlYwem0xNCAwaDEydjZINTZWMHptMCA4aDEydjZINTZWOHpNNDIgOGgxMnY2SDQyVjh6bTAgMTZoMTJ2Nkg0MnYtNnptMTQtOGgxMnY2SDU2di02em0xNCAwaDEydjZINzB2LTZ6bTAtMTZoMTJ2Nkg3MFYwek0yOCAzMmgxMnY2SDI4di02ek0xNCAxNmgxMnY2SDE0di02ek0wIDI0aDEydjZIMHYtNnptMCA4aDEydjZIMHYtNnptMTQgMGgxMnY2SDE0di02em0xNCA4aDEydjZIMjh2LTZ6bS0xNCAwaDEydjZIMTR2LTZ6bTI4IDBoMTJ2Nkg0MnYtNnptMTQtOGgxMnY2SDU2di02em0wLThoMTJ2Nkg1NnYtNnptMTQgOGgxMnY2SDcwdi02em0wIDhoMTJ2Nkg3MHYtNnpNMTQgMjRoMTJ2NkgxNHYtNnptMTQtOGgxMnY2SDI4di02ek0xNCA4aDEydjZIMTRWOHpNMCA4aDEydjZIMFY4eicgZmlsbD0nJTIzMzUzYjQ0JyBmaWxsLW9wYWNpdHk9JzAuMTgnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVwiKTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PagesComponent = class PagesComponent {
    constructor() { }
    ngOnInit() {
    }
};
PagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pages',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pages.component.css */ "./src/app/pages/pages.component.css")).default]
    })
], PagesComponent);



/***/ }),

/***/ "./src/app/pages/portafolio/portafolio.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/portafolio/portafolio.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BvcnRhZm9saW8vcG9ydGFmb2xpby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/portafolio/portafolio.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/portafolio/portafolio.component.ts ***!
  \**********************************************************/
/*! exports provided: PortafolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortafolioComponent", function() { return PortafolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/productos.service */ "./src/app/services/productos.service.ts");



let PortafolioComponent = class PortafolioComponent {
    constructor(productosService) {
        this.productosService = productosService;
    }
    ngOnInit() {
    }
};
PortafolioComponent.ctorParameters = () => [
    { type: _services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"] }
];
PortafolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-portafolio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./portafolio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/portafolio/portafolio.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./portafolio.component.css */ "./src/app/pages/portafolio/portafolio.component.css")).default]
    })
], PortafolioComponent);



/***/ }),

/***/ "./src/app/pages/progress/progress.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/progress/progress.component.ts ***!
  \******************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProgressComponent = class ProgressComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProgressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-progress',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./progress.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/progress/progress.component.html")).default
    })
], ProgressComponent);



/***/ }),

/***/ "./src/app/pages/registro/registro.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/registro/registro.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-group .azul:focus {\n  box-shadow: 0 0 20px rgb(82, 189, 238) !important;\n}\n.fondoscurop {\n  padding: 4%;\n  position: relative;\n   min-height: 800px;\n  background: #272c33;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23353b44' fill-opacity='0.18' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n.logo {\n  zoom: 0.7;\n}\n.fondo {\n  background-color: #eaeaea;\n  background-image: url(\"/assets/images/fdoBco.svg\");\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0cm8vcmVnaXN0cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlEQUFpRDtBQUNuRDtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtHQUNqQixpQkFBaUI7RUFDbEIsbUJBQW1CO0VBQ25CLGlvQkFBaW9CO0FBQ25vQjtBQUVBO0VBQ0UsU0FBUztBQUNYO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0RBQWtEO0FBQ3BEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0cm8vcmVnaXN0cm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwIC5henVsOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiKDgyLCAxODksIDIzOCkgIWltcG9ydGFudDtcbn1cbi5mb25kb3NjdXJvcCB7XG4gIHBhZGRpbmc6IDQlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICBtaW4taGVpZ2h0OiA4MDBweDtcbiAgYmFja2dyb3VuZDogIzI3MmMzMztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nODQnIGhlaWdodD0nNDgnIHZpZXdCb3g9JzAgMCA4NCA0OCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTAgMGgxMnY2SDBWMHptMjggOGgxMnY2SDI4Vjh6bTE0LThoMTJ2Nkg0MlYwem0xNCAwaDEydjZINTZWMHptMCA4aDEydjZINTZWOHpNNDIgOGgxMnY2SDQyVjh6bTAgMTZoMTJ2Nkg0MnYtNnptMTQtOGgxMnY2SDU2di02em0xNCAwaDEydjZINzB2LTZ6bTAtMTZoMTJ2Nkg3MFYwek0yOCAzMmgxMnY2SDI4di02ek0xNCAxNmgxMnY2SDE0di02ek0wIDI0aDEydjZIMHYtNnptMCA4aDEydjZIMHYtNnptMTQgMGgxMnY2SDE0di02em0xNCA4aDEydjZIMjh2LTZ6bS0xNCAwaDEydjZIMTR2LTZ6bTI4IDBoMTJ2Nkg0MnYtNnptMTQtOGgxMnY2SDU2di02em0wLThoMTJ2Nkg1NnYtNnptMTQgOGgxMnY2SDcwdi02em0wIDhoMTJ2Nkg3MHYtNnpNMTQgMjRoMTJ2NkgxNHYtNnptMTQtOGgxMnY2SDI4di02ek0xNCA4aDEydjZIMTRWOHpNMCA4aDEydjZIMFY4eicgZmlsbD0nJTIzMzUzYjQ0JyBmaWxsLW9wYWNpdHk9JzAuMTgnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVwiKTtcbn1cblxuLmxvZ28ge1xuICB6b29tOiAwLjc7XG59XG5cbi5mb25kbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2Zkb0Jjby5zdmdcIik7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/registro/registro.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/registro/registro.component.ts ***!
  \******************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_usuario_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/usuario.model */ "./src/app/models/usuario.model.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let RegistroComponent = class RegistroComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.recordarme = false;
    }
    ngOnInit() {
        this.usuario = new _models_usuario_model__WEBPACK_IMPORTED_MODULE_3__["UsuarioModel"]();
    }
    onSubmit(form) {
        if (form.invalid) {
            return;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            allowOutsideClick: false,
            type: 'info',
            text: 'Espere por favor...'
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.showLoading();
        this.auth.nuevoUsuario(this.usuario)
            .subscribe(resp => {
            console.log(resp);
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.close();
            if (this.recordarme) {
                localStorage.setItem('email', this.usuario.email);
            }
            this.router.navigateByUrl('/dashboard');
        }, (err) => {
            console.log(err.error.error.message);
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Error al autenticar',
                text: err.error.error.message
            });
        });
    }
};
RegistroComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RegistroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registro',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registro.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro/registro.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registro.component.css */ "./src/app/pages/registro/registro.component.css")).default]
    })
], RegistroComponent);



/***/ }),

/***/ "./src/app/pages/search/search.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/search/search.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/search/search.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_productos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/productos.service */ "./src/app/services/productos.service.ts");




let SearchComponent = class SearchComponent {
    constructor(route, productoService) {
        this.route = route;
        this.productoService = productoService;
    }
    ngOnInit() {
        this.route.params
            .subscribe(params => {
            console.log(params['termino']);
            this.productoService.buscarProducto(params['termino']);
        });
    }
};
SearchComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_productos_service__WEBPACK_IMPORTED_MODULE_3__["ProductosService"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.css */ "./src/app/pages/search/search.component.css")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/pipes/keys.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/keys.pipe.ts ***!
  \************************************/
/*! exports provided: KeysPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function() { return KeysPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let KeysPipe = class KeysPipe {
    transform(value) {
        const keys = [];
        // tslint:disable-next-line:forin
        for (const key in value) {
            keys.push(key);
        }
        return keys;
    }
};
KeysPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'keys',
        pure: false
    })
], KeysPipe);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let AuthService = class AuthService {
    // Crear nuevo usuario
    // https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]
    // Login
    // https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]
    constructor(http) {
        this.http = http;
        this.url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
        this.apikey = 'AIzaSyDpR_yxp-P71vhs3K5MaMlGmZQhTcBhCHc';
        this.leerToken();
    }
    logout() {
        localStorage.removeItem('token');
    }
    login(usuario) {
        const authData = Object.assign({}, usuario, { returnSecureToken: true });
        return this.http.post(`${this.url}/verifyPassword?key=${this.apikey}`, authData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => {
            this.guardarToken(resp['idToken']);
            return resp;
        }));
    }
    nuevoUsuario(usuario) {
        const authData = Object.assign({}, usuario, { returnSecureToken: true });
        return this.http.post(`${this.url}/signupNewUser?key=${this.apikey}`, authData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => {
            this.guardarToken(resp['idToken']);
            return resp;
        }));
    }
    guardarToken(idToken) {
        this.userToken = idToken;
        localStorage.setItem('token', idToken);
        let hoy = new Date();
        hoy.setSeconds(3600);
        localStorage.setItem('expira', hoy.getTime().toString());
    }
    leerToken() {
        if (localStorage.getItem('token')) {
            this.userToken = localStorage.getItem('token');
        }
        else {
            this.userToken = '';
        }
        return this.userToken;
    }
    estaAutenticado() {
        if (this.userToken.length < 2) {
            return false;
        }
        const expira = Number(localStorage.getItem('expira'));
        const expiraDate = new Date();
        expiraDate.setTime(expira);
        if (expiraDate > new Date()) {
            return true;
        }
        else {
            return false;
        }
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/info-pagina.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/info-pagina.service.ts ***!
  \*************************************************/
/*! exports provided: InfoPaginaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPaginaService", function() { return InfoPaginaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let InfoPaginaService = class InfoPaginaService {
    constructor(http) {
        this.http = http;
        this.info = {};
        this.cargada = false;
        this.equipo = [];
        this.cargarInfo();
        this.cargarEquipo();
    }
    cargarInfo() {
        // Leer el archivo JSON
        this.http.get('assets/data/data-pagina.json')
            .subscribe((resp) => {
            this.cargada = true;
            this.info = resp;
        });
    }
    cargarEquipo() {
        // Leer el archivo JSON
        this.http.get('https://angular-html-25cf9.firebaseio.com/equipo.json')
            .subscribe((resp) => {
            this.equipo = resp;
            // console.log(resp);
        });
        // this.equipo = resp
    }
};
InfoPaginaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
InfoPaginaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InfoPaginaService);



/***/ }),

/***/ "./src/app/services/productos.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/productos.service.ts ***!
  \***********************************************/
/*! exports provided: ProductosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosService", function() { return ProductosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ProductosService = class ProductosService {
    constructor(http) {
        this.http = http;
        this.cargando = true;
        this.productos = [];
        this.productosFiltrado = [];
        this.cargarProductos();
    }
    cargarProductos() {
        return new Promise((resolve, reject) => {
            this.http.get('https://ovgsoft.com/api/escritorio.php')
                .subscribe((resp) => {
                this.productos = resp;
                this.cargando = false;
                resolve();
            });
        });
    }
    getProducto(id) {
        return this.http.get(`https://ovgsoft.com/api/escritorio/${id}.json`);
    }
    buscarProducto(termino) {
        if (this.productos.length === 0) {
            // cargar productos
            this.cargarProductos().then(() => {
                // ejecutar después de tener los productos
                // Aplicar filtro
                this.filtrarProductos(termino);
            });
        }
        else {
            // aplicar el filtro
            this.filtrarProductos(termino);
        }
    }
    filtrarProductos(termino) {
        // console.log(this.productos);
        this.productosFiltrado = [];
        termino = termino.toLocaleLowerCase();
        this.productos.forEach(prod => {
            const tituloLower = prod.titulo.toLocaleLowerCase();
            if (prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
                this.productosFiltrado.push(prod);
            }
        });
    }
};
ProductosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductosService);



/***/ }),

/***/ "./src/app/shared/breadcrumbs/breadcrumbs.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/breadcrumbs/breadcrumbs.component.ts ***!
  \*************************************************************/
/*! exports provided: BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BreadcrumbsComponent = class BreadcrumbsComponent {
    constructor() { }
    ngOnInit() {
    }
};
BreadcrumbsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-breadcrumbs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./breadcrumbs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/breadcrumbs/breadcrumbs.component.html")).default
    })
], BreadcrumbsComponent);



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_info_pagina_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/info-pagina.service */ "./src/app/services/info-pagina.service.ts");



let FooterComponent = class FooterComponent {
    constructor(_servicio) {
        this._servicio = _servicio;
        this.anio = new Date().getFullYear();
    }
    ngOnInit() {
    }
};
FooterComponent.ctorParameters = () => [
    { type: _services_info_pagina_service__WEBPACK_IMPORTED_MODULE_2__["InfoPaginaService"] }
];
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_info_pagina_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/info-pagina.service */ "./src/app/services/info-pagina.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HeaderComponent = class HeaderComponent {
    constructor(_servicio, router) {
        this._servicio = _servicio;
        this.router = router;
    }
    ngOnInit() {
    }
    buscarProducto(termino) {
        if (termino.length < 1) {
            return;
        }
        this.router.navigate(['/search', termino]);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_info_pagina_service__WEBPACK_IMPORTED_MODULE_2__["InfoPaginaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/headerd/headerd.component.css":
/*!******************************************************!*\
  !*** ./src/app/shared/headerd/headerd.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXJkL2hlYWRlcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/headerd/headerd.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/headerd/headerd.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderdComponent", function() { return HeaderdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderdComponent = class HeaderdComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-headerd',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./headerd.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/headerd/headerd.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./headerd.component.css */ "./src/app/shared/headerd/headerd.component.css")).default]
    })
], HeaderdComponent);



/***/ }),

/***/ "./src/app/shared/headerdashboard/headerdashboard.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/shared/headerdashboard/headerdashboard.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXJkYXNoYm9hcmQvaGVhZGVyZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/headerdashboard/headerdashboard.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/headerdashboard/headerdashboard.component.ts ***!
  \*********************************************************************/
/*! exports provided: HeaderdashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderdashboardComponent", function() { return HeaderdashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderdashboardComponent = class HeaderdashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderdashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-headerdashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./headerdashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/headerdashboard/headerdashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./headerdashboard.component.css */ "./src/app/shared/headerdashboard/headerdashboard.component.css")).default]
    })
], HeaderdashboardComponent);



/***/ }),

/***/ "./src/app/shared/nopagefound/nopagefound.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/nopagefound/nopagefound.component.ts ***!
  \*************************************************************/
/*! exports provided: NopagefoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NopagefoundComponent", function() { return NopagefoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NopagefoundComponent = class NopagefoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NopagefoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nopagefound',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nopagefound.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/nopagefound/nopagefound.component.html")).default
    })
], NopagefoundComponent);



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarComponent = class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html")).default
    })
], SidebarComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: true,
    firebaseConfig: {
        apiKey: 'AIzaSyDpR_yxp-P71vhs3K5MaMlGmZQhTcBhCHc',
        authDomain: 'chofix-450a5.firebaseapp.com',
        databaseURL: 'https://chofix-450a5.firebaseio.com',
        projectId: 'chofix-450a5',
        storageBucket: 'chofix-450a5.appspot.com',
        messagingSenderId: '29140314831',
        appId: '1:29140314831:web:32050d5c11c955b4f425ba'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Chofi\OneDrive\Escritorio\Amert\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map