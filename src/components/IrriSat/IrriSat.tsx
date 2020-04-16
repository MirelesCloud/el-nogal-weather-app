
import * as React from 'react'
import { useState } from 'react'
import { IrriSatQuery } from '../../generated/graphql'
import { 
  ContentWrapper,
  Card,
  CardBody,
  ContainerList,
  ListItem
} from '../../Styles'

interface Props {
  data: IrriSatQuery;
}

const IrriSat: React.FC<Props> = ({ data }) => {
  const [option, setOption] = useState<string>("Select Date")
  console.log(option)

  const convert = (input: number) => {
    return input/25.4
  }
  return (
    <>
      <ContentWrapper>
      {!!data &&
        data.daily?.map((res) =>
        !!res && (
          <Card key={res.date!}>
            <CardBody>
              <ContainerList>
                <ListItem>{(res.date!).split("T00:00:00")}</ListItem>
                <ListItem>{res.description}</ListItem>
                <ListItem>Chance of Rain: {res.precipitation}%</ListItem>
                <ListItem>ET: {convert(res.et0!).toFixed(2)} inches</ListItem>
              </ContainerList>
            </CardBody>
          </Card>
        ))
      }
    </ContentWrapper>
    <ContentWrapper>
      <select value={option} onChange={( e: React.ChangeEvent<HTMLSelectElement>, ): void => setOption(e.target.value)} >
        {data?.mapsDates?.slice(0,52).map(res => 
          <option key={res?.date!} value={res?.date!}>{res?.date}</option>
          )
        }
      </select>
    </ContentWrapper>
    </>
  )
}

export default IrriSat