/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/* unused harmony exports eventArgsCreatorMenuSelectionReport, afterStarted */
/*
** MW3 close-menu event arguments
**
** This must match the C# definition found in MBMenuEvents.cs
*/
function eventArgsCreatorMenuSelectionReport(event) {
  var target = event.target;
  return {
    menuID: target.id,
    menuHeadline: target.typeaheadText,
    reason: JSON.stringify(event.detail.reason)
  };
}

/*
** Register all custom events
*/
function afterStarted(blazor) {
  console.log("Registering menuselectionreport event");
  blazor.registerCustomEventType('menuselectionreport', {
    browserEventName: "close-menu",
    createEventArgs: eventArgsCreatorMenuSelectionReport
  });
}
/******/ })()
;