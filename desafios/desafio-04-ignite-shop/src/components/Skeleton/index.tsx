import React from 'react'
import ContentLoader from 'react-content-loader'

const HeadBodyGrid = ({ ...rest }) => (
  <ContentLoader
    width={584}
    height={'100%'}
    viewBox="0 0 800 575"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...rest}
  >
    <rect x="12" y="58" rx="2" ry="2" width="584" height="211" />
  </ContentLoader>
)

export default HeadBodyGrid
