const UnorderedList = ({ children, gap = "gap-4" }) => {
  return (
    <ul className={`flex flex-wrap ${gap} justify-center`}>
      {children}
    </ul>
  )
}

export default UnorderedList
