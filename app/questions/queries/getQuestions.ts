import { SessionContext } from "blitz"
import db, { FindManyQuestionArgs } from "db"

type GetQuestionsInput = {
  where?: FindManyQuestionArgs["where"]
  orderBy?: FindManyQuestionArgs["orderBy"]
  cursor?: FindManyQuestionArgs["cursor"]
  skip?: FindManyQuestionArgs["skip"]
  take?: FindManyQuestionArgs["take"]
  // Only available if a model relationship exists
  include?: FindManyQuestionArgs["include"]
}

// app/questions/queries/getQuestions.ts
export default async function getQuestions(
  { where, orderBy, cursor, take, skip }: GetQuestionsInput,
  ctx: Record<any, any> = {}
) {
  const questions = await db.question.findMany({
    where,
    orderBy,
    cursor,
    take,
    skip,
    include: { choices: true },
  })
  return questions
}
