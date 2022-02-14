import React from 'react'
import { t } from '@/scripts/i18n'
import * as scoreUtils from './scoreUtils'

interface Props {
  isLoading: boolean
  lastSign: Date
  canSignAfterZero: boolean
  signGap: number
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const SignButton: React.FC<Props> = (props) => {
  const { lastSign, signGap, canSignAfterZero } = props
  const remainingTime = scoreUtils.remainingTime(
    lastSign,
    signGap,
    canSignAfterZero,
  )
  const remainingTimeText = scoreUtils.remainingTimeText(remainingTime)
  const canSign = remainingTime <= 0

  return (
    <button
      className="btn bg-gradient-primary pl-4 pr-4"
      role="button"
      disabled={!canSign || props.isLoading}
      onClick={props.onClick}
    >
      <i className="far fa-calendar-check" aria-hidden="true" /> &nbsp;
      {canSign ? t('user.sign') : remainingTimeText}
    </button>
  )
}

export default React.memo(SignButton)
