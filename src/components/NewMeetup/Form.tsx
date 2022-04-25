interface Props {
  onClick: () => void
  title: string
  setTitle: (title: string) => void
  description: string
  setDescription: (description: string) => void
  date: string
  setDate: (date: string) => void
  time: string
  setTime: (time: string) => void
  location: string
  setLocation: (location: string) => void
  comment: Array<any>
  setComment: (comment: Array<any>) => void
  attend: number
  setAttend: (attend: number) => void
}

const Form = ({
  onClick,
  title,
  setTitle,
  description,
  setDescription,
  date,
  setDate,
  time,
  setTime,
  location,
  setLocation
}: Props) => {
  return (
    <>
      <div className="new-meetup-form">
        <div className="form-input">
          <label test-data="title">
            <input
              placeholder="Title"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
          <label test-data="description">
            <input
              placeholder="Description"
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
          <label test-data="date">
            <input
              placeholder="Date"
              type="text"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </label>
          <label test-data="time">
            <input
              placeholder="Time"
              type="text"
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />
          </label>
          <label test-data="location">
            <input
              placeholder="Location"
              type="text"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
          </label>
        </div>
        <div>
          <button
            className="form-btn"
            test-data="new-meetup-button"
            onClick={onClick}
          >
            Add new meetup
          </button>
        </div>
      </div>
    </>
  )
}

export default Form
