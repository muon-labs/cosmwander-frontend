import { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import { Grid, Typography, Container } from '@material-ui/core'

const styles = () => ({
  root: {},
  primary: {
    fontWeight: 800,
    fontFamily: 'Roboto Black'
  },
  secondary: {
    fontWeight: 300
  }
})

export interface SectionHeaderProps {
  classes: any
  primaryText: string
  secondaryText: string
  bottomMargin?: number
}

class SectionHeader extends Component {
  constructor (props: SectionHeaderProps) {
    super(props)
  }

  render () {
    const { classes, primaryText, secondaryText, bottomMargin } = this
      .props as SectionHeaderProps

    return (
      <div className={classes.root} style={{ marginBottom: bottomMargin }}>
        <Container maxWidth='md'>
          <Grid container spacing={3}>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Typography
                style={{ textAlign: 'center', opacity: 0.85 }}
                data-aos='fade-up'
                variant='h5'
                className={'main-text'}
              >
                {primaryText}
              </Typography>
              {secondaryText && (
                <Typography
                  style={{ textAlign: 'center', opacity: 0.5 }}
                  data-aos='fade-up'
                  variant='body1'
                  paragraph
                  className={'detail-text'}
                >
                  {secondaryText}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Container>
      </div>
    )
  }
}

// @ts-ignore
export default withStyles(styles)(SectionHeader)
