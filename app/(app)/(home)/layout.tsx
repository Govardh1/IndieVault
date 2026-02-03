import { Footer } from "./footer"
import { NavBar } from "./navbar"


interface props{
	children:React.ReactNode,
}

function layout({children}:props) {
  return (
	<div className="flex flex-col min-h-screen">
		<NavBar/>
		<div className="flex-1 bg-[#f4f4f0]">
			{children}
		</div>
		<Footer/>
	</div>
  )
}

export default layout
