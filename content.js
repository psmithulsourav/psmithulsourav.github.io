function start() {
const rootElement =
React.createElement("nav",{ classname : "menu" },
React.createElement("ul", {classname : "menu" },
React.createElement("li", { },
React.createElement("a", {href : "/aboutme.html" }, "01.About Me")
),
React.createElement("li", { },
React.createElement("a", {href : "/apps.html" }, "02.Apps")
),
React.createElement("li", { },
React.createElement("a", {href : "/simulations.html" }, "03.Simulations")
),
React.createElement("li", { },
React.createElement("a", {href : "/resume.html" }, "04.Resume")
),
React.createElement("li", { },
React.createElement("a", {href : "/contact.html" }, "05.Contact")
)
)
)
ReactDOM.render(rootElement,
document.getElementById("mainContainer")
);
}
