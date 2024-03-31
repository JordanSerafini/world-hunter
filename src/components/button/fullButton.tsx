
function fullButton(title: string, css?: string, onClick: () => void){
  return (
    <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${css}`} onClick={onClick}>
      {title}
    </button>
  )
}

export default fullButton