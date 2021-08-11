import react from 'react'
import propTypes from 'prop-types'

// helpers 
import { calcTime , convertMoney} from '../../helpers'
// styles
import { Wrapper , Content } from './MovieInfoBar.styles'

const MovieInfoBar = ({time , budget ,revenue }) => (
<Wrapper>
    <Content>
  <div className='column'>
      <p>running time: {calcTime(time)}</p>
  </div>

  <div className='column'>
      <p>Budget: {convertMoney(budget)}</p>
  </div>
  <div className='column'>
      <p>Revenue: {convertMoney(revenue)}</p>
  </div>
    </Content>
</Wrapper>

)

MovieInfoBar.propTypes= {
   time:propTypes.number,
   budget:propTypes.number,
   revenue:propTypes.number
}
export default MovieInfoBar