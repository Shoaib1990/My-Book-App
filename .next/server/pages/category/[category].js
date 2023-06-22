"use strict";
(() => {
var exports = {};
exports.id = 694;
exports.ids = [694];
exports.modules = {

/***/ 4427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ Category),
  "getServerSideProps": () => (/* reexport */ getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__(8725);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/images/no_img_available.jpeg
/* harmony default export */ const no_img_available = ({"src":"/_next/static/media/no_img_available.8430a82a.jpeg","height":600,"width":423,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAvwf/xAAcEAACAgIDAAAAAAAAAAAAAAABAgMRAAQFEyL/2gAIAQEAAT8A1m5vvlSddMxW5RlLBqvyM//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z","blurWidth":6,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.css
var bootstrap = __webpack_require__(5931);
;// CONCATENATED MODULE: ./pages/category/[category].js






const API_KEY = "Ivryj03hT3u9h2GP5SVmH9TrQOKClUlN";
const getServerSideProps = async ({ params  })=>{
    const URL = `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${API_KEY}`;
    const res = await fetch(URL);
    const data = await res.json();
    const lists = data.results.lists.find((item)=>item.list_name_encoded == params.category);
    return {
        props: {
            lists
        }
    };
};
function Category({ lists  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Layout/* default */.Z, {
                title: lists.list_name,
                description: null
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                        className: "display-5 fw-bild my-4",
                        children: lists.list_name
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row",
                        children: lists.books.map((book, index)=>{
                            return /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-sm-4 mb-5",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "card mb-3 h-100",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            book.book_image ? /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                className: "rounded mx-auto d-block",
                                                width: "450",
                                                height: "450",
                                                src: book.book_image,
                                                alt: book.title
                                            }) : /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                className: "rounded card-img-top mx-auto d-block",
                                                width: "450",
                                                height: "450",
                                                src: no_img_available,
                                                alt: "image not avaialbe"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "card-body",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: "badge bg-danger",
                                                            children: book.rank
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                            className: "card-title",
                                                            children: book.title
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                            className: "card-text text-body-secondary",
                                                            children: [
                                                                "by ",
                                                                book.author
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: "card-text",
                                                            children: book.description
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            className: "btn btn-info",
                                                            target: "_blank",
                                                            href: book.buy_links[0].url,
                                                            children: book.buy_links[0].name
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            }, index);
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2Fcategory%2F%5Bcategory%5D&absolutePagePath=private-next-pages%2Fcategory%2F%5Bcategory%5D.js&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,592,61,725], () => (__webpack_exec__(4427)));
module.exports = __webpack_exports__;

})();