var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/tree/Desktop/gustavoca/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix3 = __toModule(require_remix());

// app/components/Header.tsx
init_react();
var import_react2 = __toModule(require("react"));
var import_remix2 = __toModule(require_remix());

// app/context/ThemeContext.tsx
init_react();
var import_react = __toModule(require("react"));
var ThemeContext = (0, import_react.createContext)({
  theme: "",
  setTheme: () => {
  }
});

// app/components/Header.tsx
var Header = () => {
  const { theme, setTheme } = (0, import_react2.useContext)(ThemeContext);
  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return /* @__PURE__ */ React.createElement("header", {
    className: "h-auto px-[22px] lg:h-[126px]"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "flex text-[18px] font-semibold gap-[20px] lg:gap-[40px] uppercase py-[50px] items-center flex-wrap justify-center"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/"
  }, "Home \u{1F3E0}")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/projects"
  }, "Projects \u{1F4BB}")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/blog"
  }, "Blog \u{1F4D7}")), /* @__PURE__ */ React.createElement("li", null, theme === "light" ? /* @__PURE__ */ React.createElement("section", {
    onClick: handleToggle
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-moon",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    strokeWidth: "2",
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /* @__PURE__ */ React.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"
  }))) : /* @__PURE__ */ React.createElement("section", {
    onClick: handleToggle
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-brightness-down",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    strokeWidth: "2",
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /* @__PURE__ */ React.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "5.01"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "17",
    y1: "7",
    x2: "17",
    y2: "7.01"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "19",
    y1: "12",
    x2: "19",
    y2: "12.01"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "17",
    y1: "17",
    x2: "17",
    y2: "17.01"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "12",
    y1: "19",
    x2: "12",
    y2: "19.01"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "7",
    y1: "17",
    x2: "7",
    y2: "17.01"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "5",
    y2: "12.01"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "7",
    y1: "7",
    x2: "7",
    y2: "7.01"
  })))))));
};
var Header_default = Header;

// route:/Users/tree/Desktop/gustavoca/app/root.tsx
var import_react3 = __toModule(require("react"));

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-ODPJX4DM.css";

// route:/Users/tree/Desktop/gustavoca/app/root.tsx
var meta = () => {
  return { title: "New Remix App" };
};
var links = () => {
  return [{ rel: "stylesheet", href: tailwind_default }];
};
function App() {
  const [theme, setTheme] = (0, import_react3.useState)("");
  (0, import_react3.useEffect)(() => {
    const actualTheme = localStorage.getItem("theme") ?? "light";
    setTheme(actualTheme);
  }, []);
  (0, import_react3.useEffect)(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: theme
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "bg-[#F9FAFB] text-black dark:bg-[#181818] dark:text-gray-200"
  }, /* @__PURE__ */ React.createElement(ThemeContext.Provider, {
    value: {
      theme,
      setTheme
    }
  }, /* @__PURE__ */ React.createElement(Header_default, null), /* @__PURE__ */ React.createElement("main", {
    className: "px-[22px] lg:px-[142px]"
  }, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null))), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}

// route:/Users/tree/Desktop/gustavoca/app/routes/projects/index.tsx
var projects_exports = {};
__export(projects_exports, {
  default: () => Projects,
  loader: () => loader,
  meta: () => meta2
});
init_react();
var import_remix4 = __toModule(require_remix());

// app/helpers/Project.server.ts
init_react();
var import_crypto = __toModule(require("crypto"));
var getPots = () => {
  const projects = [
    {
      title: "Gif App",
      img: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1",
      description: "Es una aplicaci\xF3n en donde puedes buscar los gifs que quieras. \u{1F409}",
      tags: ["react", "remix", "typescript"],
      id: import_crypto.default.randomUUID(),
      url: "https://gif-app.vercel.app/?title=christopher+robin"
    },
    {
      title: "Clients App",
      img: "https://f.hellowork.com/obs-static-images/seo/ObsJob/responsable-des-relations-client.jpg",
      description: "Es una aplicaci\xF3n en donde puedes registrar clientes, editar, eliminar, y actualizarlos \u{1F4E0}",
      tags: ["Deno", "oak", "mongodb", "react", "typescript"],
      id: import_crypto.default.randomUUID(),
      url: "https://clients-react-vite-typescript.vercel.app"
    },
    {
      title: "Posts App",
      img: "https://smashballoon.com/wp-content/uploads/2020/08/Types-of-Facebook-Posts-Proven-to-Easily-Boost-Page-Engagement.jpg",
      description: "Es una aplicaci\xF3n en donde puedes crearte una cuenta, iniciar sesi\xF3n y crear posts \u{1F4D3}",
      tags: ["express", "handlebars", "nodejs", "mongodb"],
      id: import_crypto.default.randomUUID(),
      url: "https://posts-app-node.herokuapp.com"
    },
    {
      title: "App de usuarios",
      img: "https://ayltoninacio.com.br/img/p/74w750.jpg",
      description: "Es una aplicaci\xF3n en donde puedes crear usuarios y listarlos. \u{1F9D1}\u200D\u{1F9B1}",
      tags: ["vue", "nodejs", "express"],
      id: import_crypto.default.randomUUID(),
      url: "https://base-de-datos-webapp.herokuapp.com"
    }
  ];
  return projects;
};
var Project_server_default = getPots;

