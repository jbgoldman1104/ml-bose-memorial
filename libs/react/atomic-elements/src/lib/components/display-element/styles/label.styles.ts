import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  displayMedia: {
    marginRight: 'var(--pm-3XS)',
  },
  label: {
    display: 'flex',
    alignItems: 'flex-start',
    height: '100%',
    '&.highlighted': {
      color: 'hsla(var(--on-surface-color-hsl), 0.7)',
      fontSize: 'var(--tx-5XL)',
      fontWeight: '600',
      width: '100%',
    },
  },
  text: {
    height: '100%',
    wordWrap: 'break-word',
    overflow: 'auto',
  },
  highlighted: {
    width: '100%',
    height: '100%',
  },
}));
