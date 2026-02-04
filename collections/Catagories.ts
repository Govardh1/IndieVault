import type{CollectionConfig} from "payload"


export const Catagories : CollectionConfig={
	slug:"catagories",
	// access:{
	// 	create:()=>false,
	// 	update:()=>false

	// },
	fields:[
		{
			name:"name",
			type:"text",
			required:true,
		}
	]
}