export type Mockups = {
	id: string;
	src: string;
};

export interface ProjectDetails {
	title: string;
	position: string;
	responsibilities: string;
	date: string;
	mockups: Mockups[];
	techStack: string[];
	problem: string;
}
