"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return _default}});var _jsxruntime=require("react/jsx-runtime"),_react=function(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}(require("react")),_proptypes=_interop_require_default(require("prop-types")),_styled=_interop_require_default(require("@emotion/styled")),_getTheme=_interop_require_default(require("./helpers/getTheme")),_verifyStyles=_interop_require_default(require("./helpers/verifyStyles"));function _interop_require_default(obj){return obj&&obj.__esModule?obj:{default:obj}}function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  border-radius: 4px;\n  background-color: ",";\n  color: ",";\n  padding: 5px;\n  margin-bottom: 5px;\n\n  &[open] {\n  }\n\n  &[open] .summary {\n    border-bottom: ","; /*Border separator heading - paragrahp*/\n    margin-bottom: 0.5em;\n  }\n  &:hover {\n    cursor: pointer;\n  }\n  &:last-of-type {\n    margin-bottom: 0;\n  }\n"]);return _templateObject=function(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  background-color: ",";\n  color: ",";\n  padding: 10px 0;\n"]);return _templateObject1=function(){return data},data}var Details=_styled.default.details(_templateObject(),function(param){return param.theme.background},function(param){var theme=param.theme;return theme.paragraphColor?theme.paragraphColor:theme.color},function(param){return param.theme.borderBottom}),Sumary=_styled.default.summary(_templateObject1(),function(param){return param.theme.background},function(param){var theme=param.theme;return theme.titleColor?theme.titleColor:theme.color}),FAQComponent=function(param){var data=param.data,theme=param.theme,customTheme=param.customTheme,schemaName=param.schemaName,selectedTheme=(0,_getTheme.default)(theme,customTheme),FAQSCHEMALIST=data.map(function(question){return{"@type":"Question",name:question.title,acceptedAnswer:{"@type":"Answer",text:question.paragraph}}});return(0,_jsxruntime.jsxs)(_react.Fragment,{children:[data.map(function(question){var theme=(0,_verifyStyles.default)(selectedTheme,question);return(0,_jsxruntime.jsxs)(Details,{theme:theme,children:[(0,_jsxruntime.jsx)(Sumary,{theme:theme,className:"summary",children:question.title}),question.paragraph]},question.title)}),(0,_jsxruntime.jsx)("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",name:schemaName,mainEntity:FAQSCHEMALIST})})]})};FAQComponent.propTypes={data:_proptypes.default.arrayOf(_proptypes.default.shape({title:_proptypes.default.string.isRequired,paragraph:_proptypes.default.string.isRequired,colors:_proptypes.default.exact({title:_proptypes.default.string,paragraph:_proptypes.default.string})})),theme:_proptypes.default.oneOf(["dark","blue","green","purple","netflix","custom"]),customTheme:_proptypes.default.exact({background:_proptypes.default.string.isRequired,color:_proptypes.default.string.isRequired,borderBottom:_proptypes.default.string.isRequired}),schemaName:_proptypes.default.string.isRequired};var _default=FAQComponent;