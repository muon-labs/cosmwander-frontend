function Balance ({ balance }) {
  if (!balance.length) return null
  const { amount, denom } = balance[0]
  return (
    <span>
      {amount} {denom}
    </span>
  )
}

export default Balance
