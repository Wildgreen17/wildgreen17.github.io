# wildgreen17.github.io

Personal portfolio site, published with GitHub Pages at https://wildgreen17.github.io/.
It is plain HTML, CSS and a little JavaScript, so there is no build step.

## Pages

| Page | File |
| --- | --- |
| Home | `index.html` |
| About | `about.html` |
| Experience | `experience.html` |
| Software | `projects.html` |
| Writing & Media | `writing.html` |
| Tennis | `tennis.html` |
| Contact | `contact.html` |
| Not found | `404.html` |

## Folders

- `assets/css/style.css` holds the shared design: colours and type are defined once at the top.
- `assets/js/site.js` holds the site settings (see below) and the mobile menu.
- `assets/img/` holds images and the favicon. `assets/docs/` holds PDFs.
- `projects/` holds the ATP Tour 2022 analysis.
- `CSC466Project/`, `UVicInvitationals/` and `Invitationals-2026/` are older stand-alone mini-sites. They keep their own styling and link back to the main site.

## Turning on the Network button

Every "Network" button shows a "Coming soon" state until a login address is set.
Open `assets/js/site.js`, paste the network's login URL into `networkUrl`, and commit:

```js
var SITE_CONFIG = {
  networkUrl: "https://your-network.example/login"
};
```

All Network buttons then link there and the "Coming soon" label disappears.
