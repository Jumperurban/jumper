
      import React from 'react';
      import ReactDOM from 'react-dom';
      import Area from '@evershop/evershop/src/components/common/Area';
      import Hydrate from '@evershop/evershop/src/components/common/react/client/HydrateAdmin';
      
Area.defaultProps.components = {
  header: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcYXV0aFxwYWdlc1xhZG1pblxhbGxcQWRtaW5Vc2VyLmpzeA==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcYXV0aFxwYWdlc1xhZG1pblxhbGxcQWRtaW5Vc2VyLmpzeA==',
      sortOrder: 50,
      component: require('C:\\Users\\chris\\Documents\\011\\node_modules\\@evershop\\evershop\\src\\modules\\auth\\pages\\admin\\all\\AdminUser.jsx')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxMb2dvLmpzeA==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxMb2dvLmpzeA==',
      sortOrder: 10,
      component: require('C:\\Users\\chris\\Documents\\011\\node_modules\\@evershop\\evershop\\src\\modules\\cms\\pages\\admin\\all\\Logo.jsx')
    },
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxTZWFyY2hCb3guanN4: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxTZWFyY2hCb3guanN4',
      sortOrder: 20,
      component: require('C:\\Users\\chris\\Documents\\011\\node_modules\\@evershop\\evershop\\src\\modules\\cms\\pages\\admin\\all\\SearchBox.jsx')
    }
  },
  adminMenu: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2F0YWxvZ1xwYWdlc1xhZG1pblxhbGxcQ2F0YWxvZ01lbnVHcm91cC5qc3g=': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2F0YWxvZ1xwYWdlc1xhZG1pblxhbGxcQ2F0YWxvZ01lbnVHcm91cC5qc3g=',
      sortOrder: 20,
      component: require('C:\\Users\\chris\\Documents\\011\\node_modules\\@evershop\\evershop\\src\\modules\\catalog\\pages\\admin\\all\\CatalogMenuGroup.jsx')
    },
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxDbXNNZW51R3JvdXAuanN4: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxDbXNNZW51R3JvdXAuanN4',
      sortOrder: 60,
      component: require('C:\\Users\\chris\\Documents\\011\\node_modules\\@evershop\\evershop\\src\\modules\\cms\\pages\\admin\\all\\CmsMenuGroup.jsx')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxRdWlja0xpbmtzLmpzeA==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxRdWlja0xpbmtzLmpzeA==',
      sortOrder: 10,
      component: require('C:\\Users\\chris\\Documents\\011\\node_modules\\@evershop\\evershop\\src\\modules\\cms\\pages\\admin\\all\\QuickLinks.jsx')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY3VzdG9tZXJccGFnZXNcYWRtaW5cYWxsXEN1c3RvbWVyTWVudUdyb3VwLmpzeA==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY3VzdG9tZXJccGFnZXNcYWRtaW5cYWxsXEN1c3RvbWVyTWVudUdyb3VwLmpzeA==',
      sortOrder: 40,
      component: require('C:\\Users\\chris\\Documents\\011\\node_modules\\@evershop\\evershop\\src\\modules\\customer\\pages\\admin\\all\\CustomerMenuGroup.jsx')
    },
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcb21zXHBhZ2VzXGFkbWluXGFsbFxPbXNNZW51R3JvdXAuanN4: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcb21zXHBhZ2VzXGFkbWluXGFsbFxPbXNNZW51R3JvdXAuanN4',
      sortOrder: 30,
      component: require('C:\\Users\\chris\\Documents\\011\\node_modules\\@evershop\\evershop\\src\\modules\\oms\\pages\\admin\\all\\OmsMenuGroup.jsx')
    },
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNccHJvbW90aW9uXHBhZ2VzXGFkbWluXGFsbFxDb3Vwb25NZW51R3JvdXAuanN4: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNccHJvbW90aW9uXHBhZ2VzXGFkbWluXGFsbFxDb3Vwb25NZW51R3JvdXAuanN4',
      sortOrder: 50,
      component: require('C:\\Users\\chris\\Documents\\011\\node_modules\\@evershop\\evershop\\src\\modules\\promotion\\pages\\admin\\all\\CouponMenuGroup.jsx')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcc2V0dGluZ1xwYWdlc1xhZG1pblxhbGxcU2V0dGluZ01lbnVHcm91cC5qc3g=': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcc2V0dGluZ1xwYWdlc1xhZG1pblxhbGxcU2V0dGluZ01lbnVHcm91cC5qc3g=',
      sortOrder: 500,
      component: require('C:\\Users\\chris\\Documents\\011\\node_modules\\@evershop\\evershop\\src\\modules\\setting\\pages\\admin\\all\\SettingMenuGroup.jsx')
    }
  },
  quickLinks: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2F0YWxvZ1xwYWdlc1xhZG1pblxhbGxcTmV3UHJvZHVjdFF1aWNrTGluay5qc3g=': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY2F0YWxvZ1xwYWdlc1xhZG1pblxhbGxcTmV3UHJvZHVjdFF1aWNrTGluay5qc3g=',
      sortOrder: 20,
      component: require('C:\\Users\\chris\\Documents\\011\\node_modules\\@evershop\\evershop\\src\\modules\\catalog\\pages\\admin\\all\\NewProductQuickLink.jsx')
    },
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNccHJvbW90aW9uXHBhZ2VzXGFkbWluXGFsbFxOZXdDb3Vwb25RdWlja0xpbmsuanN4: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNccHJvbW90aW9uXHBhZ2VzXGFkbWluXGFsbFxOZXdDb3Vwb25RdWlja0xpbmsuanN4',
      sortOrder: 30,
      component: require('C:\\Users\\chris\\Documents\\011\\node_modules\\@evershop\\evershop\\src\\modules\\promotion\\pages\\admin\\all\\NewCouponQuickLink.jsx')
    }
  },
  body: {
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxMYXlvdXQuanN4: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxMYXlvdXQuanN4',
      sortOrder: 10,
      component: require('C:\\Users\\chris\\Documents\\011\\node_modules\\@evershop\\evershop\\src\\modules\\cms\\pages\\admin\\all\\Layout.jsx')
    },
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxOb3RpZmljYXRpb24uanN4: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxOb3RpZmljYXRpb24uanN4',
      sortOrder: 10,
      component: require('C:\\Users\\chris\\Documents\\011\\node_modules\\@evershop\\evershop\\src\\modules\\cms\\pages\\admin\\all\\Notification.jsx')
    }
  },
  head: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxNZXRhLmpzeA==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxNZXRhLmpzeA==',
      sortOrder: 5,
      component: require('C:\\Users\\chris\\Documents\\011\\node_modules\\@evershop\\evershop\\src\\modules\\cms\\pages\\admin\\all\\Meta.jsx')
    }
  },
  adminNavigation: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxOYXZpZ2F0aW9uLmpzeA==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcY21zXHBhZ2VzXGFkbWluXGFsbFxOYXZpZ2F0aW9uLmpzeA==',
      sortOrder: 10,
      component: require('C:\\Users\\chris\\Documents\\011\\node_modules\\@evershop\\evershop\\src\\modules\\cms\\pages\\admin\\all\\Navigation.jsx')
    }
  },
  settingPageMenu: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcb21zXHBhZ2VzXGFkbWluXGFsbFxTaGlwcGluZ1NldHRpbmdNZW51LmpzeA==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcb21zXHBhZ2VzXGFkbWluXGFsbFxTaGlwcGluZ1NldHRpbmdNZW51LmpzeA==',
      sortOrder: 15,
      component: require('C:\\Users\\chris\\Documents\\011\\node_modules\\@evershop\\evershop\\src\\modules\\oms\\pages\\admin\\all\\ShippingSettingMenu.jsx')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcc2V0dGluZ1xwYWdlc1xhZG1pblxhbGxcUGF5bWVudFNldHRpbmdNZW51LmpzeA==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcc2V0dGluZ1xwYWdlc1xhZG1pblxhbGxcUGF5bWVudFNldHRpbmdNZW51LmpzeA==',
      sortOrder: 10,
      component: require('C:\\Users\\chris\\Documents\\011\\node_modules\\@evershop\\evershop\\src\\modules\\setting\\pages\\admin\\all\\PaymentSettingMenu.jsx')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcc2V0dGluZ1xwYWdlc1xhZG1pblxhbGxcU3RvcmVTZXR0aW5nTWVudS5qc3g=': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcc2V0dGluZ1xwYWdlc1xhZG1pblxhbGxcU3RvcmVTZXR0aW5nTWVudS5qc3g=',
      sortOrder: 5,
      component: require('C:\\Users\\chris\\Documents\\011\\node_modules\\@evershop\\evershop\\src\\modules\\setting\\pages\\admin\\all\\StoreSettingMenu.jsx')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcdGF4XHBhZ2VzXGFkbWluXGFsbFxUYXhTZXR0aW5nTWVudS5qc3g=': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNcdGF4XHBhZ2VzXGFkbWluXGFsbFxUYXhTZXR0aW5nTWVudS5qc3g=',
      sortOrder: 20,
      component: require('C:\\Users\\chris\\Documents\\011\\node_modules\\@evershop\\evershop\\src\\modules\\tax\\pages\\admin\\all\\TaxSettingMenu.jsx')
    }
  },
  content: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNccHJvbW90aW9uXHBhZ2VzXGFkbWluXGNvdXBvbkdyaWRcR3JpZC5qc3g=': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNccHJvbW90aW9uXHBhZ2VzXGFkbWluXGNvdXBvbkdyaWRcR3JpZC5qc3g=',
      sortOrder: 20,
      component: require('C:\\Users\\chris\\Documents\\011\\node_modules\\@evershop\\evershop\\src\\modules\\promotion\\pages\\admin\\couponGrid\\Grid.jsx')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNccHJvbW90aW9uXHBhZ2VzXGFkbWluXGNvdXBvbkdyaWRcSGVhZGluZy5qc3g=': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNccHJvbW90aW9uXHBhZ2VzXGFkbWluXGNvdXBvbkdyaWRcSGVhZGluZy5qc3g=',
      sortOrder: 10,
      component: require('C:\\Users\\chris\\Documents\\011\\node_modules\\@evershop\\evershop\\src\\modules\\promotion\\pages\\admin\\couponGrid\\Heading.jsx')
    }
  },
  pageHeadingRight: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNccHJvbW90aW9uXHBhZ2VzXGFkbWluXGNvdXBvbkdyaWRcTmV3Q291cG9uQnV0dG9uLmpzeA==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcZXZlcnNob3Bcc3JjXG1vZHVsZXNccHJvbW90aW9uXHBhZ2VzXGFkbWluXGNvdXBvbkdyaWRcTmV3Q291cG9uQnV0dG9uLmpzeA==',
      sortOrder: 10,
      component: require('C:\\Users\\chris\\Documents\\011\\node_modules\\@evershop\\evershop\\src\\modules\\promotion\\pages\\admin\\couponGrid\\NewCouponButton.jsx')
    }
  }
} 
ReactDOM.hydrate(
        <Hydrate/>,
        document.getElementById('app')
      );