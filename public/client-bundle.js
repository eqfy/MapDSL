/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
function handleMapOutputStatements() {
    console.log('inside handle');
    const xhr = new XMLHttpRequest();
    const url = '/';
    xhr.open('GET', url, false);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = () => {
        if (xhr.status === 200) {
            const listOfOutputStatements = JSON.parse(xhr.response).result;
            console.log(listOfOutputStatements);
            return renderMap(listOfOutputStatements);
        }
        else {
            const err = JSON.parse(xhr.response).error;
            console.log(err);
            return renderMap(err);
        }
    };
    return null;
}
function renderMap(outputStatements) {
    for (const statement of outputStatements) {
        const para = document.createElement('p');
        const node = document.createTextNode(JSON.stringify(statement));
        para.appendChild(node);
        document.body.appendChild(para);
    }
}

})();

/******/ })()
;