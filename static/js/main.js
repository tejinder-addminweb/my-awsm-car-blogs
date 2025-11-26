// Main JavaScript for Hugo Site

(function() {
    'use strict';

    // Mobile menu toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    }

    // Scroll to top functionality
    const topLink = document.getElementById('top-link');
    if (topLink) {
        window.addEventListener('scroll', function() {
            if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
                topLink.style.visibility = 'visible';
                topLink.style.opacity = '1';
            } else {
                topLink.style.visibility = 'hidden';
                topLink.style.opacity = '0';
            }
        });

        topLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Copy code block functionality
    document.querySelectorAll('pre > code').forEach(codeblock => {
        const container = codeblock.parentNode.parentNode;
        
        const copybutton = document.createElement('button');
        copybutton.classList.add('copy-code');
        copybutton.innerHTML = 'Copy';
        copybutton.setAttribute('aria-label', 'Copy code to clipboard');
        
        function copyingDone() {
            copybutton.innerHTML = 'Copied!';
            setTimeout(() => {
                copybutton.innerHTML = 'Copy';
            }, 2000);
        }
        
        copybutton.addEventListener('click', function() {
            if ('clipboard' in navigator) {
                navigator.clipboard.writeText(codeblock.textContent);
                copyingDone();
                return;
            }
            
            // Fallback for older browsers
            const range = document.createRange();
            range.selectNodeContents(codeblock);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            try {
                document.execCommand('copy');
                copyingDone();
            } catch (e) {}
            selection.removeRange(range);
        });
        
        if (container.classList.contains('highlight')) {
            container.appendChild(copybutton);
        } else if (container.parentNode.firstChild == container) {
            // do nothing
        } else if (codeblock.parentNode.parentNode.parentNode.parentNode.parentNode.nodeName == 'TABLE') {
            codeblock.parentNode.parentNode.parentNode.parentNode.parentNode.appendChild(copybutton);
        } else {
            codeblock.parentNode.appendChild(copybutton);
        }
    });

    // Initialize theme
    (function() {
        const getTheme = function() {
            const theme = localStorage.getItem('pref-theme');
            return theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        };
        
        const setTheme = function(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('pref-theme', theme);
        };
        
        setTheme(getTheme());
        
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', function() {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                setTheme(currentTheme === 'dark' ? 'light' : 'dark');
            });
        }

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
            if (!localStorage.getItem('pref-theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });
    })();

})();

