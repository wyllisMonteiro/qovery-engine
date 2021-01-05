const AOS           = require("aos")
const highlight     = require("./modules/highlight")

window.addEventListener("DOMContentLoaded", (event) => {
    AOS.init()
    highlight.rust()
});