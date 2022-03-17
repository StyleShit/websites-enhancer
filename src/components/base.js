export default class ComponentBase {
	/**
	 * Initialize the component.
	 *
	 * @returns {void}
	 */
	constructor() {
		/**
         * Determine if the enhancer should run.
         *
         * @type {boolean}
         * @public
         */
		this.shouldRun = true;
	}

	/**
     * Retrieve the condition to run the enhancer component.
     * Should be implemented in the components that extend this class and always return a value.
     *
     * @returns {boolean}
     */
	getConditions() {
		return true;
	}

	/**
     * Execute the conditions & requirements to run the enhancer.
     *
     * @return {void}
     */
	executeConditions() {
		this.shouldRun = true;

		const condition = this.getConditions();

		this.shouldRun = this.shouldRun && condition;
	}

	/**
     * Require the current URL to match a regex pattern.
     *
     * @param {object} regex - Regex pattern to match the current URL.
     *
     * @return {void}
     */
	requireURL( regex ) {
		const URL = window.location.href;

		if ( ! URL.match( regex ) ) {
			this.shouldRun = false;
		}
	}

	/**
     * Require a page to contain an element.
     *
     * @param {string} selector - CSS selector.
     *
     * @return {void}
     */
	requireElement( selector ) {
		const element = this.find( selector );

		if ( ! element ) {
			this.shouldRun = false;
		}
	}

	/**
     * Find an element in the page using a CSS selector.
     *
     * @param {string} selector - CSS selector.
     *
     * @return {HTMLElement|null}
     */
	find( selector ) {
		return document.querySelector( selector );
	}

	/**
     * Run the actual enhancer code in the page.
     * Should be implemented in the components that extend this class.
     *
     * @return {void}
     */
	run() {
		// TODO: Implement.
	}
}
