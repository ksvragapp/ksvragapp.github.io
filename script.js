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

    if (viewMoreBtn && featuresGrid) {
        // Initialize button text
        updateButtonText();
        
        viewMoreBtn.addEventListener('click', (e) => {
            featuresGrid.classList.toggle('expanded');
            updateButtonText();
            
            // Smooth scroll to the button's position when expanding
            if (featuresGrid.classList.contains('expanded')) {
                viewMoreBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
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
