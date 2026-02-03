import { NavBar } from "./navbar"


interface props{
	children:React.ReactNode,
}

function layout({children}:props) {
  return (
	<div className="flex flex-col min-h-screen">
		<NavBar/>
		{children}
	</div>
  )
}

export default layout
