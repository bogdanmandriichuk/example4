/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/mobileNav.js":
/*!************************************!*\
  !*** ./src/assets/js/mobileNav.js ***!
  \************************************/
/***/ (function() {

eval("const burger = document.getElementById('sidebarToggle');\r\nconst sidebar = document.getElementById('sidebar');\r\nconst page = document.getElementById('page');\r\nconst body = document.body;\r\n\r\nburger.addEventListener('click', event => {\r\nif( body.classList.contains('show-sidebar') ){\r\n    closeSidebar(); \r\n} else {\r\n    showSidebar();\r\n}\r\n});\r\nfunction showSidebar() {\r\n    let mask = document.createElement('div');\r\n    mask.classList.add('page_mask'); \r\n    mask.addEventListener('click', closeSidebar);\r\n    page.appendChild(mask);\r\n    body.classList.add('show-sidebar');\r\n}\r\nfunction closeSidebar() {\r\n   \r\n    body.classList.remove('show-sidebar');\r\n    document.querySelector('.page_mask').remove();\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/mobileNav.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/***/ (function() {

eval("const modalBtn = document.querySelectorAll('[data-modal]');\r\nconst body = document.body;\r\nconst modalClose = document.querySelectorAll('.modal_close');\r\nconst modal = document.querySelectorAll('.modal');\r\nmodalBtn.forEach(item => {\r\n    item.addEventListener('click', event => {\r\n    let $this = event.currentTarget;\r\n    let modalId = $this.getAttribute('data-modal');\r\n    let modal = document.getElementById(modalId);\r\n    let modalContent = modal.querySelector('.modal_content');\r\n    modalContent.addEventListener('click', event => {\r\n        event.stopPropagation();\r\n    });\r\n    modal.classList.add('show');\r\n    body.classList.add('no-scroll');\r\n    setTimeout(() => {\r\n        modalContent.style.transform = 'none'; \r\n        modalContent.style.opacity = '1';   \r\n            }, 1);\r\n    \r\n    });\r\n});\r\n\r\nmodalClose.forEach(item => {\r\n    item.addEventListener('click', event => {\r\n    let currentModal = event.currentTarget.closest('.modal');\r\n    closeModal(currentModal);\r\n        });\r\n});\r\nmodal.forEach(item => {\r\n    item.addEventListener('click', event => {\r\n    let currentModal = event.currentTarget;\r\n   closeModal(currentModal);\r\n        });\r\n});\r\nfunction closeModal(currentModal) {\r\n    let modalContent = currentModal.querySelector('.modal_content');\r\n    modalContent.removeAttribute('style');\r\n    \r\n    \r\n    setTimeout(() => {\r\n        currentModal.classList.remove('show');\r\n        body.classList.remove('no-scroll');\r\n    }, 250);\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/modal.js?");

/***/ }),

/***/ "./src/assets/js/texarea.js":
/*!**********************************!*\
  !*** ./src/assets/js/texarea.js ***!
  \**********************************/
/***/ (function() {

eval("const textArea = document.querySelectorAll('[data-autoresize]');\r\ntextArea.forEach(item => {\r\nlet textAreaH = item.offsetHeight;\r\nitem.addEventListener('input', event => {\r\nlet $this = event.target;\r\n$this.style.height = textAreaH + 'px';\r\n$this.style.height = $this.scrollHeight + 'px';\r\n});\r\n\r\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/texarea.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/mobileNav.js"]();
/******/ 	__webpack_modules__["./src/assets/js/modal.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/texarea.js"]();
/******/ 	
/******/ })()
;