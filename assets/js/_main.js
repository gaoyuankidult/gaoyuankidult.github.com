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

/*! Link Prefetching */
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

/*! PJAX - Smooth Page Navigation */
(function() {
  function getContent(url) {
    return fetch(url)
      .then(function(response) {
        return response.text();
      })
      .then(function(html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');
        return {
          title: doc.title,
          content: doc.querySelector('#main').innerHTML,
          scripts: doc.querySelectorAll('#main script')
        };
      });
  }

  function handleClick(e) {
    var link = e.target.closest('a');
    if (!link) return;

    var href = link.getAttribute('href');
    if (!href) return;

    // Only handle internal links
    if (href.startsWith('http') && !href.includes(window.location.hostname)) return;
    if (href.startsWith('#')) return;
    if (link.hasAttribute('target')) return;

    e.preventDefault();

    // Add loading state
    document.body.classList.add('pjax-loading');

    getContent(href).then(function(data) {
      // Update title
      document.title = data.title;

      // Update content
      var main = document.querySelector('#main');
      main.innerHTML = data.content;

      // Reinitialize scripts
      data.scripts.forEach(function(script) {
        var newScript = document.createElement('script');
        if (script.src) {
          newScript.src = script.src;
        } else {
          newScript.textContent = script.textContent;
        }
        document.body.appendChild(newScript);
      });

      // Update URL
      window.history.pushState({}, '', href);

      // Remove loading state
      document.body.classList.remove('pjax-loading');

      // Scroll to top
      window.scrollTo(0, 0);

      // Trigger custom event for reinitialization
      window.dispatchEvent(new CustomEvent('pjax-complete'));
    }).catch(function() {
      // Fallback to normal navigation
      window.location.href = href;
    });
  }

  // Handle browser back/forward
  window.addEventListener('popstate', function(e) {
    getContent(window.location.href).then(function(data) {
      document.title = data.title;
      document.querySelector('#main').innerHTML = data.content;
      window.scrollTo(0, 0);
      window.dispatchEvent(new CustomEvent('pjax-complete'));
    });
  });

  // Attach click handler
  document.addEventListener('click', handleClick);
})();
