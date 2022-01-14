import { IComment } from "../models/comments"
interface Props {
  comment: IComment
}

function MeetupComments({ comment }: Props) {
  return (
    <>
      <div className="comments">
        <p>
          <span>Posted:</span>
          {comment.timeAndDate}
          <span>Comment:</span>
          {comment.message}
        </p>
        <p>
          <span>Your rating:</span>
          {comment.newRating}
          &#11088;
        </p>
      </div>
    </>
  )
}

export default MeetupComments
