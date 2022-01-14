import { IComment } from "../models/comments"
interface Props {
  comment: IComment
}

function MeetupComments({ comment }: Props) {
  return (
    <>
      <div>
        <p>
          <span>Comment:</span>
          {comment.message}
        </p>
        <p>
          <span>Rating:</span>
          {comment.newRating}
        </p>
      </div>
    </>
  )
}

export default MeetupComments
