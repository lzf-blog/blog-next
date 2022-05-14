import { Client } from '@notionhq/client'
import dayjs from 'dayjs'

const notion = new Client({
  auth: process.env.NOTION_AUTH
})
const getBlogPosts = async ({ size = 100 } = {}) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    sorts: [
      {
        property: 'Created',
        direction: 'descending'
      }
    ],
    page_size: size
  })
  const posts = response.results.map(page => {
    const {
      id,
      created_time: createdTime,
      last_edited_time: updatedTime,
      cover,
      url,
      properties: {
        Title: {
          title: [
            {
              text: { content: title }
            }
          ]
        },
        Tags: { multi_select: tags },
        Intro: { rich_text: intro }
      }
    } = page

    return {
      id,
      createdTime: dayjs(createdTime).format('YYYY/MM/DD'),
      updatedTime: dayjs(updatedTime).format('YYYY/MM/DD'),
      title,
      intro: intro[0]?.text.content ?? '',
      tags: tags?.map(({ name }) => name) ?? []
    }
  })
  return posts
}

export default getBlogPosts
