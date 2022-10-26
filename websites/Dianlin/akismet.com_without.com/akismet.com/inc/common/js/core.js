jQuery( function ( $ ) {
	$( '.drawer-label' ).click( function () {
		$( '.main-nav' ).slideToggle( 100 );
	});

	if ( typeof SANDBOXED !== 'undefined' && SANDBOXED ) {
		$( 'body' ).append( $( '<span style="background:#FF0073; color:#fff; padding:5px 10px; position:fixed; top:10px; left:10px; z-index:1000;"/>' ).text( sandboxed_label ) );
	}

	if ( typeof user_id !== 'undefined' ) {
		akismet_tracks_identify( user_id );
	}

	if ( typeof window.akismetDeferred !== 'undefined' ) {
		for ( var i = 0; i < window.akismetDeferred.length; i++ ) {
			window.akismetDeferred[i]();
		}

		window.akismetDeferred = [];
	}
});

jQuery( "#plan_button_personal" ).click( function() { akismet_tracks_event( 'akismet_plan_selection_basic' ); } );
jQuery( "#plan_button_pro" ).click( function() { akismet_tracks_event( 'akismet_plan_selection_plus' ); } );
jQuery( "#plan_button_enterprise" ).click( function() { akismet_tracks_event( 'akismet_plan_selection_enterprise' ); } );
jQuery( "#plan_button_enterprise_plus" ).click( function() { akismet_tracks_event( 'akismet_plan_selection_enterprise_plus' ); } );

( function() {
	'use strict';

	var cbk = window.cookieBannerKit;

	function fireFacebook() {
		cbk.loadFacebook();
		fbq( 'init', '485349158311379' );
		fbq( 'track', "PageView" );
	}

	function fireGoogleAnalytics( id ) {
		cbk.loadGoogleAnalytics();
		ga( 'create', id );
		ga( 'send', 'pageview' );
	}

	function fireGoogleTagManager( gtm_id ) {
		cbk.loadGoogleTagManager( gtm_id );
	}

	// ------- Fire Normal Pixels -------
	// None

	if ( cbk.doNotTrack() ) {
		return;
	}

	// ------- Fire "Sensitive" Pixels -------
	jQuery( window.document ).on( 'a8c-cookie-banner:fire-sensitive-pixels', function() {
		fireGoogleTagManager( 'GTM-NLFBXG5' );

		fireFacebook();

		fireGoogleAnalytics( 'UA-19309600-2' );

		cbk.fireAdWords( {
			google_conversion_id: 937350433,
			google_remarketing_only: true,
			google_custom_params: window.google_tag_params
		} );

		if ( typeof adTracking !== 'undefined' ) {
			for ( var i = 0; i < adTracking.length; i++ ) {
				cbk.fireAdWords( {
					google_conversion_id: 937350433,
					google_conversion_language: "en",
					google_conversion_format: "3",
					google_conversion_color: "ffffff",
					google_conversion_label: "BWHhCMCstGIQoar7vgM",
					google_remarketing_only: false
				} );

				fbq( 'track', 'Purchase', { value: adTracking[i], currency: 'USD' } );
			}
		}
	} );
} )();

// If cookie banner does not need to be shown for any reason
// we don't even request the script and just fire the fire-pixels
// event on document ready.
jQuery( function( $ ) {
	if ( cb_allowSensitivePixels ) {
		jQuery( window.document ).trigger( 'a8c-cookie-banner:fire-sensitive-pixels' );
	}
});
