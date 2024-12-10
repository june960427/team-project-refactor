import { BadgeWrapper } from './style'

interface CardBadgeProps {
  status?: string
  teamName?: string
  badgeContent?: string
}

function CardBadge({
  status = '직관완료',
  teamName = 'KIA',
  badgeContent = '',
}: CardBadgeProps) {
  return (
    <BadgeWrapper
      $teamName={teamName}
      $status={status}
    >
      <p>{teamName || badgeContent}</p>
    </BadgeWrapper>
  )
}

export default CardBadge
