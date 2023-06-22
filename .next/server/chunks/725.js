"use strict";
exports.id = 725;
exports.ids = [725];
exports.modules = {

/***/ 8725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./public/images/nyt.png
/* harmony default export */ const nyt = ({"src":"/_next/static/media/nyt.687cc529.png","height":163,"width":117,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAAAAAD/rdHkAAAAQ0lEQVR42gE4AMf/AOqAjNPjqQCsloFDAHMA8djdzOT3ALLBiZbi9QAj54aLyvUAOKrQ7P/bAMkAr9+UwQD/0F5Wv/+JCyDERdMxBAAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Layout.js






function Layout({ children , pageMeta , title , description  }) {
    const router = (0,router_.useRouter)();
    const meta = {
        title: title ? title : "NYT Best Seller Books",
        description: description ? description : "The New York Times Best Sellers are up-to-date and authoritative lists of the most popular books in the United States, based on sales in the past week, including fiction, non-fiction, paperbacks, children’s books, audiobooks, graphic books and more.",
        type: "website",
        ...pageMeta
    };
    if (router.isFallback) {
        /*#__PURE__*/ jsx_runtime.jsx("h1", {
            children: "Data is loading"
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: meta.description
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("header", {
                className: "px-3 py-3 border-bottom",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                    className: "d-flex align-items-center",
                    href: "/",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            className: "",
                            width: "39",
                            height: "54.33",
                            src: nyt,
                            alt: "logo"
                        }),
                        children
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container mt-5",
                children: router.pathname !== "/" && /*#__PURE__*/ jsx_runtime.jsx("button", {
                    className: "btn btn-outline-dark",
                    onClick: ()=>router.back(),
                    children: "Back"
                })
            })
        ]
    });
}


/***/ })

};
;