// route:/Users/tree/Desktop/gustavoca/app/routes/projects/index.tsx
var meta2 = () => {
  return {
    title: "Projects",
    description: "Here I'm going to show you some of my projects"
  };
};
var loader = async () => {
  const projects = Project_server_default();
  return {
    projects
  };
};
function Projects() {
  const { projects } = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("section", {
    className: "sm:px-[54px] sm:py-[24px] font-semibold text-[34px] flex flex-col"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "pb-8"
  }, /* @__PURE__ */ React.createElement("h2", null, "Projects")), /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-col gap-y-[24px] flex-shrink-0"
  }, projects.map((project) => {
    return /* @__PURE__ */ React.createElement("article", {
      className: "grid grid-cols-1 sm:grid-cols-7 h-auto sm:h-[168px] gap-x-[10px]",
      key: project.id
    }, /* @__PURE__ */ React.createElement("a", {
      target: "_blank",
      href: project.url,
      className: "cols-span-1 sm:col-span-3"
    }, /* @__PURE__ */ React.createElement("figure", null, /* @__PURE__ */ React.createElement("img", {
      src: project.img,
      alt: project.title,
      className: "object-cover h-[168px]  max-w-full lg:w-[328px] mx-auto rounded"
    }))), /* @__PURE__ */ React.createElement("section", {
      className: "flex flex-col cols-span-1 sm:col-span-4 gap-y-[10px] justify-center flex-shrink-0"
    }, /* @__PURE__ */ React.createElement("header", {
      className: "text-[24px] font-bold uppercase"
    }, /* @__PURE__ */ React.createElement("h2", null, project.title)), /* @__PURE__ */ React.createElement("p", {
      className: "text-[18px]"
    }, project.description), /* @__PURE__ */ React.createElement("p", {
      className: "text-[16px]"
    }, "Link:", " ", /* @__PURE__ */ React.createElement("a", {
      target: "_blank",
      href: project.url === "https://gif-app.vercel.app/?title=christopher+robin" ? "https://gif-app.vercel.app/" : project.url
    }, project.url === "https://gif-app.vercel.app/?title=christopher+robin" ? "https://gif-app.vercel.app/" : project.url)), /* @__PURE__ */ React.createElement("div", {
      className: "flex flex-wrap gap-2"
    }, project.tags.map((tag) => /* @__PURE__ */ React.createElement("span", {
      className: "text-[18px]",
      key: tag
    }, "#", tag)))));
  })));
}

// route:/Users/tree/Desktop/gustavoca/app/routes/blog/index.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog,
  meta: () => meta3
});
init_react();
var meta3 = () => {
  return {
    title: "Blog",
    description: "This is my blog, this is the official site when eventally going to write articles"
  };
};
function Blog() {
  return /* @__PURE__ */ React.createElement("section", {
    className: "text-xl"
  }, /* @__PURE__ */ React.createElement("h1", null, "Blog"), /* @__PURE__ */ React.createElement("p", {
    className: "font-semibold"
  }, "This section is still in development..."));
}

