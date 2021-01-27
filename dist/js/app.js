/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

var app = new Vue({
  el: "#app",
  data: {
    nav: [{
      logo: "./dist/img/logo.svg",
      voice: "solution"
    }, {
      voice: "pricing"
    }, {
      voice: "blog"
    }, {
      voice: "sign in",
      btnText: "Sign up",
      btnIcon: "./dist/img/google-logo.svg"
    }],
    hero: [{
      title: "Understand, recognize and develop your people",
      overview: "Teambit helps teams create a high performing culture with regular feedback.",
      btnText1: "Sign up with Google",
      btnIcon1: "./dist/img/google-logo.svg",
      btnText2: "Sign up with Slack",
      btnIcon2: "./dist/img/slack-logo.svg",
      email: "or use your email address",
      img: "./dist/img/illustration-main.jpg"
    }],
    organization: [{
      problem: [{
        title: "Traditional people processes lead to disengagement and turnover.",
        img: "./dist/img/hardcore.png",
        para: "They are hardocore, formal and disconnected"
      }, {
        img: "./dist/img/nofeedback.png",
        para: "They don't encourage regular feedback"
      }, {
        img: "./dist/img/notsafe.png",
        para: "They don't make it safe to speak up"
      }]
    }, {
      solution: [{
        title: "It doesn't have to be like that. Teambit is a modern tion that teammates love.",
        img: "./dist/img/lightweight.png",
        para: "It's lightweight fun and interconnected",
        lastTitle: "Here is how it works"
      }, {
        img: "./dist/img/feedbacksuggestions.png",
        para: "It encourages regular feedback with contextual request"
      }, {
        img: "./dist/img/safe.png",
        para: "it creates a safe environment for dialog"
      }]
    }, {
      pictures: [{
        problemPic: "./dist/img/before.png"
      }, {
        solutionPic: "./dist/img/after.png"
      }]
    }],
    platform: [{
      tableImg: "./dist/img/employee-feedback.jpg",
      title: "Feedback to help teammates improve",
      overview: "Empawer your teammates to know in real time what they are doing well and what they need to improve.",
      picture: "./dist/img/communication.jpg"
    }, {
      tableImg: "./dist/img/employee-survey.jpg",
      title: "Surveys to help the team be better",
      overview: "Get real-time insights into your team with research-backed, lightweight and regular surveys.",
      picture: "./dist/img/insights.jpg"
    }, {
      tableImg: "./dist/img/performance-review.jpg",
      title: "Reviews to help teammates get a fair evaluation",
      overview: "Make better compensation and promotion decision with objective and quick performance reviews.",
      picture: "./dist/img/review.jpg"
    }, {
      tableImg: "./dist/img/employee-recognition.jpg",
      title: "Praise to help teammates feel valued",
      overview: "Make it a habit to recognize and praise people who do great work.",
      picture: "./dist/img/recognition.jpg"
    }],
    started: [{
      title: "See Teambit for yourself. Get started in seconds 🎉",
      overview: "We are experiencing what Galuup calls 'an employee engagement crisis'. Just one-third of people at work are engaged.                                                       To improve performance and engagement companies rely on the same principles as industrial agefactories. But all those annual performance reviws and hundred-question surveys don't work anymore. People want regular feedback. Leaders who don't embrace this change end up with misaligned, disengaged and dwindling team.                                                We designed Teambit to change that. It empowers teams to make feedback a daily habit. Everybody knows what they are doing well and what they need to improve, leading to better performing, engaged and happier teams.                         We are on a mission to make worklife exciting. Come join us.",
      imgFound1: "./dist/img/alex.png",
      imgFound2: "./dist/img/bohdan.png",
      names: "Alex and Bohdan",
      jobs: "Co-Founders at Teambit",
      btnText1: "Sign up with Google",
      btnIcon1: "./dist/img/google-logo.svg",
      btnText2: "Sign up with Slack",
      btnIcon2: "./dist/img/slack-logo.svg",
      email: "or use your email address"
    }]
  }
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {}
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/app.js"],
/******/ 			["./src/app.scss"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknode_sass_teambit"] = self["webpackChunknode_sass_teambit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	__webpack_require__.x();
/******/ })()
;