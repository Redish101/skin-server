import React from 'react'
import styled from '@emotion/styled'
import Skeleton from 'react-loading-skeleton'

const ThickSkeleton = styled(Skeleton)`
  line-height: 2;
`

const LoadingRow: React.FC = () => (
  <tr>
    <td colSpan={6}>
      <ThickSkeleton />
    </td>
  </tr>
)

export default LoadingRow
