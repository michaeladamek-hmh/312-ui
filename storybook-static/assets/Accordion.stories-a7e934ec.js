import{j as e}from"./jsx-runtime-ffb262ed.js";import{P as t}from"./index-8d47fad6.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";i.propTypes={title:t.string,content:t.string,variant:t.oneOf(["default","color","divider"]),grade:t.oneOf(["g35","g68","g912"])};function i({title:r,content:c,variant:x,grade:j}){return e.jsx("div",{className:j,children:e.jsxs("ul",{className:`source__accordion source__accordion--${x}`,children:[e.jsx("li",{children:e.jsxs("details",{children:[e.jsx("summary",{children:e.jsx("h5",{children:r})}),e.jsx("p",{children:c})]})}),e.jsx("li",{children:e.jsxs("details",{children:[e.jsx("summary",{children:e.jsx("h5",{children:r})}),e.jsx("p",{children:c})]})}),e.jsx("li",{children:e.jsxs("details",{children:[e.jsx("summary",{children:e.jsx("h5",{children:r})}),e.jsx("p",{children:c})]})})]})})}i.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{title:{type:{name:"string"},required:!1,description:""},content:{type:{name:"string"},required:!1,description:""},variant:{type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'color'",computed:!1},{value:"'divider'",computed:!1}]},required:!1,description:""},grade:{type:{name:"enum",value:[{value:"'g35'",computed:!1},{value:"'g68'",computed:!1},{value:"'g912'",computed:!1}]},required:!1,description:""}}};const w={component:i,title:"Accordion",tags:["autodocs"]},s=r=>e.jsx(i,{...r}),o=r=>e.jsx(i,{...r}),a=r=>e.jsx(i,{...r});s.args={title:"Accordion Title",content:"This is a paragraph of placeholder text. It is only here to help show the layout of the page and how the text will flow. Replace this placeholder text with your own meaningful content.",variant:"default",grade:"g35"};o.args={...s.args,variant:"color"};a.args={...s.args,variant:"divider"};var d,n,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"args => <Accordion {...args} />",...(l=(n=s.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var p,m,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Accordion {...args} />",...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,g,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:"args => <Accordion {...args} />",...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"Color"};a.__docgenInfo={description:"",methods:[],displayName:"Divider"};const D=["Default","Color","Divider"];export{o as Color,s as Default,a as Divider,D as __namedExportsOrder,w as default};
//# sourceMappingURL=Accordion.stories-a7e934ec.js.map