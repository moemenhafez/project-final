import { Oval } from 'react-loader-spinner'

function Spinner() {
  return (
    <div
      className="
        flex
        items-center
        justify-center
      "
    >
      <Oval
        height={24}
        width={24}
        color="#ffffff"
        secondaryColor="#d1fae5"
        strokeWidth={4}
      />
    </div>
  )
}

export default Spinner