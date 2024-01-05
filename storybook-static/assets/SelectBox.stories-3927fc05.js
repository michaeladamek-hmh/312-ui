import{j as e}from"./jsx-runtime-ffb262ed.js";import{P as i}from"./index-8d47fad6.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";s.propTypes={correct:i.bool,incorrect:i.bool,disabled:i.bool,grade:i.oneOf(["g35","g68","g912"])};function s({correct:r,incorrect:S,disabled:y,grade:_}){const B=r?"correct":"",I=S?"incorrect":"";return e.jsx("div",{className:_,children:e.jsxs("select",{className:` ${B} ${I} `,disabled:y,children:[e.jsx("option",{children:"Tears of the Kingdom"}),e.jsx("option",{children:"Breath of the Wild"}),e.jsx("option",{children:"Skyward Sword"}),e.jsx("option",{children:"Twilight Princess"}),e.jsx("option",{children:"The Wind Waker"}),e.jsx("option",{children:"Majora's Mask"}),e.jsx("option",{children:"Ocarina of Time"})]})})}s.__docgenInfo={description:"",methods:[],displayName:"SelectBox",props:{correct:{type:{name:"bool"},required:!1,description:""},incorrect:{type:{name:"bool"},required:!1,description:""},disabled:{type:{name:"bool"},required:!1,description:""},grade:{type:{name:"enum",value:[{value:"'g35'",computed:!1},{value:"'g68'",computed:!1},{value:"'g912'",computed:!1}]},required:!1,description:""}}};const q={component:s,title:"Select Box",tags:["autodocs"],parameters:{layout:"centered"}},o=r=>e.jsx(s,{...r}),a=r=>e.jsx(s,{...r}),t=r=>e.jsx(s,{...r}),c=r=>e.jsx(s,{...r});o.args={correct:!1,incorrect:!1,disabled:!1,grade:"g35"};a.args={...o.args,correct:!0,disabled:!0};t.args={...o.args,incorrect:!0};c.args={...o.args,disabled:!0};var d,n,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"args => <SelectBox {...args} />",...(l=(n=o.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var p,m,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"args => <SelectBox {...args} />",...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,f,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"args => <SelectBox {...args} />",...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var h,j,b;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:"args => <SelectBox {...args} />",...(b=(j=c.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};o.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"Correct"};t.__docgenInfo={description:"",methods:[],displayName:"Incorrect"};c.__docgenInfo={description:"",methods:[],displayName:"Disabled"};const C=["Default","Correct","Incorrect","Disabled"];export{a as Correct,o as Default,c as Disabled,t as Incorrect,C as __namedExportsOrder,q as default};
//# sourceMappingURL=SelectBox.stories-3927fc05.js.map
