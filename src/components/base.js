export default class ComponentBase
{
    /**
     * Retrieve the condition to run the enhancer component.
     * Should be implemented in the components that extend this class and always return a value.
     * 
     * @returns {boolean}
     */
    getConditions()
    {
        return true;
    }

    /**
     * Require the current URL to match a regex pattern.
     * 
     * @param {object} regex - Regex pattern to match the current URL.
     * 
     * @return {void}
     */
    requireURL( regex )
    {
        const URL = window.location.href;

        if ( ! URL.match( regex ) )
        {
            throw `The current URL doesn't match the pattern ( ${ regex } )`;
        }
    }

    /**
     * Require a page to contain an element.
     * 
     * @param {string} selector - CSS selector.
     * 
     * @return {void}
     */
    requireElement( selector )
    {
        const element = this.find( selector );

        if ( ! element )
        {
            throw `A required element not found ( ${ selector } )`;
        }
    }

    /**
     * Find an element in the page using a CSS selector.
     * 
     * @param {string} selector - CSS selector.
     * 
     * @returns {HTMLElement|null}
     */
    find( selector )
    {
        return document.querySelector( selector );
    }

    /**
     * Run the actual enhancer code in the page.
     * Should be implemented in the components that extend this class.
     * 
     * @return {void}
     */
    run()
    {
        // TODO: Implement.
    }
}