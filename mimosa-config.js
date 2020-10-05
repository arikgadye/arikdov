exports.config = {
  modules:[
  "copy",
  "rename",
  "less",
  "hogan-static",
  "minify-html",
  "minify-img",
  "minify-css"],
  copy: {
    extensions:["png", "html","js", "jpg", "ico",
    "eot", "svg", "ttf", "woff", "woff2", "gif", "tiff"]
  },
  minifyHtml: {
    options: {
      collapseWhitespace: true,
      removeComments: true,
      removeEmptyAttributes: true
    }
  },
  minifyImg: {
    options: {
      interlaced: false,
      progressive: false,
      optimizationLevel: 2
    },
    exts: [ "gif","jpeg","jpg","png", "tiff" ]
  },
  rename: {
    map:[
    [/public\/html\/([a-z]+)\.html$/, "$1.html"]
    ]
  },
  hoganStatic: {
    partials:["html/partials"],
    globals: {
      version: "2.3.32"
    },
    contexts: {
      turtlemania: {
        title:"ELECTRIC TURTLES Scripture",
        desc:"ELECTRIC TURTLES Scripture",
      },
      press: {
        title:"Arik Dov Contact",
        desc:"Arik Dov Contact",
      },
      live: {
        title:"Arik Dov Live",
        desc:"ELECTRIC TURTLES Live",
      },
      pictures: {
        title:"ELECTRIC TURTLES Pictures",
        desc:"ELECTRIC TURTLES Pictures",
      },
      videos: {
        title:"Arik Dov Videos",
        desc:"Arik Dov Videos",
      },

      turtletimecapsule: {
        title:"ELECTRIC TURTLES TIME CAPSULE",
        desc: "GO BACK IN TURTLE TIME",
      },
      index: {
        title:"Arik Dov Official Website",
        desc: "Arik Dov Music",
      },
      main: {
        title:"ELECTRIC TURTLES",
        desc: "ELECTRIC TURTLES",
      },
       music: {
        title:"Arik Dov Music",
        desc: "Arik Dov",
      },
      epk: {
        title: "Arik Dov EPK",
        desc: "Arik Dov EPK",
      },
      about: {
        title: "Arik Dov About",
        desc: "About Arik Dov"
      }
    }
  }
}
