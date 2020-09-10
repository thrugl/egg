declare interface Data {
	[key: string]: any;
}

declare type Emit = (event: string, ...args: any[]) => void

declare interface Option {
	text: string;
	value: any;
	disabled?: boolean;
	selected?: boolean;
	label?: string;
}