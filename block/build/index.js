!function(){"use strict";var e=window.wp.blocks,n=JSON.parse('{"u2":"privacy-tools/consent-banner"}'),r=window.wp.element,t=window.wp.blockEditor;(0,e.registerBlockType)(n.u2,{edit:function(){return(0,r.createElement)("div",(0,t.useBlockProps)(),(0,r.createElement)("div",{id:"privacy-consent-banner"},"Consent Banner Placeholder"))},save:function(){return(0,r.createElement)("div",t.useBlockProps.save(),(0,r.createElement)("div",{id:"privacy-consent-banner"}))}})}();