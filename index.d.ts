declare module 'sequelize-temporal' { 
	interface Options { 
		blocking?:boolean,
		full?:boolean,
		excludeFields?: string[]
	}

	function output<T>(define:T, sequelize:any, options?:Options): T

	export = output;
}
