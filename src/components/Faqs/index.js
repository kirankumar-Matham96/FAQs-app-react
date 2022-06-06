import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      faqsList: props.faqsList,
    }
  }

  onToggleExpand = id => {
    this.setState(prevState => ({
      faqsList: prevState.faqsList.map(eachFaq =>
        eachFaq.id === id ? {...eachFaq, isExpand: !eachFaq.isExpand} : eachFaq,
      ),
    }))
  }

  render() {
    const {faqsList} = this.state

    return (
      <div className="bg-container">
        <div className="faqs-card-container">
          <h1 className="main-heading">FAQs</h1>
          <ul className="faqs-container">
            {faqsList.map(eachFaq => (
              <FaqItem
                faqDetails={eachFaq}
                key={eachFaq.questionText}
                onToggleExpand={this.onToggleExpand}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
