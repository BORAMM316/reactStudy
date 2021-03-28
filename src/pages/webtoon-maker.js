import React from 'react'

import Form from '../components/webtoon-maker/form'
import Webtoon from '../components/webtoon-maker/webtoon'

function WebtoonMaker() {
  // state
  return (
    <div>
      <Form />
      <Webtoon
        webtoon={{
          title: '블라븝ㄹ라',
          author: 'ㅂ러ㅏㄴ어ㅏ리너아ㅣ',
          description: 'ㄴㅇ러ㅏㄴ어라ㅣ',
          isUp: true,
          imageUrl: '',
        }}
      />
    </div>
  )
}

export default WebtoonMaker
