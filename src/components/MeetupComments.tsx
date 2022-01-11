import { IComment } from "../models/comments"
interface Props {
  comment: IComment
}

function MeetupComments({ comment }: Props) {
  return (
    <>
      <div>{comment.message}</div>
    </>
  )
}

export default MeetupComments
