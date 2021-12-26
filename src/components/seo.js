/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            url
            description
            image
            openingHours
            telephone
            faxNumber
            areaServed {
              name
            }
            location {
              address {
                streetAddress
                addressLocality
                addressRegion
                postalCode
              }
            }
            slogan
          }
        }
      }
    `
  )

  const url = site.siteMetadata?.url
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const image = site.siteMetadata?.image
  const openingHours = site.siteMetadata?.openingHours
  const telephone = site.siteMetadata?.telephone
  const faxNumber = site.siteMetadata?.faxNumber
  const areaServed = site.siteMetadata?.areaServed?.name
  const locationStreet = site.siteMetadata?.location?.address?.streetAddress
  const locationLocality = site.siteMetadata?.location?.address?.addressLocality
  const locationRegion = site.siteMetadata?.location?.address?.addressRegion
  const locationCode = site.siteMetadata?.location?.address?.postalCode
  const slogan = site.siteMetadata?.slogan

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `image`,
          content: image,
        },
        {
          name: `og:image`,
          content: image,
        },
        {
          name: `openingHours`,
          content: openingHours,
        },
        {
          name: `telephone`,
          content: telephone,
        },
        {
          name: `faxNumber`,
          content: faxNumber,
        },
        {
          name: `areaServed`,
          content: areaServed,
        },
        {
          name: `location`,
          content: locationStreet +
            ", " +
            locationLocality +
            ", " +
            locationRegion +
            ". " +
            locationCode,
        },
        {
          name: `slogan`,
          content: slogan,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  image: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Seo