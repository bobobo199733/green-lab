import{a5 as e,aO as t,aP as l,aQ as a,aR as n,aX as o,b9 as s,ba as u,ab as b,bb as i}from"./index.module.js";import{B as r}from"./VirtualServiceItem-c6de05f3.js";const c=({disabled:i,onClick:c,isSecondLayerView:d,marginStyle:y})=>{const{labels:C,ui:g}=e(),{rules:m}=t(l.BUTTON_ACCEPT),p=a();let S="";return n(C)&&o(g)||s(C)&&u(g)?(S=s(C)&&d&&C.secondLayer.acceptButtonLabel?C.secondLayer.acceptButtonLabel:null==C?void 0:C.buttons.acceptAll,b(r,{backgroundColor:p.ui.buttons.accept.bg,disabled:i,label:S,onClick:c,testid:"uc-accept-all-button",textColor:p.ui.buttons.accept.text,buttonTypeRules:m,marginStyle:y})):null},d=({disabled:o,onClick:u,isSecondLayerView:i,marginStyle:c})=>{const{labels:d}=e(),{rules:y}=t(l.BUTTON_DENY),C=a();let g="";return n(d)||s(d)?(g=s(d)&&i&&d.secondLayer.denyButtonLabel?d.secondLayer.denyButtonLabel:null==d?void 0:d.buttons.denyAll,b(r,{backgroundColor:C.ui.buttons.deny.bg,disabled:o,label:g,onClick:u,testid:"uc-deny-all-button",textColor:C.ui.buttons.deny.text,buttonTypeRules:y,marginStyle:c})):null},y=({disabled:n,onClick:o,marginStyle:s})=>{const{labels:u}=e(),{rules:c}=t(l.BUTTON_SAVE),d=a();return!u||i(u)?null:b(r,{backgroundColor:d.ui.buttons.save.bg,disabled:n,label:u.buttons.save,onClick:o,testid:"uc-save-button",textColor:d.ui.buttons.save.text,buttonTypeRules:c,marginStyle:s})};export{c as A,d as D,y as S};
