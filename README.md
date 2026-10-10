# wildgreen17.github.io

Personal portfolio site, published with GitHub Pages at https://oyster-lab.dev/.
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

## Project Oyster links

The "Project Oyster" button in the header and the Project Oyster panel on the home page link to
https://dashboard.oyster-lab.dev, https://status.oyster-lab.dev and https://docs.oyster-lab.dev.
To change them, search the HTML pages for `oyster-lab.dev`.

## Custom domain

The site is served from https://oyster-lab.dev (see the `CNAME` file). Leave `CNAME` and the domain's DNS
records as they are.
