angular.module('eehNavigation').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('template/eeh-navigation/menu-item-content/eeh-navigation-menu-item-content.html',
    "<span class=\"menu-item-icon icon-fw {{ iconBaseClass() }} {{ menuItem.iconClass}}\"></span>\r" +
    "\n" +
    "<span class=\"menu-item-text\"> {{ menuItem.text|translate }}</span>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('template/eeh-navigation/menu/eeh-navigation-menu.html',
    "<nav ng-class=\"navClass\">\r" +
    "\n" +
    "    <ul>\r" +
    "\n" +
    "        <li ng-repeat=\"item in menuItems | orderBy:'weight'\"\r" +
    "\n" +
    "            ng-include=\"'template/eeh-navigation/list-menu-item.html'\"\r" +
    "\n" +
    "            ng-class=\"{ 'leaf': !item.hasChildren() }\"\r" +
    "\n" +
    "            ng-if=\"item._isVisible()\"\r" +
    "\n" +
    "            eeh-navigation-active-menu-item=\"item\"></li>\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "</nav>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"template/eeh-navigation/list-menu-item.html\">\r" +
    "\n" +
    "    <a ng-if=\"item.state\" ui-sref=\"{{item.state}}\">\r" +
    "\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "    <a ng-if=\"item.click\" ng-click=\"item.click()\">\r" +
    "\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "    <a ng-if=\"item.href\" ng-href=\"{{item.href}}\" target=\"{{item.target ? item.target : '_self'}}\">\r" +
    "\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "    <a ng-if=\"!item.state && item.hasChildren()\">\r" +
    "\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\r" +
    "\n" +
    "        <span class=\"icon-fw {{ iconBaseClass() }}\"></span>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "    <ul ng-if=\"!item.state && item.hasChildren()\">\r" +
    "\n" +
    "        <li ng-repeat=\"item in item.children()\"\r" +
    "\n" +
    "            ng-include=\"'template/eeh-navigation/list-menu-item.html'\"\r" +
    "\n" +
    "            ng-if=\"item._isVisible()\"\r" +
    "\n" +
    "            eeh-navigation-active-menu-item=\"item\"></li>\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "</script>\r" +
    "\n"
  );


  $templateCache.put('template/eeh-navigation/navbar/eeh-navigation-navbar-brand.html',
    "<a ng-if=\"state && !href && text\"\r" +
    "\n" +
    "   class=\"navbar-brand\"\r" +
    "\n" +
    "   ng-click=\"click()\"\r" +
    "\n" +
    "   ui-sref=\"{{ state }}\">\r" +
    "\n" +
    "    <span ng-include=\"'template/eeh-navigation/navbar-brand-content.html'\"></span>\r" +
    "\n" +
    "</a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<a ng-if=\"!state && href && text\"\r" +
    "\n" +
    "   class=\"navbar-brand\"\r" +
    "\n" +
    "   ng-click=\"click()\"\r" +
    "\n" +
    "   ng-href=\"{{ href }}\"\r" +
    "\n" +
    "   target=\"{{ target ? target : '_self'}}\">\r" +
    "\n" +
    "    <span ng-include=\"'template/eeh-navigation/navbar-brand-content.html'\"></span>\r" +
    "\n" +
    "</a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<span ng-if=\"!state && !href && text\"\r" +
    "\n" +
    "      ng-click=\"click()\"\r" +
    "\n" +
    "      class=\"navbar-brand\">\r" +
    "\n" +
    "    <span ng-include=\"'template/eeh-navigation/navbar-brand-content.html'\"></span>\r" +
    "\n" +
    "</span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"template/eeh-navigation/navbar-brand-content.html\">\r" +
    "\n" +
    "    <img ng-if=\"src\" ng-src=\"{{ src }}\">\r" +
    "\n" +
    "    <span ng-if=\"text\">{{ text|translate }}</span>\r" +
    "\n" +
    "</script>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('template/eeh-navigation/navbar/eeh-navigation-navbar.html',
    "<nav class=\"navbar eeh-navigation eeh-navigation-navbar\"\r" +
    "\n" +
    "     ng-class=\"navClass\"\r" +
    "\n" +
    "     role=\"navigation\">\r" +
    "\n" +
    "    <div class=\"navbar-header\">\r" +
    "\n" +
    "        <button type=\"button\" class=\"navbar-toggle\" ng-click=\"isNavbarCollapsed = !isNavbarCollapsed\">\r" +
    "\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\r" +
    "\n" +
    "            <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "            <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "            <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "        </button>\r" +
    "\n" +
    "        <eeh-navigation-navbar-brand text=\"brandText\"\r" +
    "\n" +
    "                                     state=\"brandState\"\r" +
    "\n" +
    "                                     href=\"brandHref\"\r" +
    "\n" +
    "                                     target=\"brandTarget\"\r" +
    "\n" +
    "                                     src=\"brandSrc\"\r" +
    "\n" +
    "                                     click=\"brandClick\"></eeh-navigation-navbar-brand>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div collapse=\"isNavbarCollapsed\" class=\"navbar-collapse\">\r" +
    "\n" +
    "        <ul class=\"nav navbar-nav navbar-left\">\r" +
    "\n" +
    "            <li ng-repeat=\"item in leftNavbarMenuItems | orderBy:'weight'\"\r" +
    "\n" +
    "                ng-include=\"'template/eeh-navigation/navbar-menu-item.html'\"\r" +
    "\n" +
    "                ng-if=\"item._isVisible()\"\r" +
    "\n" +
    "                dropdown\r" +
    "\n" +
    "                ui-sref-active-eq=\"active\"\r" +
    "\n" +
    "                eeh-navigation-active-menu-item=\"item\"></li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "        <ul class=\"nav navbar-nav navbar-right\">\r" +
    "\n" +
    "            <li ng-repeat=\"item in rightNavbarMenuItems | orderBy:'weight'\"\r" +
    "\n" +
    "                ng-include=\"'template/eeh-navigation/navbar-menu-item.html'\"\r" +
    "\n" +
    "                ng-if=\"item._isVisible()\"\r" +
    "\n" +
    "                dropdown\r" +
    "\n" +
    "                ui-sref-active-eq=\"active\"\r" +
    "\n" +
    "                eeh-navigation-active-menu-item=\"item\"></li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</nav>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"template/eeh-navigation/navbar-menu-item.html\">\r" +
    "\n" +
    "    <a ng-if=\"!item.isDivider && item.state\" ui-sref=\"{{ item.state }}\">\r" +
    "\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "    <a ng-if=\"item.click\" ng-click=\"item.click()\">\r" +
    "\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "    <a ng-if=\"item.href\" ng-href=\"{{item.href}}\" target=\"{{item.target ? item.target : '_self'}}\">\r" +
    "\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "    <a ng-if=\"item.hasChildren()\" dropdown-toggle>\r" +
    "\n" +
    "        <span class=\"icon-fw {{ iconBaseClass() }} {{ item.iconClass }}\"></span>\r" +
    "\n" +
    "        <span> {{ item.text|translate }}</span>\r" +
    "\n" +
    "        <span class=\"caret\"></span>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "    <ul ng-if=\"item.hasChildren()\" class=\"dropdown-menu\">\r" +
    "\n" +
    "        <li ng-repeat=\"item in item.children()|orderBy:'weight'\"\r" +
    "\n" +
    "            ng-class=\"{'divider': item.isDivider}\"\r" +
    "\n" +
    "            ng-include=\"'template/eeh-navigation/navbar-menu-item.html'\"\r" +
    "\n" +
    "            ng-if=\"item._isVisible()\"\r" +
    "\n" +
    "            ui-sref-active-eq=\"active\"></li>\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "</script>\r" +
    "\n"
  );


  $templateCache.put('template/eeh-navigation/search-input/eeh-navigation-search-input.html',
    "<div ng-include=\"'template/eeh-navigation/search-input.html'\"\r" +
    "\n" +
    "     ng-if=\"!isCollapsed\"\r" +
    "\n" +
    "     class=\"eeh-navigation-search-input\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<a class=\"eeh-navigation-search-input\" ng-href=\"\" ng-if=\"isCollapsed\"\r" +
    "\n" +
    "   popover-placement=\"right\"\r" +
    "\n" +
    "   popover-append-to-body=\"'true'\"\r" +
    "\n" +
    "   popover-template=\"'template/eeh-navigation/search-input-popover.html'\">\r" +
    "\n" +
    "    <span class=\"menu-item-icon icon-fw {{ iconBaseClass() }} {{ iconClass }}\"></span>\r" +
    "\n" +
    "</a>\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"template/eeh-navigation/search-input-popover.html\">\r" +
    "\n" +
    "    <div class=\"row search-input-popover\">\r" +
    "\n" +
    "        <div class=\"col-xs-12\">\r" +
    "\n" +
    "            <div ng-include=\"'template/eeh-navigation/search-input.html'\"></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"template/eeh-navigation/search-input.html\">\r" +
    "\n" +
    "    <form ng-submit=\"submit(model.query)\" class=\"navbar-form\" ng-class=\"classes\">\r" +
    "\n" +
    "        <div class=\"input-group\">\r" +
    "\n" +
    "            <input type=\"text\"\r" +
    "\n" +
    "                   class=\"form-control\"\r" +
    "\n" +
    "                   placeholder=\"{{'Search'|translate}}\"\r" +
    "\n" +
    "                   ng-model=\"model.query\">\r" +
    "\n" +
    "        <span class=\"input-group-btn\" ng-if=\"!isCollapsed\">\r" +
    "\n" +
    "            <button class=\"btn btn-default\">\r" +
    "\n" +
    "                <span class=\"icon-fw {{ iconBaseClass() }} {{ iconClass }}\"></span>\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "        </span>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</script>\r" +
    "\n"
  );


  $templateCache.put('template/eeh-navigation/sidebar/eeh-navigation-sidebar.html',
    "<nav class=\"navbar navbar-default eeh-navigation eeh-navigation-sidebar\" role=\"navigation\"\r" +
    "\n" +
    "    ng-class=\"navClass\">\r" +
    "\n" +
    "    <div class=\"navbar-collapse\" collapse=\"isNavbarCollapsed\">\r" +
    "\n" +
    "        <ul class=\"nav sidebar-nav\">\r" +
    "\n" +
    "            <li class=\"sidebar-search\" ng-if=\"searchInputIsVisible\">\r" +
    "\n" +
    "                <eeh-navigation-search-input class=\"sidebar-search-input\"\r" +
    "\n" +
    "                                             icon-class=\"searchInputIconClass\"\r" +
    "\n" +
    "                                             submit=\"searchInputSubmit\"\r" +
    "\n" +
    "                                             is-collapsed=\"sidebarIsCollapsed\"></eeh-navigation-search-input>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li ng-repeat=\"item in sidebarMenuItems | orderBy:'weight'\"\r" +
    "\n" +
    "                ng-include=\"'template/eeh-navigation/sidebar-menu-item.html'\"\r" +
    "\n" +
    "                ng-class=\"{ 'leaf': !item.hasChildren() }\"\r" +
    "\n" +
    "                ng-if=\"item._isVisible()\"\r" +
    "\n" +
    "                ng-click=\"topLevelMenuItemClickHandler(item)\"fire\r" +
    "\n" +
    "                ui-sref-active-eq=\"active\"\r" +
    "\n" +
    "                eeh-navigation-active-menu-item=\"item\"></li>\r" +
    "\n" +
    "            <li ng-click=\"toggleSidebarTextCollapse()\" ng-if=\"sidebarCollapsedButtonIsVisible && isSidebarVisible()\">\r" +
    "\n" +
    "                <a>\r" +
    "\n" +
    "                    <span class=\"icon-fw {{ iconBaseClass() }}\" ng-class=\"sidebarIsCollapsed ? sidebarCollapsedIconClass : sidebarExpandedIconClass\"></span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</nav>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div id=\"eeh-navigation-page-wrapper\" ng-class=\"{ 'sidebar-invisible': !isSidebarVisible() }\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-lg-12\">\r" +
    "\n" +
    "            <div ng-transclude></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"template/eeh-navigation/sidebar-menu-item.html\">\r" +
    "\n" +
    "    <a ng-if=\"item.state\" ui-sref=\"{{item.state}}\">\r" +
    "\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "    <a ng-if=\"item.click\" ng-click=\"item.click()\">\r" +
    "\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "    <a ng-if=\"item.href\" ng-href=\"{{item.href}}\" target=\"{{item.target ? item.target : '_self'}}\">\r" +
    "\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "    <a ng-if=\"!item.state && item.hasChildren()\"\r" +
    "\n" +
    "       ng-click=\"item.isCollapsed = !item.isCollapsed\">\r" +
    "\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\r" +
    "\n" +
    "        <span class=\"navbar-right sidebar-arrow icon-fw {{ iconBaseClass() }}\"\r" +
    "\n" +
    "              ng-class=\"item.isCollapsed ? menuItemCollapsedIconClass : menuItemExpandedIconClass\"></span>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "    <ul ng-if=\"!item.state && item.hasChildren()\" collapse=\"item.isCollapsed\"\r" +
    "\n" +
    "        ng-class=\"{ 'text-collapsed': sidebarIsCollapsed }\"\r" +
    "\n" +
    "        class=\"nav sidebar-nav sidebar-nav-nested\">\r" +
    "\n" +
    "        <li ng-repeat=\"item in item.children()\"\r" +
    "\n" +
    "            ng-include=\"'template/eeh-navigation/sidebar-menu-item.html'\"\r" +
    "\n" +
    "            ng-class=\"{ 'leaf': !item.hasChildren() }\"\r" +
    "\n" +
    "            ng-if=\"item._isVisible()\"\r" +
    "\n" +
    "            ui-sref-active-eq=\"active\"\r" +
    "\n" +
    "            eeh-navigation-active-menu-item=\"item\"></li>\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "</script>\r" +
    "\n"
  );

}]);
