module.exports = {
  siteMetadata: {
    title: "Jarrod Semmens Window Cleaning in Tahoe City, CA",
    siteUrl: "https://www.jarrodsemmenswindowcleaning.com",
    url: "https://www.jarrodsemmenswindowcleaning.com", // No trailing slash allowed!
    description: "Jarrod Semmens Window Cleaning can supply you with a thorough washing of your windows inside and out. From our high-quality, professional staff to our effective cleaning techniques, you'll get the satisfaction of gleaming, sparkling results from a locally owned and operated company.",
    image: 'https://jarrodsemmenswindowcleaning.s3.us-west-1.amazonaws.com/jswc-og_image.jpg',
    openingHours: 'Mo, Tu, We, Th, Fr 09:00-17:00',
    telephone: '(530) 581-1987',
    faxNumber: '(530) 581-1981',

    areaServed: {
      "@type": "Place",
      "name": [
        "Tahoe City",
        "Meeks Bay",
        "Tahoma",
        "Homewood",
        "Tahoe Pines",
        "Timberland",
        "Dollar Point",
        "Ridgewood",
        "Carnelian Bay",
        "Kings Beach",
        "Incline Village",
        "Alpine Meadows",
        "Olympic Valley",
        "Truckee",
        "Northstar",
        "Donner Lake",
        "Glenshire",
        "South Lake Tahoe",
      ]
    },
    // paymentAccepted: 'Cash, deductibles, co-pays, co-insurance',
    location: {
      '@type': 'Place',
      'address': {
        "@type": "PostalAddress",
        "streetAddress": "3055 Cedarwood Dr",
        "addressLocality": "Tahoe City",
        "addressRegion": "CA",
        "postalCode": "96145",
      }
    },
    slogan: 'We’re your local number one source in Window Cleaning in Tahoe City and surrounding areas.',
    // gsv: 't-GHhCwvq1SjOG3qV4JFNZpOo_6c5og1i1UlH_WvIOw'
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-plugin-netlify",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        mergeStyleHashes: false, // you can disable styles sha256 hashes
        mergeScriptHashes: false,
        directives: {
          "script-src": "'self' 'unsafe-inline'",
          "style-src": "'self' 'unsafe-inline' *.typekit.net",
          "font-src": "'self' use.typekit.net",
        }
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Jarrod Semmens Window Cleaning",
        short_name: `JSWC`,
        start_url: `/`,
        theme_color: `#0e6729`,
        icon: "src/images/icon.png",
      },
    },
  ],
};