// route:/Users/tree/Desktop/gustavoca/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  meta: () => meta4
});
init_react();
var meta4 = () => {
  return {
    title: "Home ",
    description: "This is my website, I'm Gustavo, Welcome here!"
  };
};
function Index() {
  return /* @__PURE__ */ React.createElement("section", {
    className: "grid grid-cols-1 lg:grid-cols-7 xl:px-[76px] items-center gap-[40px]"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-col items-center col-span-1 lg:col-span-4"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-[34px] lg:text-[68px]"
  }, "@gustavocadev"), /* @__PURE__ */ React.createElement("article", {
    className: "text-[22px]"
  }, /* @__PURE__ */ React.createElement("p", null, "I\u2019m a web developer learning the web funtamentals."), /* @__PURE__ */ React.createElement("p", null, "I like learning something new everyday, always doing my best."), /* @__PURE__ */ React.createElement("p", null, "I'm passionate about software and I use it to get up and push through everything."), /* @__PURE__ */ React.createElement("p", null, "I really like helping people through software."))), /* @__PURE__ */ React.createElement("figure", {
    className: "flex flex-col items-center col-span-1 lg:col-span-3"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/bclover.png",
    alt: ""
  })));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "e53dcba4", "entry": { "module": "/build/entry.client-CKPZTNXX.js", "imports": ["/build/_shared/chunk-ZDKUG7HP.js", "/build/_shared/chunk-YZVLR6ER.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-MM4C3NVU.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/index": { "id": "routes/blog/index", "parentId": "root", "path": "blog", "index": true, "caseSensitive": void 0, "module": "/build/routes/blog/index-43RKAAXX.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-LZZDFREN.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/projects/index": { "id": "routes/projects/index", "parentId": "root", "path": "projects", "index": true, "caseSensitive": void 0, "module": "/build/routes/projects/index-NLJSUTE6.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-E53DCBA4.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/projects/index": {
    id: "routes/projects/index",
    parentId: "root",
    path: "projects",
    index: true,
    caseSensitive: void 0,
    module: projects_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "root",
    path: "blog",
    index: true,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy90cmVlL0Rlc2t0b3AvZ3VzdGF2b2NhL2FwcC9yb290LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9IZWFkZXIudHN4IiwgIi4uL2FwcC9jb250ZXh0L1RoZW1lQ29udGV4dC50c3giLCAicm91dGU6L1VzZXJzL3RyZWUvRGVza3RvcC9ndXN0YXZvY2EvYXBwL3JvdXRlcy9wcm9qZWN0cy9pbmRleC50c3giLCAiLi4vYXBwL2hlbHBlcnMvUHJvamVjdC5zZXJ2ZXIudHMiLCAicm91dGU6L1VzZXJzL3RyZWUvRGVza3RvcC9ndXN0YXZvY2EvYXBwL3JvdXRlcy9ibG9nL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvdHJlZS9EZXNrdG9wL2d1c3Rhdm9jYS9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy90cmVlL0Rlc2t0b3AvZ3VzdGF2b2NhL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy90cmVlL0Rlc2t0b3AvZ3VzdGF2b2NhL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvdHJlZS9EZXNrdG9wL2d1c3Rhdm9jYS9hcHAvcm91dGVzL3Byb2plY3RzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvdHJlZS9EZXNrdG9wL2d1c3Rhdm9jYS9hcHAvcm91dGVzL2Jsb2cvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy90cmVlL0Rlc2t0b3AvZ3VzdGF2b2NhL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9wcm9qZWN0cy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcHJvamVjdHMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicHJvamVjdHNcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9ibG9nL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImJsb2dcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpbmtzRnVuY3Rpb24sXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvSGVhZGVyXCJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9Gb290ZXJcIlxuLy8gaW1wb3J0IHsgVGhlbWVDb250ZXh0UHJvdmlkZXIgfSBmcm9tIFwiLi9jb250ZXh0L1RoZW1lQ29udGV4dFwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tIFwifi9jb250ZXh0L1RoZW1lQ29udGV4dFwiXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vdGFpbHdpbmQuY3NzXCJcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6IFwiTmV3IFJlbWl4IEFwcFwiIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH1dXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShcIlwiKVxuICAvLyBjb25zdCBbdGhlbWVTdGF0ZSwgc2V0VGhlbWVTdGF0ZV0gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYWN0dWFsVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpID8/IFwibGlnaHRcIlxuICAgIC8vIGFjdHVhbFRoZW1lIHx8IHRoZW1lU3RhdGUgPyBzZXRUaGVtZShhY3R1YWxUaGVtZSkgOiBzZXRUaGVtZShcImxpZ2h0XCIpXG4gICAgc2V0VGhlbWUoYWN0dWFsVGhlbWUpXG4gICAgLy8gc2V0VGhlbWUoXCJsaWdodFwiKVxuXG4gICAgLy8gc2V0VGhlbWVTdGF0ZShmYWxzZSlcbiAgICAvLyBzZXRUaGVtZShhY3R1YWxUaGVtZSlcbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIHRoZW1lKVxuICB9LCBbdGhlbWVdKVxuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCIgY2xhc3NOYW1lPXt0aGVtZX0+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5IGNsYXNzTmFtZT1cImJnLVsjRjlGQUZCXSB0ZXh0LWJsYWNrIGRhcms6YmctWyMxODE4MThdIGRhcms6dGV4dC1ncmF5LTIwMFwiPlxuICAgICAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgIHRoZW1lLFxuICAgICAgICAgICAgc2V0VGhlbWUsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJweC1bMjJweF0gbGc6cHgtWzE0MnB4XVwiPlxuICAgICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICB7LyogPEZvb3RlciAvPiAqL31cbiAgICAgICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIlxuaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSBcIn4vY29udGV4dC9UaGVtZUNvbnRleHRcIlxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dClcblxuICBjb25zdCBoYW5kbGVUb2dnbGUgPSAoKSA9PiB7XG4gICAgLy8gdG9nZ2xlXG4gICAgc2V0VGhlbWUodGhlbWUgPT09IFwibGlnaHRcIiA/IFwiZGFya1wiIDogXCJsaWdodFwiKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImgtYXV0byBweC1bMjJweF0gbGc6aC1bMTI2cHhdXCI+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IHRleHQtWzE4cHhdIGZvbnQtc2VtaWJvbGQgZ2FwLVsyMHB4XSBsZzpnYXAtWzQwcHhdIHVwcGVyY2FzZSBweS1bNTBweF0gaXRlbXMtY2VudGVyIGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPkhvbWUgXHVEODNDXHVERkUwPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvcHJvamVjdHNcIj5Qcm9qZWN0cyBcdUQ4M0RcdURDQkI8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9ibG9nXCI+QmxvZyBcdUQ4M0RcdURDRDc8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICB7dGhlbWUgPT09IFwibGlnaHRcIiA/IChcbiAgICAgICAgICAgICAgPHNlY3Rpb24gb25DbGljaz17aGFuZGxlVG9nZ2xlfT5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gaWNvbi10YWJsZXIgaWNvbi10YWJsZXItbW9vblwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjI0XCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyIDNjLjEzMiAwIC4yNjMgMCAuMzkzIDBhNy41IDcuNSAwIDAgMCA3LjkyIDEyLjQ0NmE5IDkgMCAxIDEgLTguMzEzIC0xMi40NTR6XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8c2VjdGlvbiBvbkNsaWNrPXtoYW5kbGVUb2dnbGV9PlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXRhYmxlciBpY29uLXRhYmxlci1icmlnaHRuZXNzLWRvd25cIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIzXCI+PC9jaXJjbGU+XG4gICAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjEyXCIgeTE9XCI1XCIgeDI9XCIxMlwiIHkyPVwiNS4wMVwiPjwvbGluZT5cbiAgICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiMTdcIiB5MT1cIjdcIiB4Mj1cIjE3XCIgeTI9XCI3LjAxXCI+PC9saW5lPlxuICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9XCIxOVwiIHkxPVwiMTJcIiB4Mj1cIjE5XCIgeTI9XCIxMi4wMVwiPjwvbGluZT5cbiAgICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiMTdcIiB5MT1cIjE3XCIgeDI9XCIxN1wiIHkyPVwiMTcuMDFcIj48L2xpbmU+XG4gICAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjEyXCIgeTE9XCIxOVwiIHgyPVwiMTJcIiB5Mj1cIjE5LjAxXCI+PC9saW5lPlxuICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9XCI3XCIgeTE9XCIxN1wiIHgyPVwiN1wiIHkyPVwiMTcuMDFcIj48L2xpbmU+XG4gICAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjVcIiB5MT1cIjEyXCIgeDI9XCI1XCIgeTI9XCIxMi4wMVwiPjwvbGluZT5cbiAgICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiN1wiIHkxPVwiN1wiIHgyPVwiN1wiIHkyPVwiNy4wMVwiPjwvbGluZT5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uIH0gZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgVGhlbWVDb250ZXh0VHlwZSA9IHtcbiAgICB0aGVtZTogc3RyaW5nO1xuICAgIHNldFRoZW1lOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+Pjtcbn07XG5cbmNvbnN0IFRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8VGhlbWVDb250ZXh0VHlwZT4oe1xuICAgIHRoZW1lOiBcIlwiLFxuICAgIHNldFRoZW1lOiAoKSA9PiB7fSxcbn0pO1xuXG5leHBvcnQgeyBUaGVtZUNvbnRleHQgfTtcbiIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCBnZXRQcm9qZWN0cyBmcm9tIFwifi9oZWxwZXJzL1Byb2plY3Quc2VydmVyXCJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwifi90eXBlcy9Qcm9qZWN0XCJcblxuaW50ZXJmYWNlIExvYWRlckRhdGEge1xuICBwcm9qZWN0czogUHJvamVjdFtdXG59XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IFwiUHJvamVjdHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJIZXJlIEknbSBnb2luZyB0byBzaG93IHlvdSBzb21lIG9mIG15IHByb2plY3RzXCIsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzID0gZ2V0UHJvamVjdHMoKVxuICByZXR1cm4ge1xuICAgIHByb2plY3RzLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKCkge1xuICBjb25zdCB7IHByb2plY3RzIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KClcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzbTpweC1bNTRweF0gc206cHktWzI0cHhdIGZvbnQtc2VtaWJvbGQgdGV4dC1bMzRweF0gZmxleCBmbGV4LWNvbFwiPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJwYi04XCI+XG4gICAgICAgIDxoMj5Qcm9qZWN0czwvaDI+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLXktWzI0cHhdIGZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YXJ0aWNsZVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy03IGgtYXV0byBzbTpoLVsxNjhweF0gZ2FwLXgtWzEwcHhdXCJcbiAgICAgICAgICAgICAga2V5PXtwcm9qZWN0LmlkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgaHJlZj17cHJvamVjdC51cmx9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29scy1zcGFuLTEgc206Y29sLXNwYW4tM1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2plY3QuaW1nfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3Byb2plY3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciBoLVsxNjhweF0gIG1heC13LWZ1bGwgbGc6dy1bMzI4cHhdIG14LWF1dG8gcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29scy1zcGFuLTEgc206Y29sLXNwYW4tNCBnYXAteS1bMTBweF0ganVzdGlmeS1jZW50ZXIgZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gZm9udC1ib2xkIHVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgICAgICAgPGgyPntwcm9qZWN0LnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMThweF1cIj57cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTZweF1cIj5cbiAgICAgICAgICAgICAgICAgIExpbms6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17XG4gICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC51cmwgPT09XG4gICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL2dpZi1hcHAudmVyY2VsLmFwcC8/dGl0bGU9Y2hyaXN0b3BoZXIrcm9iaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcImh0dHBzOi8vZ2lmLWFwcC52ZXJjZWwuYXBwL1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHByb2plY3QudXJsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3Byb2plY3QudXJsID09PVxuICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vZ2lmLWFwcC52ZXJjZWwuYXBwLz90aXRsZT1jaHJpc3RvcGhlcityb2JpblwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImh0dHBzOi8vZ2lmLWFwcC52ZXJjZWwuYXBwL1wiXG4gICAgICAgICAgICAgICAgICAgICAgOiBwcm9qZWN0LnVybH1cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAge3Byb2plY3QudGFncy5tYXAoKHRhZykgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxOHB4XVwiIGtleT17dGFnfT5cbiAgICAgICAgICAgICAgICAgICAgICAje3RhZ31cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuIiwgImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwifi90eXBlcy9Qcm9qZWN0XCJcbmltcG9ydCBjcnlwdG8gZnJvbSBcImNyeXB0b1wiXG5cbmV4cG9ydCBjb25zdCBnZXRQb3RzID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0czogUHJvamVjdFtdID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIkdpZiBBcHBcIixcbiAgICAgIGltZzogXCJodHRwczovL2kwLndwLmNvbS93d3cucHJpbnRtYWcuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzAyLzRjYmU4ZF9mMWVkMjgwMGE0OTY0OTg0ODEwMmM2OGZjNWE2NmU1M212Mi5naWY/Zml0PTQ3NiUyQzI4MCZzc2w9MVwiLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiRXMgdW5hIGFwbGljYWNpXHUwMEYzbiBlbiBkb25kZSBwdWVkZXMgYnVzY2FyIGxvcyBnaWZzIHF1ZSBxdWllcmFzLiBcdUQ4M0RcdURDMDlcIixcbiAgICAgIHRhZ3M6IFtcInJlYWN0XCIsIFwicmVtaXhcIiwgXCJ0eXBlc2NyaXB0XCJdLFxuICAgICAgaWQ6IGNyeXB0by5yYW5kb21VVUlEKCksXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9naWYtYXBwLnZlcmNlbC5hcHAvP3RpdGxlPWNocmlzdG9waGVyK3JvYmluXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJDbGllbnRzIEFwcFwiLFxuICAgICAgaW1nOiBcImh0dHBzOi8vZi5oZWxsb3dvcmsuY29tL29icy1zdGF0aWMtaW1hZ2VzL3Nlby9PYnNKb2IvcmVzcG9uc2FibGUtZGVzLXJlbGF0aW9ucy1jbGllbnQuanBnXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJFcyB1bmEgYXBsaWNhY2lcdTAwRjNuIGVuIGRvbmRlIHB1ZWRlcyByZWdpc3RyYXIgY2xpZW50ZXMsIGVkaXRhciwgZWxpbWluYXIsIHkgYWN0dWFsaXphcmxvcyBcdUQ4M0RcdURDRTBcIixcbiAgICAgIHRhZ3M6IFtcIkRlbm9cIiwgXCJvYWtcIiwgXCJtb25nb2RiXCIsIFwicmVhY3RcIiwgXCJ0eXBlc2NyaXB0XCJdLFxuICAgICAgaWQ6IGNyeXB0by5yYW5kb21VVUlEKCksXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9jbGllbnRzLXJlYWN0LXZpdGUtdHlwZXNjcmlwdC52ZXJjZWwuYXBwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJQb3N0cyBBcHBcIixcbiAgICAgIGltZzogXCJodHRwczovL3NtYXNoYmFsbG9vbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDgvVHlwZXMtb2YtRmFjZWJvb2stUG9zdHMtUHJvdmVuLXRvLUVhc2lseS1Cb29zdC1QYWdlLUVuZ2FnZW1lbnQuanBnXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJFcyB1bmEgYXBsaWNhY2lcdTAwRjNuIGVuIGRvbmRlIHB1ZWRlcyBjcmVhcnRlIHVuYSBjdWVudGEsIGluaWNpYXIgc2VzaVx1MDBGM24geSBjcmVhciBwb3N0cyBcdUQ4M0RcdURDRDNcIixcbiAgICAgIHRhZ3M6IFtcImV4cHJlc3NcIiwgXCJoYW5kbGViYXJzXCIsIFwibm9kZWpzXCIsIFwibW9uZ29kYlwiXSxcbiAgICAgIGlkOiBjcnlwdG8ucmFuZG9tVVVJRCgpLFxuICAgICAgdXJsOiBcImh0dHBzOi8vcG9zdHMtYXBwLW5vZGUuaGVyb2t1YXBwLmNvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiQXBwIGRlIHVzdWFyaW9zXCIsXG4gICAgICBpbWc6IFwiaHR0cHM6Ly9heWx0b25pbmFjaW8uY29tLmJyL2ltZy9wLzc0dzc1MC5qcGdcIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIkVzIHVuYSBhcGxpY2FjaVx1MDBGM24gZW4gZG9uZGUgcHVlZGVzIGNyZWFyIHVzdWFyaW9zIHkgbGlzdGFybG9zLiBcdUQ4M0VcdURERDFcdTIwMERcdUQ4M0VcdUREQjFcIixcbiAgICAgIHRhZ3M6IFtcInZ1ZVwiLCBcIm5vZGVqc1wiLCBcImV4cHJlc3NcIl0sXG4gICAgICBpZDogY3J5cHRvLnJhbmRvbVVVSUQoKSxcbiAgICAgIHVybDogXCJodHRwczovL2Jhc2UtZGUtZGF0b3Mtd2ViYXBwLmhlcm9rdWFwcC5jb21cIixcbiAgICB9LFxuICAgIC8vIHtcbiAgICAvLyAgIHRpdGxlOiBcIkFwcCBkZSBDcnlwdG9tb25lZGFcIixcbiAgICAvLyAgIGltZzogXCJodHRwczovL2Rtbi1kYWxsYXMtbmV3cy1wcm9kLmNkbi5hcmNwdWJsaXNoaW5nLmNvbS9yZXNpemVyL0ZKcEJ4Yk0yQVZldHM4X04wcG5IaFJ3S2Vydz0vMTY2MHg5MzQvc21hcnQvZmlsdGVyczpub191cHNjYWxlKCkvY2xvdWRmcm9udC11cy1lYXN0LTEuaW1hZ2VzLmFyY3B1Ymxpc2hpbmcuY29tL2Rtbi9ER0VWMk9MSlNSSEs1S1ZJNFBUM1FIR0ZFQS5qcGdcIixcbiAgICAvLyAgIGRlc2NyaXB0aW9uOiBcIkVzIHVuYSBhcGxpY2FjaVx1MDBGM24gZW4gZG9uZGUgcHVlZGVzIGNvdGl6YXIgY3J5cHRvbW9uZWRhcy4gXHVEODNFXHVERTk5XCIsXG4gICAgLy8gICB0YWdzOiBbXCJyZWFjdFwiLCBcInZpdGVcIiwgXCJ0eXBlc2NyaXB0XCJdLFxuICAgIC8vICAgaWQ6IGNyeXB0by5yYW5kb21VVUlEKCksXG4gICAgLy8gICB1cmw6IFwiaHR0cHM6Ly9yZWFjdC1jcnlwdG9jb3Nhcy5uZXRsaWZ5LmFwcC9cIixcbiAgICAvLyB9LFxuICBdXG5cbiAgcmV0dXJuIHByb2plY3RzXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFBvdHNcbiIsICJpbXBvcnQgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIlxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogXCJCbG9nXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRoaXMgaXMgbXkgYmxvZywgdGhpcyBpcyB0aGUgb2ZmaWNpYWwgc2l0ZSB3aGVuIGV2ZW50YWxseSBnb2luZyB0byB3cml0ZSBhcnRpY2xlc1wiLFxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRleHQteGxcIj5cbiAgICAgIDxoMT5CbG9nPC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5UaGlzIHNlY3Rpb24gaXMgc3RpbGwgaW4gZGV2ZWxvcG1lbnQuLi48L3A+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG4iLCAiaW1wb3J0IHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCJcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogXCJIb21lIFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgbXkgd2Vic2l0ZSwgSSdtIEd1c3Rhdm8sIFdlbGNvbWUgaGVyZSFcIixcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy03IHhsOnB4LVs3NnB4XSBpdGVtcy1jZW50ZXIgZ2FwLVs0MHB4XVwiPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgY29sLXNwYW4tMSBsZzpjb2wtc3Bhbi00XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LVszNHB4XSBsZzp0ZXh0LVs2OHB4XVwiPkBndXN0YXZvY2FkZXY8L2gxPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJ0ZXh0LVsyMnB4XVwiPlxuICAgICAgICAgIDxwPklcdTIwMTltIGEgd2ViIGRldmVsb3BlciBsZWFybmluZyB0aGUgd2ViIGZ1bnRhbWVudGFscy48L3A+XG4gICAgICAgICAgPHA+SSBsaWtlIGxlYXJuaW5nIHNvbWV0aGluZyBuZXcgZXZlcnlkYXksIGFsd2F5cyBkb2luZyBteSBiZXN0LjwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEknbSBwYXNzaW9uYXRlIGFib3V0IHNvZnR3YXJlIGFuZCBJIHVzZSBpdCB0byBnZXQgdXAgYW5kIHB1c2hcbiAgICAgICAgICAgIHRocm91Z2ggZXZlcnl0aGluZy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+SSByZWFsbHkgbGlrZSBoZWxwaW5nIHBlb3BsZSB0aHJvdWdoIHNvZnR3YXJlLjwvcD5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBjb2wtc3Bhbi0xIGxnOmNvbC1zcGFuLTNcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvYmNsb3Zlci5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgPC9maWd1cmU+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonZTUzZGNiYTQnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LUNLUFpUTlhYLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1aREtVRzdIUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVlaVkxSNkVSLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1NTTRDM05WVS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvaW5kZXgnOnsnaWQnOidyb3V0ZXMvYmxvZy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nL2luZGV4LTQzUktBQVhYLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtTFpaREZSRU4uanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wcm9qZWN0cy9pbmRleCc6eydpZCc6J3JvdXRlcy9wcm9qZWN0cy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwcm9qZWN0cycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcHJvamVjdHMvaW5kZXgtTkxKU1VURTYuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1FNTNEQ0JBNC5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUcxQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7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
