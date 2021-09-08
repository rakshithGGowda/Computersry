import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  '@keyframes testAnimation': {
    from: { 
            opacity: 0,
            transform: "translateY(100px)" 
          },
    to: { 
          opacity: 1,
          transform: "translateY(0)"
        },
  },
  root: {
    // maxWidth: 345, original width style
    Width: '100%',
    height:'100%',
    position:'relative',
    cursor: "pointer",
    transition: "transform .4s",
    animation: '$testAnimation 3000ms',
    "&:hover":{
      transform: "scale(1.05)",
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    position:"absolute",
    bottom:'0',
    right:'0',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
