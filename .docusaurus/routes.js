import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '767'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'c8f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '73e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '269'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '031'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '050'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '3d8'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '8c5'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'b7e'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/blog/',
        component: ComponentCreator('/blog/', '968'),
        exact: true
      },
      {
        path: '/category/Reference',
        component: ComponentCreator('/category/Reference', '09c'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/Cloud/',
        component: ComponentCreator('/Cloud/', '34c'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/Cloud/Arm based machines',
        component: ComponentCreator('/Cloud/Arm based machines', '37c'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/Cloud/auth',
        component: ComponentCreator('/Cloud/auth', '0db'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/Cloud/custom_images',
        component: ComponentCreator('/Cloud/custom_images', '08f'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/Cloud/using_dask',
        component: ComponentCreator('/Cloud/using_dask', 'fca'),
        exact: true
      },
      {
        path: '/Privacy/Privacy Policy',
        component: ComponentCreator('/Privacy/Privacy Policy', 'c60'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/Reference/examples',
        component: ComponentCreator('/Reference/examples', '44e'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/Reference/Fallback',
        component: ComponentCreator('/Reference/Fallback', '5b3'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/Reference/gotchas',
        component: ComponentCreator('/Reference/gotchas', 'ee3'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/Reference/yaml',
        component: ComponentCreator('/Reference/yaml', 'b94'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/Terms of Service',
        component: ComponentCreator('/Terms of Service', 'c3f'),
        exact: true,
        sidebar: "sidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
