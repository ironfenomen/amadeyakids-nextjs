document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.main-nav__toggle');
    const menu = document.querySelector('.main-nav__list');
    const overlay = document.querySelector('.main-nav__overlay');
    
    if (!toggle || !menu || !overlay) return;
    
    function toggleMenu() {
        const isActive = menu.classList.contains('active');
        
        if (isActive) {
            closeMenu();
        } else {
            openMenu();
        }
    }
    
    function openMenu() {
        menu.classList.add('active');
        overlay.classList.add('active');
        toggle.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMenu() {
        menu.classList.remove('active');
        overlay.classList.remove('active');
        toggle.classList.remove('active');
        document.body.style.overflow = '';
        
        dropdownItems.forEach(item => {
            item.classList.remove('active');
            const dropdown = item.querySelector('.main-nav__dropdown');
            if (dropdown) {
                dropdown.classList.remove('active');
            }
        });
    }
    
    const dropdownItems = menu.querySelectorAll('.main-nav__item--dropdown');
    
    toggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);
    
    dropdownItems.forEach(item => {
        const link = item.querySelector('.main-nav__link');
        const dropdown = item.querySelector('.main-nav__dropdown');
        const mainLink = item.querySelector('.main-nav__link-text');
        const arrow = item.querySelector('.main-nav__arrow');
        
        if (link && dropdown && mainLink && arrow) {
            let isProcessing = false;
            
            function toggleDropdown(e) {
                if (window.innerWidth <= 768 && !isProcessing) {
                    isProcessing = true;
                    e.preventDefault();
                    e.stopPropagation();
                    
                    dropdownItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                            const otherDropdown = otherItem.querySelector('.main-nav__dropdown');
                            if (otherDropdown) {
                                otherDropdown.classList.remove('active');
                            }
                        }
                    });
                    
                    item.classList.toggle('active');
                    dropdown.classList.toggle('active');
                    
                    setTimeout(() => {
                        isProcessing = false;
                    }, 100);
                }
            }
            
            function handleTouch(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation();
                    return true;
                }
                return false;
            }
            
            arrow.addEventListener('touchstart', function(e) {
                if (handleTouch(e)) {
                    toggleDropdown(e);
                }
            });
            
            arrow.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    toggleDropdown(e);
                }
            });
            
            let isNavigating = false;
            
            mainLink.addEventListener('touchstart', function(e) {
                if (handleTouch(e) && !isNavigating) {
                    isNavigating = true;
                    window.location.href = mainLink.href;
                }
            });
            
            mainLink.addEventListener('click', function(e) {
                if (window.innerWidth <= 768 && !isNavigating) {
                    isNavigating = true;
                    e.preventDefault();
                    e.stopPropagation();
                    window.location.href = mainLink.href;
                }
            });
        }
    });
    
    const regularLinks = menu.querySelectorAll('.main-nav__item:not(.main-nav__item--dropdown) a');
    regularLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    const dropdownLinks = menu.querySelectorAll('.main-nav__dropdown a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menu.classList.contains('active')) {
            closeMenu();
        }
    });
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            if (menu.classList.contains('active')) {
                closeMenu();
            }
            
            dropdownItems.forEach(item => {
                item.classList.remove('active');
                const dropdown = item.querySelector('.main-nav__dropdown');
                if (dropdown) {
                    dropdown.classList.remove('active');
                }
            });
        }
    });
});

