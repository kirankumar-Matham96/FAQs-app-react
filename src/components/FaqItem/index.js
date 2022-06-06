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
        <p className="faq">{questionText}</p>
        <button type="button" className="button" onClick={onClickExpandButton}>
          +
        </button>
        {isExpand ? (
          <>
            <hr />
            <p className="faq-description">{answerText}</p>
          </>
        ) : null}
      </div>
    </li>
  )
}

export default FaqItem
