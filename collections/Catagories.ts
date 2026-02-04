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
		},
		{
			name:"slug",
			type:'text',
			required:true,
			unique:true,
			index:true
		},
		{
			name:"colour",
			type:"text"
		},
		{
			name:"parent",
			type:"relationship",
			relationTo:"catagories",
			hasMany:false
		},
		{
			name:"subcatagories",
			type:"join",
			collection:"catagories",
			on:"parent",
			hasMany:true
		}
	]
}