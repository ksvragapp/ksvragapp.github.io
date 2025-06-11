// Header image preview functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create preview container
    const previewContainer = document.createElement('div');
    previewContainer.className = 'full-size-preview';
    document.body.appendChild(previewContainer);

    // Function to show preview
    function showPreview(imageUrl) {
        previewContainer.innerHTML = `
            <img src="${imageUrl}" alt="Preview">
            <div class="close-preview">×</div>
        `;
        previewContainer.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    // Function to hide preview
    function hidePreview() {
        previewContainer.style.display = 'none';
        document.body.style.overflow = '';
    }

    // Add click event listeners to all header images
    document.querySelectorAll('.header-image').forEach(headerImage => {
        headerImage.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const imageUrl = this.getAttribute('data-image');
            if (imageUrl) {
                showPreview(imageUrl);
            }
        });
    });

    // Add click event listeners to all regular images
    document.querySelectorAll('.document-image, .chatbot-image, .file-viewer-image, .product-screenshot').forEach(img => {
        img.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            showPreview(this.src);
        });
    });

    // Close preview when clicking anywhere in the preview container
    previewContainer.addEventListener('click', function(e) {
        // Only close if clicking directly on the container or its background
        if (e.target === this) {
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