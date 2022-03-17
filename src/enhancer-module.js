import Example from './components/example';

export default class EnhancerModule {
	/**
     * Initialize the enhancer module.
     *
     * @return {void}
     */
	constructor() {
		this.components = {
			example: new Example(),
		};

		this.registerComponents();
	}

	/**
     * Register the enhancer components and run them conditionally.
     *
     * @return {void}
     */
	registerComponents() {
		Object.entries( this.components ).forEach( ( [ , component ] ) => {
			component.executeConditions();

			if ( component.shouldRun ) {
				component.run();
			}
		} );
	}
}
