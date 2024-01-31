import contentDictionary from '../json/contentDictionary.json';
import forEach from 'lodash/forEach';

export interface ParagraphImage {
  imageName: string,
  className: string,
}

export interface Paragraph {
  text: string,
  images?: ParagraphImage[],
}

export interface Section {
  sectionTitle?: string,
  paragraphs: Paragraph[],
}

export interface ArticleRecord {
  name: string,
  articleTitle?: string,
  sections: Section[],
}

export interface ContentDictionary {
  articles: ArticleRecord[],
}

interface ArticleRecordList {
  [key: string]: ArticleRecord,
}

const articles: ArticleRecordList = {};

forEach(contentDictionary.articles, (article) => articles[article.name] = article);

const content = {
  articles
}

export default content;