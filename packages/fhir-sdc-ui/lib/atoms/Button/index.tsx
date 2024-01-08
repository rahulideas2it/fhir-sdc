import MUIButton from '@mui/material/Button'

interface Props {
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'
  size?: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => null
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = 'contained',
  size = 'medium',
  color = 'primary',
  label,
  onClick,
}: Props) => {
  return (
    <>
      <MUIButton variant={variant} color={color} size={size} onClick={onClick}>
        {label}
      </MUIButton>
    </>
  )
}
