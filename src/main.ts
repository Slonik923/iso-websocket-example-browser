import $ from 'jquery';
import { Connector } from '@excalibur-enterprise/rpc-websocket'

$( () =>
{
	console.info( '\'Excalibur Web Recorder\' loaded successfully' );
	const ws = new Connector( 'ws:localhost:8888' );

	ws.addEventListener( 'open', () => {
		console.log( 'open' );
	} );

	ws.addEventListener( 'message', (ms) => {
		console.log( 'message', ms );
	} );

	ws.addEventListener( 'close', (ms) => {
		console.log( 'close', ms );
	} );

	ws.addEventListener( 'error', (ms) => {
		console.log( 'error', ms );
	} );

} );
