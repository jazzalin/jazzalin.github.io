// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-brain-pickings",
          title: "brain pickings",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "projects-eventful-landings",
          title: 'Eventful landings',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/eventful_landings/";
            },},{id: "projects-escape-from-bennu",
          title: 'ESCAPE from Bennu',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/multi_particle_tracking/";
            },},];
