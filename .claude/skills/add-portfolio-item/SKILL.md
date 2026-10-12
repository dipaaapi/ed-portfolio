---
name: add-portfolio-item
description: Add a project, certification, skill, work experience, hobby, or special-thanks entry to Ed's portfolio site. Use when the user asks to add/update/remove an item on any portfolio page.
---

# Add a portfolio item

Content lives as inline arrays at the top of each page component (no CMS, no JSON files).

| Content | File | Array |
|---|---|---|
| Projects | `pages/projects.tsx` | `projects` (title, fullTitle, category, description, quote, image, techStack[], liveLink?, repoLink?) |
| Certifications / documents | `pages/certifications.tsx` | `documents` |
| Skills / software / badges | `pages/skills.tsx` | skill, software, web-skill and badge arrays |
| Work experience | `pages/workxp.tsx` | experience array |
| Education | `pages/education.tsx` | education array |
| Hobbies (games, anime, manga) | `pages/hobbies.tsx` | games / anime / manga arrays |
| Special thanks | `pages/specialthanks.tsx` | thanks array |

## Steps

1. Open the target file and copy the shape of an existing entry exactly — match keys, quoting and ordering.
2. Put images under `public/` in the matching folder (e.g. `public/projects/<project>/`) and reference them with a leading `/` (e.g. `/projects/foo/cover.png`). Filenames are case-sensitive on Vercel/Linux — `booyamd1.PNG` is not `booyamd1.png`.
3. Remote images used with `next/image` need their host allowed in `next.config.js` (`images.remotePatterns`).
4. Use the Next 15 APIs: `<Image fill style={{ objectFit: 'cover' }} />` (not `layout`/`objectFit` props) and `<Link href className>` with no inner `<a>`.
5. Verify with `npm run typecheck` and `npm run build`; then check the page in the browser (see the `run-portfolio` skill).
