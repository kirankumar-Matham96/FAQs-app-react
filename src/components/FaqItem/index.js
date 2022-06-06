import './index.css'

const FaqItem = props => {
  const {faqDetails, onToggleExpand} = props
  const {id, questionText, answerText, isExpand} = faqDetails

  const onClickExpandButton = () => {
    onToggleExpand(id)
  }

  return (
    <li className="faq-item-container">
      <div className="faq-container">
        <h1 className="faq">{questionText}</h1>
        {isExpand ? (
          <button
            type="button"
            className="button"
            onClick={onClickExpandButton}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
              alt="minus"
              className="minus"
            />
          </button>
        ) : (
          <button
            type="button"
            className="button"
            onClick={onClickExpandButton}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
              alt="plus"
              className="plus"
            />
          </button>
        )}
      </div>
      {isExpand ? (
        <>
          <hr className="h-line" />
          <p className="faq-description">{answerText}</p>
        </>
      ) : null}
    </li>
  )
}

export default FaqItem
