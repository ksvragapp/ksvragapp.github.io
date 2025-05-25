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
const images = document.querySelectorAll('.document-image, .chatbot-image, .file-viewer-image');
const preview = document.createElement('div');
preview.className = 'full-size-preview';
document.body.appendChild(preview);

images.forEach(img => {
    img.addEventListener('click', () => {
        preview.style.display = 'flex';
        const imgClone = img.cloneNode();
        preview.innerHTML = '';
        preview.appendChild(imgClone);
    });
});

preview.addEventListener('click', (e) => {
    if (e.target === preview || e.target.className === 'full-size-preview') {
        preview.style.display = 'none';
    }
});

// Close preview when pressing escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        preview.style.display = 'none';
    }
});

// Manage scroll state
function manageScrollState(show) {
    const html = document.documentElement;
    const body = document.body;
    
    if (show) {
        // Save current scroll position
        const scrollY = window.scrollY;
        
        // Prevent scrolling
        html.style.overflow = 'hidden';
        body.style.overflow = 'hidden';
        
        // Set scroll position
        html.style.scrollBehavior = 'auto';
        window.scrollTo(0, scrollY);
        html.style.scrollBehavior = '';
    } else {
        // Restore scrolling
        html.style.overflow = '';
        body.style.overflow = '';
        
        // Restore scroll position
        const scrollY = window.scrollY;
        window.scrollTo(0, scrollY);
    }
}

// Close preview when clicking outside or pressing escape
preview.addEventListener('click', (e) => {
    if (e.target === preview || e.target.className === 'full-size-preview') {
        preview.style.display = 'none';
        manageScrollState(false);
    }
});

// Close preview when pressing escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        preview.style.display = 'none';
        manageScrollState(false);
    }
});

// Handle preview display
images.forEach(img => {
    img.addEventListener('click', () => {
        preview.style.display = 'flex';
        const imgClone = img.cloneNode();
        preview.innerHTML = '';
        preview.appendChild(imgClone);
        manageScrollState(true);
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
