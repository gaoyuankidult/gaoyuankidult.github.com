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

/*! PJAX - Smooth Page Navigation */
(function() {
  if (!window.history || !window.fetch || !document.querySelector) return;

  var isLoading = false;

  function loadPage(href) {
    if (isLoading) return;
    isLoading = true;

    // Get sidebar BEFORE loading new page
    var oldSidebar = document.querySelector('.article-author-side');
    var oldSidebarContent = oldSidebar ? oldSidebar.innerHTML : '';

    fetch(href)
      .then(function(response) {
        if (!response.ok) throw new Error('Network error');
        return response.text();
      })
      .then(function(html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');

        // Get the content area from new page
        var newIndex = doc.querySelector('#index');
        var oldIndex = document.querySelector('#index');

        // Get page title
        var newTitle = doc.querySelector('title');
        if (newTitle) document.title = newTitle.textContent;

        if (newIndex && oldIndex) {
          oldIndex.innerHTML = newIndex.innerHTML;

          // RESTORE sidebar to prevent flash
          if (oldSidebar && oldSidebarContent) {
            oldSidebar.innerHTML = oldSidebarContent;
          }

          history.pushState(null, '', href);
          window.scrollTo(0, 0);
          initPage();
        }

        isLoading = false;
      })
      .catch(function() {
        isLoading = false;
        window.location.href = href;
      });
  }

  document.addEventListener('click', function(e) {
    var link = e.target.closest('a');
    if (!link) return;

    var href = link.getAttribute('href');
    if (!href) return;

    // Only internal links
    if (href.indexOf('/') === 0 && !href.match(/\.(pdf|zip|jpg|png|jpeg|gif)$/i)) {
      if (href !== window.location.pathname) {
        e.preventDefault();
        loadPage(href);
      }
    }
  });

  window.addEventListener('popstate', function() {
    loadPage(window.location.href);
  });

  function initPage() {
    var observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.fade-in, .line-grow').forEach(el => observer.observe(el));
    document.querySelectorAll('.pub-item').forEach((el, i) => {
      el.classList.add('fade-in');
      el.style.transitionDelay = (i % 5) * 0.08 + 's';
      observer.observe(el);
    });
  }
})();
(function() {
  // Check if browser supports required features
  if (!window.history || !window.fetch || !document.querySelector) return;

  var isLoading = false;

  function loadPage(href) {
    if (isLoading) return;
    isLoading = true;

    // Save sidebar content before replacement
    var oldSidebar = document.querySelector('.article-author-side');
    var oldSidebarHTML = oldSidebar ? oldSidebar.innerHTML : '';

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

        // Get the main content area (#index)
        var newIndex = doc.querySelector('#index');
        var oldIndex = document.querySelector('#index');

        // Get h1 title
        var newH1 = doc.querySelector('article.page h1');
        var oldH1 = document.querySelector('article.page h1');

        // Get title separator
        var newSep = doc.querySelector('.title-separator');
        var oldSep = document.querySelector('.title-separator');

        if (newIndex && oldIndex) {
          // Replace only the content area (#index), keep sidebar
          oldIndex.innerHTML = newIndex.innerHTML;

          // Update h1 if exists
          if (newH1 && oldH1) {
            oldH1.textContent = newH1.textContent;
          }

          // Update separator visibility
          if (newSep && oldSep) {
            oldSep.style.display = newSep.style.display;
          }

          // Restore sidebar content (keeps avatar stable)
          if (oldSidebar && oldSidebarHTML) {
            oldSidebar.innerHTML = oldSidebarHTML;
          }

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
    // Re-initialize fade-in animations
    var observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.fade-in, .line-grow').forEach(el => observer.observe(el));

    // Auto-add fade-in to publication items
    document.querySelectorAll('.pub-item').forEach((el, i) => {
      el.classList.add('fade-in');
      el.style.transitionDelay = (i % 5) * 0.08 + 's';
      observer.observe(el);
    });
  }
})();

/*! Language Preference Memory */
(function() {
  var LANG_KEY = 'preferred_language';
  var currentPath = window.location.pathname;
  var isZhPage = currentPath.indexOf('/zh') === 0;

  // Get stored preference
  var storedLang = localStorage.getItem(LANG_KEY);

  // If there's a stored preference and we need to switch
  if (storedLang && ((storedLang === 'zh' && !isZhPage) || (storedLang === 'en' && isZhPage))) {
    var targetUrl;
    if (storedLang === 'zh') {
      // Switch to Chinese version
      if (!isZhPage) {
        targetUrl = '/zh' + currentPath;
      } else {
        targetUrl = currentPath;
      }
    } else {
      // Switch to English version
      targetUrl = currentPath.replace(/^\/zh/, '');
      if (targetUrl === '') targetUrl = '/';
    }

    // Don't redirect if already on correct page
    if (targetUrl !== currentPath) {
      window.location.href = targetUrl;
      return;
    }
  }

  // If no stored preference but on Chinese page, save it
  if (isZhPage && !storedLang) {
    localStorage.setItem(LANG_KEY, 'zh');
  }

  // Handle language switch clicks
  document.addEventListener('click', function(e) {
    var link = e.target.closest('.lang-link');
    if (!link) return;

    var href = link.getAttribute('href');
    if (!href) return;

    // Determine target language from URL
    var targetLang = href.indexOf('/zh') === 0 ? 'zh' : 'en';
    localStorage.setItem(LANG_KEY, targetLang);
  });

  // Also handle clicks on any link - if moving between language versions
  document.addEventListener('click', function(e) {
    var link = e.target.closest('a');
    if (!link) return;

    var href = link.getAttribute('href');
    if (!href || href.indexOf('/') !== 0) return;

    var linkIsZh = href.indexOf('/zh') === 0;
    var currentIsZh = window.location.pathname.indexOf('/zh') === 0;

    // If crossing language boundary and it's not a language switch link
    if (linkIsZh !== currentIsZh && !link.classList.contains('lang-link')) {
      // Store the language of the page we're navigating to
      var navLang = linkIsZh ? 'zh' : 'en';
      localStorage.setItem(LANG_KEY, navLang);
    }
  });
})();
