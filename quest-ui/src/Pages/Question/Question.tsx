import React from 'react'
import Styles from './Question.module.css'
const Question = () => {
  return (
    <div className={Styles.QuestionSection}>
         <div className={Styles.Left}>
          <h2>Frequently Asked Question </h2>
          <p className={Styles.LeftParagraph}> Can't see your questions here ? </p>
          <ul className={Styles.QuesLinks}>
            <li className={Styles.QuestionText}>
              <a  className={Styles.QuestionLink} href="/"> Send us an Email</a>
            </li>
            <li className={Styles.QuestionText}>
              <a className={Styles.QuestionLink} href="/">Start a Live Chat</a>
            </li>
          </ul>
        </div>
        <div className={Styles.Right}>
          <ul className={Styles.QuestionsGroup}>
            <li>
              <h2 className={Styles.QuestionSubHeading}> Can i try Quest for free ?</h2>
              <p className={Styles.QuestionParagraph}> Yes! Quest is free to try for 7days on us. We think you'll love it and will ask for payment details at the end of your trial.</p>
            </li>
            <li>
              <h2  className={Styles.QuestionSubHeading}> Are there discounts for non-profits or educational use?</h2>
              <p className={Styles.QuestionParagraph}> Yes! Quest is free for non-profit and educational use. Email use at any time during your trial let us know or as to check if you qualify.</p>
            </li>
            <li>
              <h2  className={Styles.QuestionSubHeading}> How are users counted for billing?</h2>
              <p className={Styles.QuestionParagraph}> At the end of the monthly billing cycle, you will be billed for the month for the number of users that can login to Quest. any users added during the month will not count for the purpose of billing until the following month. Quest admins may deactivate users at any time.</p>
            </li>
            <li>
              <h2  className={Styles.QuestionSubHeading}> What happens if am not satisfied with Quest ?</h2>
              <p className={Styles.QuestionParagraph}> We offer a 30-day money back guarantee.</p>
            </li>
          </ul>

        </div>
    </div>
  )
}

export default Question