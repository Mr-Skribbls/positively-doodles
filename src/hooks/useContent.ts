import { isNil } from "lodash"
import content, { ArticleRecord, Section } from "../services/content.service"

const findArticle = (articleName:string):ArticleRecord | undefined => content.articles[articleName]

const findSection = (article: ArticleRecord|undefined, sectionTitle:string):Section | undefined => {
  if(isNil(article)) return

  return article.sections.find((section) => section.sectionTitle === sectionTitle)
}

const useContent = () => {
  return {
    findArticle,
    findSection,
  }
}

export default useContent;