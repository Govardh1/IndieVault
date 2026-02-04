import configPromise from '@payload-config'
import { getPayload } from 'payload'


import { Footer } from "./footer"
import { NavBar } from "./navbar"
import { SearchFilters } from "./search-filters"


interface props{
	children:React.ReactNode,
}

async function layout({children}:props) {
	 const payload=await getPayload({
		config:configPromise
	  })
	  const data=await payload.find({
		collection:"catagories",
	
		depth:1,
		where:{
		  parent:{
			exists:false
		  },
		}
	  })
  return (
	<div className="flex flex-col min-h-screen">
		<NavBar/>
		<SearchFilters data={data}/>
		<div className="flex-1 bg-[#f4f4f0]">
			{children}
		</div>
		<Footer/>
	</div>
  )
}

export default layout
