import ComponentBase from './base';

export default class Example extends ComponentBase
{
    getConditions()
    {
        this.requireElement( 'body' );
        this.requireURL( /^https:\/\/www\.google/i );

        return true;
    }

    run()
    {
        console.log( 'It Works!' );
    }
}