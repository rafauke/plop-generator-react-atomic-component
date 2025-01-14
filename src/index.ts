import { NodePlopAPI } from "node-plop";

import atomicComponent from "./atomicComponent";

export interface GeneratorConfig {
	createIndex: boolean;
	functional: boolean;
	basePath: string;
	withClassnameInterfaceImportPath: string;
	withStyleInterfaceImportPath: string;
	tests: boolean;
	stories: boolean;
	styledComponents: boolean;
	useNative: boolean;
	useMacro: boolean;
	templateIndex?: string;
	templateStory?: string;
	templateStyles?: string;
	templateTest?: string;
	templateComponentFunctional?: string;
	templateComponentClassBased?: string;
}

const generator = (
	plop: NodePlopAPI,
	config: Partial<GeneratorConfig>
): void => {
	const component = atomicComponent(config, plop);
	plop.setDefaultInclude({ generators: true });
	plop.setGenerator("atomic-component", component);
};

export default generator;
