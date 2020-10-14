
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/eko-developer-docs/',
  component: ComponentCreator('/eko-developer-docs/','dcf'),
  exact: true,
},
{
  path: '/eko-developer-docs/__docusaurus/debug',
  component: ComponentCreator('/eko-developer-docs/__docusaurus/debug','40b'),
  exact: true,
},
{
  path: '/eko-developer-docs/__docusaurus/debug/config',
  component: ComponentCreator('/eko-developer-docs/__docusaurus/debug/config','407'),
  exact: true,
},
{
  path: '/eko-developer-docs/__docusaurus/debug/content',
  component: ComponentCreator('/eko-developer-docs/__docusaurus/debug/content','752'),
  exact: true,
},
{
  path: '/eko-developer-docs/__docusaurus/debug/globalData',
  component: ComponentCreator('/eko-developer-docs/__docusaurus/debug/globalData','6ae'),
  exact: true,
},
{
  path: '/eko-developer-docs/__docusaurus/debug/metadata',
  component: ComponentCreator('/eko-developer-docs/__docusaurus/debug/metadata','954'),
  exact: true,
},
{
  path: '/eko-developer-docs/__docusaurus/debug/registry',
  component: ComponentCreator('/eko-developer-docs/__docusaurus/debug/registry','865'),
  exact: true,
},
{
  path: '/eko-developer-docs/__docusaurus/debug/routes',
  component: ComponentCreator('/eko-developer-docs/__docusaurus/debug/routes','edf'),
  exact: true,
},
{
  path: '/eko-developer-docs/blog',
  component: ComponentCreator('/eko-developer-docs/blog','c48'),
  exact: true,
},
{
  path: '/eko-developer-docs/blog/hello-world',
  component: ComponentCreator('/eko-developer-docs/blog/hello-world','77e'),
  exact: true,
},
{
  path: '/eko-developer-docs/blog/hola',
  component: ComponentCreator('/eko-developer-docs/blog/hola','31f'),
  exact: true,
},
{
  path: '/eko-developer-docs/blog/tags',
  component: ComponentCreator('/eko-developer-docs/blog/tags','9c5'),
  exact: true,
},
{
  path: '/eko-developer-docs/blog/tags/docusaurus',
  component: ComponentCreator('/eko-developer-docs/blog/tags/docusaurus','582'),
  exact: true,
},
{
  path: '/eko-developer-docs/blog/tags/facebook',
  component: ComponentCreator('/eko-developer-docs/blog/tags/facebook','6c0'),
  exact: true,
},
{
  path: '/eko-developer-docs/blog/tags/hello',
  component: ComponentCreator('/eko-developer-docs/blog/tags/hello','0e9'),
  exact: true,
},
{
  path: '/eko-developer-docs/blog/tags/hola',
  component: ComponentCreator('/eko-developer-docs/blog/tags/hola','f28'),
  exact: true,
},
{
  path: '/eko-developer-docs/blog/welcome',
  component: ComponentCreator('/eko-developer-docs/blog/welcome','f24'),
  exact: true,
},
{
  path: '/eko-developer-docs/docs',
  component: ComponentCreator('/eko-developer-docs/docs','45e'),
  
  routes: [
{
  path: '/eko-developer-docs/docs/',
  component: ComponentCreator('/eko-developer-docs/docs/','e00'),
  exact: true,
},
{
  path: '/eko-developer-docs/docs/doc2',
  component: ComponentCreator('/eko-developer-docs/docs/doc2','c5b'),
  exact: true,
},
{
  path: '/eko-developer-docs/docs/doc3',
  component: ComponentCreator('/eko-developer-docs/docs/doc3','286'),
  exact: true,
},
{
  path: '/eko-developer-docs/docs/mdx',
  component: ComponentCreator('/eko-developer-docs/docs/mdx','a82'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
