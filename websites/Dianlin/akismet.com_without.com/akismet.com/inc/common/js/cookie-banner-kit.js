(function() {
	'use strict';
	window.cookieBannerKit = {
		doNotTrack: function() {
			// Internet Explorer 11 uses window.doNotTrack rather than navigator.doNotTrack.
			// Safari 7.1.3+ uses window.doNotTrack rather than navigator.doNotTrack.
			// MDN ref: https://developer.mozilla.org/en-US/docs/Web/API/navigator/doNotTrack#Browser_compatibility
			return ( window.doNotTrack === '1' || ( window.navigator && window.navigator.doNotTrack === '1' ) );
		},
		createScriptElement: function( url, attrs, onLoad, onError ) {
			var script = document.createElement( 'script' ); 
			script.src = url;
			script.type = 'text/javascript';
			script.async = true;
			script.onload = onLoad;
			script.onerror = onError;
			jQuery.each( attrs, function( key, val ) {
				script.setAttribute( key, val );
			});
			return script;
		},
		attachToBody: function( element ) {
			document.body.appendChild( element );
			return element;
		},
		attachScriptElement: function( url, attrs, onLoad, onError ) {
			return this.attachToBody( this.createScriptElement( url, attrs, onLoad, onError ) );
		},
		loadPixelImage: function( url ) {
			return jQuery( '<img>', {
				src: url,
				width: 1,
				height: 1,
				border: 0,
			});
		},
		appendIFrame: function( url ) {
			var $iframe = jQuery( '<iframe/>' );
			$iframe.attr( 'src', url );
			$iframe.attr( 'width', '1' );
			$iframe.attr( 'height', '1' );
			$iframe.attr( 'frameborder', '0' );
			$iframe.css( 'display', 'none' );
			jQuery( '#wpcom-ad-tracking' ).append( $iframe );
			return $iframe;
		},
		loadGoogleAnalytics: function() {
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		},
		loadGoogleTagManager: function ( gtm_id ) {
			(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
				new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
				j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
				'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer', gtm_id );
		},
		loadFacebook: function() {
			!function(f,b,e,v,n,t,s)
			{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
			n.callMethod.apply(n,arguments):n.queue.push(arguments)};
			if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
			n.queue=[];t=b.createElement(e);t.async=!0;
			t.src=v;s=b.getElementsByTagName(e)[0];
			s.parentNode.insertBefore(t,s)}(window,document,'script',
			'https://connect.facebook.net/en_US/fbevents.js');
		},
		loadTwitter: function() {
			!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
			},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
			a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
		},
		fireHotjar: function( hjid ) {
			(function(h,o,t,j,a,r){
			h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
			h._hjSettings={hjid:hjid,hjsv:5};
			a=o.getElementsByTagName('head')[0];
			r=o.createElement('script');r.async=1;
			r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
			a.appendChild(r);
			})(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
		},
		fireAdWords: function ( data ) {
			this.attachScriptElement( 'https://www.googleadservices.com/pagead/conversion_async.js', {}, function() {
				window.google_trackConversion( data );
			});
		}
	}
})();