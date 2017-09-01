import React from 'react'
import { connect } from 'react-redux'
import { getNetWorth } from '../../selectors/accounts'
import { getBaseCurrency } from '../../selectors/currency'
import Amount from '../../components/Amount'

const NetWorth = ({ netWorth, baseCurrency }) =>
  <div className="net-worth__total">
    <Amount value={netWorth} code={baseCurrency} />
  </div>

const mapStateToProps = state => ({
  netWorth: getNetWorth(state),
  baseCurrency: getBaseCurrency(state)
})

export default connect(mapStateToProps)(NetWorth)