import { Client } from '@notionhq/client'
import dayjs from 'dayjs'
import { NotionToMarkdown } from 'notion-to-md'
import readingTime from 'reading-time'

const notion = new Client({ auth: process.env.NOTION_AUTH })
const n2m = new NotionToMarkdown({ notionClient: notion })

const getBlogPostContent = async id => {
  const [md, prop] = await Promise.all([getMDString(id), getPageProperties(id)])
  return {
    ...prop,
    content: md,
    readingTime: readingTime(md).text
  }
}

async function getMDString(id) {
  const blocks = await n2m.pageToMarkdown(id)
  return n2m.toMarkdownString(blocks)
}

async function getPageProperties(pageId) {
  const page = await notion.pages.retrieve({ page_id: pageId })
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
}

export default getBlogPostContent
