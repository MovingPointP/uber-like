import React from 'react';
import { Fragment } from "react"

type Props = { match: { params :{restaurantsId: string} } }

export const Foods = ({ id }: {id: string}) => {
  return (
    <Fragment>
      フード一覧
      <p>
        restaurantsIdは{ id }
      </p>
    </Fragment>
  )
}