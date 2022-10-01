import React from 'react'
import Nav from '../src/components/Nav'
import { Container } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import config from '../config'

const styles = (theme: any) => ({
  root: {},
  //@ts-ignore
  toolbar: theme.mixins.toolbar
})

class Terms extends React.Component {
  constructor (props: any) {
    super(props)
  }

  render () {
    // @ts-ignore
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Nav />
        <div className={classes.toolbar} />
        <Container maxWidth='sm' style={{ textAlign: 'left' }}>
          <h2>{config.COMPANY_NAME} Terms of Service</h2>
          <h3>1. Terms</h3>
          <p>
            By accessing the website at{' '}
            <a href='{config.COMPANY_URL}'>{config.COMPANY_URL}</a>, you are
            agreeing to be bound by these terms of service, all applicable laws
            and regulations, and agree that you are responsible for compliance
            with any applicable local laws. If you do not agree with any of
            these terms, you are prohibited from using or accessing this site.
            The materials contained in this website are protected by applicable
            copyright and trademark law.
          </p>
          <h3>2. Use License</h3>
          <ol type='a'>
            <li>
              Permission is granted to temporarily download one copy of the
              materials (information or software) on {config.COMPANY_NAME}
              &apos;s website for personal, non-commercial transitory viewing
              only. This is the grant of a license, not a transfer of title, and
              under this license you may not:
              <ol type='i'>
                <li>modify or copy the materials;</li>
                <li>
                  use the materials for any commercial purpose, or for any
                  public display (commercial or non-commercial);
                </li>
                <li>
                  attempt to decompile or reverse engineer any software
                  contained on {config.COMPANY_NAME}&apos;s website;
                </li>
                <li>
                  remove any copyright or other proprietary notations from the
                  materials; or
                </li>
                <li>
                  transfer the materials to another person or &quot;mirror&quot;
                  the materials on any other server.
                </li>
              </ol>
            </li>
            <li>
              This license shall automatically terminate if you violate any of
              these restrictions and may be terminated by {config.COMPANY_NAME}{' '}
              at any time. Upon terminating your viewing of these materials or
              upon the termination of this license, you must destroy any
              downloaded materials in your possession whether in electronic or
              printed format.
            </li>
          </ol>
          <h3>3. Disclaimer</h3>
          <ol type='a'>
            <li>
              The materials on {config.COMPANY_NAME}&apos;s website are provided
              on an &apos;as is&apos; basis. {config.COMPANY_NAME} makes no
              warranties, expressed or implied, and hereby disclaims and negates
              all other warranties including, without limitation, implied
              warranties or conditions of merchantability, fitness for a
              particular purpose, or non-infringement of intellectual property
              or other violation of rights.
            </li>
            <li>
              Further, {config.COMPANY_NAME} does not warrant or make any
              representations concerning the accuracy, likely results, or
              reliability of the use of the materials on its website or
              otherwise relating to such materials or on any sites linked to
              this site.
            </li>
          </ol>
          <h3>4. Limitations</h3>
          <p>
            In no event shall {config.COMPANY_NAME} or its suppliers be liable
            for any damages (including, without limitation, damages for loss of
            data or profit, or due to business interruption) arising out of the
            use or inability to use the materials on {config.COMPANY_NAME}
            &apos;s website, even if {config.COMPANY_NAME} or a{' '}
            {config.COMPANY_NAME} authorized representative has been notified
            orally or in writing of the possibility of such damage. Because some
            jurisdictions do not allow limitations on implied warranties, or
            limitations of liability for consequential or incidental damages,
            these limitations may not apply to you.
          </p>
          <h3>5. Accuracy of materials</h3>
          <p>
            The materials appearing on {config.COMPANY_NAME}&apos;s website
            could include technical, typographical, or photographic errors.{' '}
            {config.COMPANY_NAME} does not warrant that any of the materials on
            its website are accurate, complete or current. {config.COMPANY_NAME}{' '}
            may make changes to the materials contained on its website at any
            time without notice. However {config.COMPANY_NAME} does not make any
            commitment to update the materials.
          </p>
          <h3>6. Links</h3>
          <p>
            {config.COMPANY_NAME} has not reviewed all of the sites linked to
            its website and is not responsible for the contents of any such
            linked site. The inclusion of any link does not imply endorsement by{' '}
            {config.COMPANY_NAME} of the site. Use of any such linked website is
            at the user&apos;s own risk.
          </p>
          <h3>7. Modifications</h3>
          <p>
            {config.COMPANY_NAME} may revise these terms of service for its
            website at any time without notice. By using this website you are
            agreeing to be bound by the then current version of these terms of
            service.
          </p>
          <h3>8. Governing Law</h3>
          <p>
            These terms and conditions are governed by and construed in
            accordance with the laws of San Francisco and you irrevocably submit
            to the exclusive jurisdiction of the courts in that State or
            location.
          </p>
        </Container>
        <div style={{ width: 0, height: 0 }}>
        <svg height='0' viewBox='0 0 200 188' width='0'>
          <defs>
            <clipPath
              clipPathUnits='objectBoundingBox'
              id='hex-hw-shapeclip-clipconfig'
              transform='scale(0.005 0.005319148936170213)'
            >
              <path d='M193.248 69.51C185.95 54.1634 177.44 39.4234 167.798 25.43L164.688 20.96C160.859 15.4049 155.841 10.7724 149.998 7.3994C144.155 4.02636 137.633 1.99743 130.908 1.46004L125.448 1.02004C108.508 -0.340012 91.4873 -0.340012 74.5479 1.02004L69.0879 1.46004C62.3625 1.99743 55.8413 4.02636 49.9981 7.3994C44.155 10.7724 39.1367 15.4049 35.3079 20.96L32.1979 25.47C22.5561 39.4634 14.0458 54.2034 6.74789 69.55L4.39789 74.49C1.50233 80.5829 0 87.2441 0 93.99C0 100.736 1.50233 107.397 4.39789 113.49L6.74789 118.43C14.0458 133.777 22.5561 148.517 32.1979 162.51L35.3079 167.02C39.1367 172.575 44.155 177.208 49.9981 180.581C55.8413 183.954 62.3625 185.983 69.0879 186.52L74.5479 186.96C91.4873 188.32 108.508 188.32 125.448 186.96L130.908 186.52C137.638 185.976 144.163 183.938 150.006 180.554C155.85 177.17 160.865 172.526 164.688 166.96L167.798 162.45C177.44 148.457 185.95 133.717 193.248 118.37L195.598 113.43C198.493 107.337 199.996 100.676 199.996 93.93C199.996 87.1841 198.493 80.5229 195.598 74.43L193.248 69.51Z'></path>
            </clipPath>
          </defs>
        </svg>
      </div>
      </div>
    )
  }
}

// @ts-ignore
export default withStyles(styles)(Terms)
