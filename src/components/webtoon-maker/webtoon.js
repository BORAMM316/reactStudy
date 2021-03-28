import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid;
`

const grayColor = css`
  font-size: 12px;
  color: #999;
`

const Image = styled.img``
const Title = styled.div`
  ${grayColor}
`
const Author = styled.div`
  ${grayColor}
`
const Badge = styled.div``

function Webtoon({ webtoon }) {
  const { title, author, description, isUp, imageUrl } = webtoon

  return (
    <Container>
      <Image src={imageUrl} />
      <Title>{title}</Title>
      <Author>{author}</Author>
      {isUp && <Badge>UP</Badge>}
    </Container>
  )
}

export default Webtoon
