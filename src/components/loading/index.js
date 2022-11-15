import './index.css'

const Loading = (props) => {
  return (
    <div className={'container'} id={'loading'} style={{position: 'absolute'}}>
      <div className="lds-ellipsis" id={'loading-image'}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loading;