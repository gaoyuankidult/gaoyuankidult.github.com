/*! Responsive Menu */
// http://tympanus.net/codrops/2013/05/08/responsive-retina-ready-menu/
//  The function to change the class
var changeClass = function (r,className1,className2) {
  var regex = new RegExp("(?:^|\\s+)" + className1 + "(?:\\s+|$)");
  if( regex.test(r.className) ) {
    r.className = r.className.replace(regex,' '+className2+' ');
    }
    else{
    r.className = r.className.replace(new RegExp("(?:^|\\s+)" + className2 + "(?:\\s+|$)"),' '+className1+' ');
    }
    return r.className;
};
//  Creating our button in JS for smaller screens
var menuElements = document.getElementById('site-nav');
menuElements.insertAdjacentHTML('afterBegin','<button type="button" role="button" id="menutoggle" class="navtoogle navicon-lines-button x" aria-hidden="true"><span class="navicon-lines"></span>menu</button>');

//  Toggle the class on click to show / hide the menu
document.getElementById('menutoggle').onclick = function() {
  changeClass(this, 'navtoogle active', 'navtoogle');
};
// http://tympanus.net/codrops/2013/05/08/responsive-retina-ready-menu/comment-page-2/#comment-438918
document.onclick = function(e) {
  var mobileButton = document.getElementById('menutoggle'),
    buttonStyle =  mobileButton.currentStyle ? mobileButton.currentStyle.display : getComputedStyle(mobileButton, null).display;

  if(buttonStyle === 'block' && e.target !== mobileButton && new RegExp(' ' + 'active' + ' ').test(' ' + mobileButton.className + ' ')) {
    changeClass(mobileButton, 'navtoogle active', 'navtoogle');
  }
};

/*! Plugin options and other jQuery stuff */

// FitVids options
$(function() {
	$("article").fitVids();
});

// Table of Contents toggle
$(function() {
  $(".toc h3").click(function () {
    $("#drawer").toggleClass("js-hidden");
  });
});

// Add lightbox class to all image links
$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

// Magnific-Popup options
$(document).ready(function() {
  $('.image-popup').magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 300, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade'
  });
});

/*! Link Prefetching - disabled for now
document.addEventListener('mouseover', function(e) {
  if (e.target.tagName === 'A' && e.target.hasAttribute('data-prefetch')) {
    var link = e.target.href;
    if (!document.querySelector('link[rel="prefetch"][href="' + link + '"]')) {
      var prefetch = document.createElement('link');
      prefetch.rel = 'prefetch';
      prefetch.href = link;
      document.head.appendChild(prefetch);
    }
  }
}, false);
*/

/*! Simple PJAX - Smooth Page Navigation */
(function() {
  // Check if browser supports required features
  if (!window.history || !window.fetch || !document.querySelector) return;

  var isLoading = false;

  function loadPage(href) {
    if (isLoading) return;
    isLoading = true;

    // Show loading indicator
    document.body.classList.add('pjax-loading');

    fetch(href)
      .then(function(response) {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
      })
      .then(function(html) {
        // Parse the response
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');

        // Get the main content
        var newMain = doc.querySelector('#main');
        var oldMain = document.querySelector('#main');

        if (newMain && oldMain) {
          // Replace content
          oldMain.innerHTML = newMain.innerHTML;

          // Update page title
          var newTitle = doc.querySelector('title');
          if (newTitle) {
            document.title = newTitle.textContent;
          }

          // Update URL without reload
          history.pushState(null, '', href);

          // Scroll to top
          window.scrollTo(0, 0);

          // Re-run any page-specific scripts
          initPage();
        }

        isLoading = false;
        document.body.classList.remove('pjax-loading');
      })
      .catch(function(err) {
        console.log('PJAX failed, falling back to normal navigation:', err);
        isLoading = false;
        document.body.classList.remove('pjax-loading');
        // Fallback to normal page load
        window.location.href = href;
      });
  }

  function handleLinkClick(e) {
    var link = e.target.closest('a');
    if (!link) return;

    var href = link.getAttribute('href');
    if (!href) return;

    // Only handle internal relative links
    if (href.indexOf('/') === 0 && !href.match(/\.(pdf|zip|jpg|png|jpeg|gif)$/i)) {
      // Don't intercept if it's the same page
      if (href === window.location.pathname) return;

      e.preventDefault();
      loadPage(href);
    }
  }

  // Handle back/forward buttons
  window.addEventListener('popstate', function() {
    loadPage(window.location.href);
  });

  // Attach click handler
  document.addEventListener('click', handleLinkClick);

  // Re-initialize page-specific code
  function initPage() {
    // Re-initialize fade-in animations if they exist
    if (typeof initFadeIn === 'function') {
      initFadeIn();
    }
    // Re-initialize other page-specific code here
  }
})();
