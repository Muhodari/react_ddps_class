import react from 'react'

// helpers 
import { calcTime , convertMoney} from '../../helpers'
// styles
import { Wrapper , Content } from './MovieInfoBar.styles'

const MovieInfoBar = ({time , Budget ,revenue }) => (
<Wrapper>
    <Content>
  <div className='column'>
      <p>running time: {calcTime(time)}</p>
  </div>

  <div className='column'>
      <p>Budget: {convertMoney(Budget)}</p>
  </div>
  <div className='column'>
      <p>Revenue: {convertMoney(revenue)}</p>
  </div>
    </Content>
</Wrapper>

)

export default MovieInfoBar