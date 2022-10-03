import 'react'
import { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import {
  Grid,
  Typography,
  Container,
  Link,
  Divider,
  Theme
} from '@material-ui/core'
import config from '../../config'
import Image from 'next/image'

const styles = (theme: Theme) => ({
  root: {
    minHeight: 80,
    display: 'flex',
    flexDirection: 'column',
    marginTop: 'auto'
  },
  img: {
    maxWidth: 30,
    maxHeight: 30,
    marginRight: 8
  },
  leftMostText: {
    marginLeft: 'auto',
    marginRight: 16,
    // @ts-ignore
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  },
  linkText: {
    marginRight: '16px !important',
    // @ts-ignore
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  },
  bottom: {
    paddingBottom: 0,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 16
    }
  },
  logo: {
    marginTop: 0,
    [theme.breakpoints.down('sm')]: {
      marginTop: 16
    }
  }
})

class Footer extends Component {
  onClick = () => {
    window.location.href = '/'
  }

  render () {
    // @ts-ignore
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Divider style={{ background: config.PALETTE.BORDER_COLOR }}></Divider>
        <Container maxWidth='lg' style={{ display: 'flex', flexGrow: 1 }}>
          <Grid
            container
            spacing={0}
            style={{ display: 'flex', flexGrow: 1 }}
            justifyContent='center'
            alignItems='center'
            className={classes.bottom}
          >
            <Grid item xs={12} sm={4} md={3}>
              <Grid
                container
                spacing={0}
                className={classes.logo}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Image
                  alt='logo'
                  width={30}
                  height={30}
                  src={config.COMPANY_LOGO_URL}
                />
                <Typography
                  variant='h6'
                  display='inline'
                  style={{
                    fontWeight: 100,
                    marginLeft: 8,
                    fontFamily: 'Quicksand, Arial, Helvetica, sans-serif'
                  }}
                >
                  {config.DISPLAY_COMPANY_NAME}
                </Typography>
              </Grid>
            </Grid>

            <div style={{ marginRight: 'auto' }} />
            {/* <Typography className={classes.leftMostText} variant="body1"><Link style={{ display: 'block' }} href="/signup" >Sign up</Link></Typography>
                                    <Typography className={classes.linkText} variant="body1"><Link href="/login" >Log in</Link></Typography> */}
            {/* {config.SUPPORT_EMAIL && (
              <Typography className={classes.leftMostText} variant='body1'>
                <Link
                  style={{ fontFamily: 'Quicksand', textDecoration: 'none' }}
                  href={config.TWITTER_URL}
                >
                  Contact
                </Link>
              </Typography>
            )} */}
            {config.TWITTER_URL && (
              <Typography className={classes.linkText} variant='body1'>
                <Link
                  target='_blank'
                  style={{ fontFamily: 'Quicksand', textDecoration: 'none' }}
                  href={config.TWITTER_URL}
                >
                  Twitter
                </Link>
              </Typography>
            )}
            {/* {config.DISCORD_URL && <Typography className={classes.linkText} variant="body1"><Link style={{ fontFamily: 'Quicksand', textDecoration: 'none' }} href={config.DISCORD_URL} >Discord</Link></Typography>} */}
            {/* {config.BUY_ME_A_COFFEE_URL && <Typography className={classes.linkText} variant="body1"><Link style={{fontFamily: 'Quicksand',textDecoration: 'none'}} href={config.BUY_ME_A_COFFEE_URL} >Buy me a ☕️</Link></Typography>} */}
            <Typography className={classes.linkText} variant='body1'>
              <Link
                target='_blank'
                style={{ fontFamily: 'Quicksand', textDecoration: 'none' }}
                href='/privacy'
              >
                Privacy
              </Link>
            </Typography>
            <Typography className={classes.linkText} variant='body1'>
              <Link
                target='_blank'
                style={{ fontFamily: 'Quicksand', textDecoration: 'none' }}
                href='/terms'
              >
                Terms
              </Link>
            </Typography>
          </Grid>
        </Container>
      </div>
    )
  }
}

// @ts-ignore
export default withStyles(styles)(Footer)
