import React from 'react'
import { FormattedMessage } from 'react-intl'
import styles from '../Education/education.module.css'
import EducationItem from '../EducationItem/EducationItem'

function Education() {
  return (
    <div className={styles.container}>
      <h3 className={styles.mainTitle}>
        <FormattedMessage id="educationTitle" />
      </h3>
      <EducationItem />
    </div>
  )
}

export default Education
