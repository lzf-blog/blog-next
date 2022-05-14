// import { Client } from '@notionhq/client'
// import { NotionToMarkdown } from 'notion-to-md'
// import fs from 'fs-extra'
// import path from 'path'
//
// const notion = new Client({
//   auth: process.env.NOTION_AUTH
// })
// const n2m = new NotionToMarkdown({ notionClient: notion })
//
// export default async () => {
//   const response = await notion.databases.query({
//     database_id: process.env.NOTION_DATABASE_ID,
//     sorts: [
//       {
//         property: 'Created',
//         direction: 'ascending'
//       }
//     ]
//   })
//   for (let page of response.results) {
//     const mdBlocks = await n2m.pageToMarkdown(page.id);
//     const mdString = n2m.toMarkdownString(mdBlocks);
//     const {
//       id,
//       created_time,
//       last_edited_time,
//       cover,
//       url,
//       properties: {Title: {title: [{text: {content: title}}]}},
//     } = page;
//
//     const mdPath = path.join(process.cwd(),'/md/', `${title}.md`);
//     try {
//       fs.outputFile(mdPath, mdString);
//     } catch (err) {
//       console.error('outputMd', err);
//     }
//   }
// }
