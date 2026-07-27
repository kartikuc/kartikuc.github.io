/*
  ═══════════════════════════════════════════════════════════
  HOW TO ADD A NEW PHOTO
  ═══════════════════════════════════════════════════════════
  1. Drop your image file into the /photos folder.
  2. Copy the block below, paste it at the TOP of the POSTS
     array (newest first), fill in the fields, done.
  3. Save. Refresh the page. That's it — no other file
     needs to change.

  {
    img:   "photos/your-file.jpg",   // path inside /photos
    title: "A short title",
    date:  "March 2026",             // shown as-is, any format
    story: "The story behind it. Can be a sentence or a
            few paragraphs — write it however you'd say it."
  },

  Notes:
  - Keep the comma after each block except the very last one.
  - "date" is just a label — write "March 2026", "Somewhere, 2025",
    whatever reads best. It's not parsed as a real date.
  - This file only runs in the visitor's browser and has no
    connection to any account, login, or database — the only
    way anyone edits this page is by editing this file directly
    in the repo, so nobody but you can ever change it.
  ═══════════════════════════════════════════════════════════
*/

const POSTS = [
  {
    img: "photos/blog (9).jpg",
    title: "Snapshot #9",
    date: "—",
    story: ""
  },
  {
    img: "photos/blog (8).jpg",
    title: "Snapshot #8",
    date: "—",
    story: ""
  },
  {
    img: "photos/blog (7).jpg",
    title: "Snapshot #7",
    date: "—",
    story: ""
  },
  {
    img: "photos/blog (6).jpg",
    title: "Snapshot #6",
    date: "—",
    story: ""
  },
  {
    img: "photos/blog (5).jpg",
    title: "Snapshot #5",
    date: "—",
    story: ""
  },
  {
    img: "photos/blog (4).jpg",
    title: "Snapshot #4",
    date: "—",
    story: ""
  },
  {
    img: "photos/blog (3).jpg",
    title: "Snapshot #3",
    date: "—",
    story: ""
  },
  {
    img: "photos/blog (2).jpg",
    title: "Snapshot #2",
    date: "—",
    story: ""
  },
  {
    img: "photos/blog (1).jpg",
    title: "Snapshot #1",
    date: "—",
    story: ""
  }
];
