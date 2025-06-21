// Smooth scrolling for navigation
window.addEventListener('scroll', () => {
    const ribbon = document.querySelector('.ribbon');
    if (window.scrollY > 50) {
        ribbon.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        ribbon.style.backgroundColor = '#ffffff';
    }
});

// Add any additional interactive features here

// Image preview functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create preview container if it doesn't exist
    if (!document.querySelector('.full-size-preview')) {
        const previewContainer = document.createElement('div');
        previewContainer.className = 'full-size-preview';
        document.body.appendChild(previewContainer);
    }

    // Function to show preview
    function showPreview(imageUrl) {
        const previewContainer = document.querySelector('.full-size-preview');
        previewContainer.innerHTML = `
            <img src="${imageUrl}" alt="Preview">
            <div class="close-preview">×</div>
        `;
        previewContainer.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    // Function to hide preview
    function hidePreview() {
        const previewContainer = document.querySelector('.full-size-preview');
        previewContainer.style.display = 'none';
        document.body.style.overflow = '';
    }

    // Add click event listeners to all header images
    const headerImages = document.querySelectorAll('.header-image');
    headerImages.forEach(headerImage => {
        headerImage.addEventListener('click', function() {
            const imageUrl = this.getAttribute('data-image');
            if (imageUrl) {
                showPreview(imageUrl);
            }
        });
    });

    // Add click event listeners to all regular images
    const regularImages = document.querySelectorAll('.document-image, .chatbot-image, .file-viewer-image, .product-screenshot');
    regularImages.forEach(img => {
        img.addEventListener('click', function() {
            const imageUrl = this.src;
            showPreview(imageUrl);
        });
    });

    // Close preview when clicking the close button or background
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('close-preview') || e.target.classList.contains('full-size-preview')) {
            hidePreview();
        }
    });

    // Close preview when pressing escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hidePreview();
        }
    });
});

// View More/Less functionality for features grid
document.addEventListener('DOMContentLoaded', () => {
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    const featuresGrid = document.getElementById('featuresGrid');
    let originalScrollPosition = 0;

    if (viewMoreBtn && featuresGrid) {
        // Initialize button text
        updateButtonText();
        
        viewMoreBtn.addEventListener('click', (e) => {
            const isExpanding = !featuresGrid.classList.contains('expanded');
            
            if (isExpanding) {
                // Store current scroll position before expanding
                originalScrollPosition = window.scrollY;
                
                // When expanding, scroll to the hidden content
                const hiddenContent = featuresGrid.querySelector('.feature-card:nth-child(10)');
                if (hiddenContent) {
                    hiddenContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else {
                // When collapsing, restore the original scroll position
                window.scrollTo({
                    top: originalScrollPosition,
                    behavior: 'smooth'
                });
            }
            
            featuresGrid.classList.toggle('expanded');
            updateButtonText();
        });
        
        function updateButtonText() {
            const isExpanded = featuresGrid.classList.contains('expanded');
            viewMoreBtn.textContent = isExpanded ? 'View Less Features' : 'View More Features';
        }
    }
});

// 1. Dynamic content loading
// 2. Interactive demos
// 3. Feature toggles
// 4. Theme switching

// Header image preview functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create preview container if it doesn't exist
    if (!document.querySelector('.full-size-preview')) {
        const previewContainer = document.createElement('div');
        previewContainer.className = 'full-size-preview';
        document.body.appendChild(previewContainer);
    }

    // Add click event listeners to all header images
    const headerImages = document.querySelectorAll('.header-image');
    headerImages.forEach(headerImage => {
        headerImage.addEventListener('click', function() {
            const imageUrl = this.getAttribute('data-image');
            const previewContainer = document.querySelector('.full-size-preview');
            
            // Create and show the preview image
            previewContainer.innerHTML = `
                <img src="${imageUrl}" alt="Preview">
                <div class="close-preview">×</div>
            `;
            previewContainer.style.display = 'flex';
            
            // Add click event to close button
            const closeButton = previewContainer.querySelector('.close-preview');
            closeButton.addEventListener('click', function(e) {
                e.stopPropagation();
                previewContainer.style.display = 'none';
            });
            
            // Close on background click
            previewContainer.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.style.display = 'none';
                }
            });
        });
    });
});

// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.ribbon-nav');
    const overlay = document.querySelector('.overlay');
    const links = document.querySelectorAll('.ribbon-link');

    function toggleMenu() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    }

    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                // Add a small delay to allow smooth scrolling to work properly
                setTimeout(() => {
                    toggleMenu();
                }, 100);
            }
        });
    });
});

// How To Guide Expander Functionality
function toggleExpander(header) {
    const expander = header.parentElement;
    const content = expander.querySelector('.expander-content');
    const icon = header.querySelector('.expander-icon');
    
    // Toggle active state
    header.classList.toggle('active');
    content.classList.toggle('active');
    
    // Close other expanders (optional - remove this if you want multiple open)
    const allExpanders = document.querySelectorAll('.guide-expander');
    allExpanders.forEach(otherExpander => {
        if (otherExpander !== expander) {
            const otherHeader = otherExpander.querySelector('.expander-header');
            const otherContent = otherExpander.querySelector('.expander-content');
            otherHeader.classList.remove('active');
            otherContent.classList.remove('active');
        }
    });
    
    // Smooth scroll to the expanded content
    if (content.classList.contains('active')) {
        setTimeout(() => {
            expander.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start',
                inline: 'nearest'
            });
        }, 300);
    }
}

// View More/Less functionality for How To Guide expanders
document.addEventListener('DOMContentLoaded', () => {
    const viewMoreGuidesBtn = document.getElementById('viewMoreGuidesBtn');
    const guideExpanders = document.querySelector('.guide-expanders');
    let originalScrollPosition = 0;

    if (viewMoreGuidesBtn && guideExpanders) {
        // Initialize button text
        updateButtonText();
        
        viewMoreGuidesBtn.addEventListener('click', (e) => {
            const isExpanding = !guideExpanders.classList.contains('expanded');
            
            if (isExpanding) {
                // Store current scroll position before expanding
                originalScrollPosition = window.scrollY;
                
                // When expanding, scroll to the first hidden expander
                const firstHiddenExpander = guideExpanders.querySelector('.hidden-expander');
                if (firstHiddenExpander) {
                    firstHiddenExpander.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else {
                // When collapsing, restore the original scroll position
                window.scrollTo({
                    top: originalScrollPosition,
                    behavior: 'smooth'
                });
            }
            
            guideExpanders.classList.toggle('expanded');
            updateButtonText();
        });
        
        function updateButtonText() {
            const isExpanded = guideExpanders.classList.contains('expanded');
            viewMoreGuidesBtn.textContent = isExpanded ? 'View Less' : 'View More';
        }
    }
});
